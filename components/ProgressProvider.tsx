"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  PROGRESS_STORAGE_KEY,
  isChapterStatus,
  statusToProgress,
  type ChapterStatus,
  type ProgressMap,
} from "@/lib/progress";

interface ProgressContextValue {
  progress: ProgressMap;
  isReady: boolean;
  setStatus: (chapterId: string, status: ChapterStatus) => void;
  getStatus: (chapterId: string) => ChapterStatus;
  markInProgressIfUpcoming: (chapterId: string) => void;
  clearAll: () => void;
  summary: {
    done: number;
    inprogress: number;
    overallOf: (totalChapters: number) => number;
  };
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function sanitize(parsed: unknown): ProgressMap {
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
  const result: ProgressMap = {};
  for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
    if (isChapterStatus(value) && value !== "upcoming") {
      result[key] = value;
    }
  }
  return result;
}

function readInitial(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return {};
    return sanitize(JSON.parse(raw));
  } catch {
    return {};
  }
}

interface ProgressProviderProps {
  children: React.ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setProgress(readInitial());
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      window.localStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify(progress),
      );
    } catch {
      // storage full or disabled — silently ignore
    }
  }, [progress, isReady]);

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key !== PROGRESS_STORAGE_KEY) return;
      setProgress(readInitial());
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setStatus = useCallback(
    (chapterId: string, status: ChapterStatus) => {
      setProgress((prev) => {
        if (status === "upcoming") {
          if (!(chapterId in prev)) return prev;
          const next = { ...prev };
          delete next[chapterId];
          return next;
        }
        if (prev[chapterId] === status) return prev;
        return { ...prev, [chapterId]: status };
      });
    },
    [],
  );

  const getStatus = useCallback(
    (chapterId: string): ChapterStatus => progress[chapterId] ?? "upcoming",
    [progress],
  );

  const markInProgressIfUpcoming = useCallback((chapterId: string) => {
    setProgress((prev) => {
      if (prev[chapterId]) return prev;
      return { ...prev, [chapterId]: "inprogress" };
    });
  }, []);

  const clearAll = useCallback(() => setProgress({}), []);

  const summary = useMemo(() => {
    const values = Object.values(progress);
    const done = values.filter((s) => s === "done").length;
    const inprogress = values.filter((s) => s === "inprogress").length;
    return {
      done,
      inprogress,
      overallOf(totalChapters: number): number {
        if (totalChapters <= 0) return 0;
        const score = done * 100 + inprogress * statusToProgress("inprogress");
        return Math.round(score / totalChapters);
      },
    };
  }, [progress]);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      isReady,
      setStatus,
      getStatus,
      markInProgressIfUpcoming,
      clearAll,
      summary,
    }),
    [
      progress,
      isReady,
      setStatus,
      getStatus,
      markInProgressIfUpcoming,
      clearAll,
      summary,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return ctx;
}

export function useChapterStatus(chapterId: string): ChapterStatus {
  const { getStatus } = useProgress();
  return getStatus(chapterId);
}
