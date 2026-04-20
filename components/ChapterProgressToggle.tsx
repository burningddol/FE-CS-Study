"use client";

import { useEffect } from "react";
import { useProgress } from "@/components/ProgressProvider";
import type { ChapterStatus } from "@/lib/progress";

interface ChapterProgressToggleProps {
  chapterId: string;
}

function statusLabel(status: ChapterStatus): string {
  if (status === "done") return "완료됨";
  if (status === "inprogress") return "학습 중";
  return "시작 전";
}

function toggleTo(
  current: ChapterStatus,
  target: Exclude<ChapterStatus, "upcoming">,
): ChapterStatus {
  return current === target ? "upcoming" : target;
}

function InprogressDotIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ChapterProgressToggle({ chapterId }: ChapterProgressToggleProps) {
  const { getStatus, setStatus, isReady, markInProgressIfUpcoming } = useProgress();
  const status = getStatus(chapterId);

  const isDone = status === "done";
  const isInProgress = status === "inprogress";

  useEffect(() => {
    if (!isReady) return;
    markInProgressIfUpcoming(chapterId);
  }, [chapterId, isReady, markInProgressIfUpcoming]);

  function handleMarkInProgress() {
    setStatus(chapterId, toggleTo(status, "inprogress"));
  }

  function handleMarkDone() {
    setStatus(chapterId, toggleTo(status, "done"));
  }

  return (
    <div className="chapter-progress-toggle" aria-live="polite">
      <div className="chapter-progress-status">
        <span className="chapter-progress-label">진도 체크</span>
        <span className={`status-pill ${status}`}>{statusLabel(status)}</span>
      </div>
      <div className="chapter-progress-actions">
        <button
          type="button"
          className={`btn-track btn-track--inprogress${isInProgress ? " is-active" : ""}`}
          onClick={handleMarkInProgress}
          disabled={!isReady}
          aria-pressed={isInProgress}
        >
          <span className="btn-track-indicator" aria-hidden="true">
            {isInProgress && <InprogressDotIcon />}
          </span>
          <span>학습 중</span>
        </button>
        <button
          type="button"
          className={`btn-track btn-track--done${isDone ? " is-active" : ""}`}
          onClick={handleMarkDone}
          disabled={!isReady}
          aria-pressed={isDone}
        >
          <span className="btn-track-indicator" aria-hidden="true">
            {isDone && <CheckIcon />}
          </span>
          <span>학습 완료</span>
        </button>
      </div>
    </div>
  );
}
