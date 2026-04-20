"use client";

import Link from "next/link";
import type { Stage } from "@/lib/curriculum";
import { useProgress } from "@/components/ProgressProvider";

interface StageOverviewCardProps {
  stage: Stage;
}

export function StageOverviewCard({ stage }: StageOverviewCardProps) {
  const { getStatus } = useProgress();

  const chapterCount = stage.chapters.length;
  const doneCount = stage.chapters.filter((c) => getStatus(c.id) === "done").length;
  const progress =
    chapterCount === 0 ? 0 : Math.round((doneCount / chapterCount) * 100);

  const href = chapterCount > 0 ? `/stage/${stage.slug}` : "#";
  const isLocked = chapterCount === 0;

  return (
    <Link
      href={href}
      className={`course-card stage-${stage.slug}`}
      style={isLocked ? { opacity: 0.75, cursor: "default" } : undefined}
    >
      <div className="course-card-top">
        <div className="course-stage-tag">
          <span className="stage-dot" />
          <span>{stage.stageLabel}</span>
        </div>
        {isLocked ? (
          <span className="status-pill upcoming">준비 중</span>
        ) : (
          <span className="status-pill inprogress">{stage.weeks}</span>
        )}
      </div>
      <div className="course-card-body">
        <div className="course-num">{stage.num}</div>
        <div>
          <h3 className="course-title">{stage.title}</h3>
          <p className="course-sub">{stage.overview}</p>
        </div>
      </div>
      <div className="course-card-foot">
        <div className="course-meta">
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span>{chapterCount || "—"}개 챕터</span>
          </span>
        </div>
        <div className="card-progress">
          <div className="card-progress-track">
            <div className="card-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="card-progress-label">{progress}%</span>
        </div>
      </div>
    </Link>
  );
}
