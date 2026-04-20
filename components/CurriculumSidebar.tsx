"use client";

import Link from "next/link";
import type { Chapter } from "@/lib/curriculum";
import { curriculum } from "@/lib/curriculum";
import { useProgress } from "@/components/ProgressProvider";

interface CurriculumSidebarProps {
  activeChapterId: string;
  activeStageSlug: string;
}

const STAGE_COLORS: Record<string, string> = {
  "1": "#4F46E5",
  "2": "#06B6D4",
  "3": "#8B5CF6",
  "4": "#10B981",
  "5": "#EC4899",
  "6": "#F59E0B",
};

function CheckIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface SidebarItemProps {
  chapter: Chapter;
  stageSlug: string;
  isActive: boolean;
  isDone: boolean;
}

function SidebarItem({ chapter, stageSlug, isActive, isDone }: SidebarItemProps) {
  const className = `sidebar-item ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}`;
  const body = (
    <>
      <span className="sidebar-item-check">{isDone && <CheckIcon />}</span>
      <span className="sidebar-item-label">{chapter.title}</span>
      <span className="sidebar-item-dur">{chapter.duration}</span>
    </>
  );

  if (!chapter.hasContent) {
    return (
      <div className={`${className} is-locked`} aria-disabled="true">
        {body}
      </div>
    );
  }

  return (
    <Link href={`/stage/${stageSlug}/${chapter.id}`} className={className}>
      {body}
    </Link>
  );
}

export function CurriculumSidebar({
  activeChapterId,
  activeStageSlug,
}: CurriculumSidebarProps) {
  const { getStatus } = useProgress();
  const activeStage = curriculum.find((s) => s.slug === activeStageSlug);
  if (!activeStage) return null;

  const totalCount = activeStage.chapters.length;
  const completedCount = activeStage.chapters.filter(
    (c) => getStatus(c.id) === "done",
  ).length;
  const stageProgress =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-kicker">{activeStage.weeks}</span>
        <h2 className="sidebar-title">{activeStage.title}</h2>
        <div className="sidebar-progress">
          <div className="sidebar-progress-track">
            <div
              className="sidebar-progress-fill"
              style={{ width: `${stageProgress}%` }}
            />
          </div>
          <span className="sidebar-progress-label">{stageProgress}%</span>
        </div>
      </div>
      <div className="sidebar-list">
        <div
          className="sidebar-stage"
          style={{ color: STAGE_COLORS[activeStage.slug] }}
        >
          {activeStage.stageLabel}
        </div>
        {activeStage.chapters.map((chapter) => (
          <SidebarItem
            key={chapter.id}
            chapter={chapter}
            stageSlug={activeStage.slug}
            isActive={chapter.id === activeChapterId}
            isDone={getStatus(chapter.id) === "done"}
          />
        ))}
      </div>
    </aside>
  );
}
