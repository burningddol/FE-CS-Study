export type ChapterStatus = "upcoming" | "inprogress" | "done";

export const PROGRESS_STORAGE_KEY = "cs-study:progress:v1";

export type ProgressMap = Record<string, ChapterStatus>;

export function statusToProgress(status: ChapterStatus): number {
  if (status === "done") return 100;
  if (status === "inprogress") return 50;
  return 0;
}

export function isChapterStatus(value: unknown): value is ChapterStatus {
  return value === "upcoming" || value === "inprogress" || value === "done";
}
