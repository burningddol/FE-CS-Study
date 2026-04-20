"use client";

import Link from "next/link";
import type { Chapter, Stage } from "@/lib/curriculum";
import { statusToProgress, type ChapterStatus } from "@/lib/progress";
import { useChapterStatus } from "@/components/ProgressProvider";

interface CourseCardProps {
  stage: Stage;
  chapter: Chapter;
}

function StatusPill({ status }: { status: ChapterStatus }) {
  if (status === "done") return <span className="status-pill done">완료</span>;
  if (status === "inprogress")
    return <span className="status-pill inprogress">학습 중</span>;
  return null;
}

export function CourseCard({ stage, chapter }: CourseCardProps) {
  const status = useChapterStatus(chapter.id);
  const progress = statusToProgress(status);

  const href = chapter.hasContent
    ? `/stage/${stage.slug}/${chapter.id}`
    : `/stage/${stage.slug}`;

  return (
    <Link className={`course-card stage-${stage.slug}`} href={href}>
      <div className="course-card-top">
        <div className="course-stage-tag">
          <span className="stage-dot" />
          <span>{stage.stageLabel}</span>
        </div>
        <StatusPill status={status} />
      </div>
      <div className="course-card-body">
        <div className="course-num">{chapter.num}</div>
        <div>
          <h3 className="course-title">{chapter.title}</h3>
          <p className="course-sub">{chapter.sub}</p>
        </div>
      </div>
      <div className="course-card-foot">
        <div className="course-meta">
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{chapter.duration}</span>
          </span>
        </div>
        <div className="card-progress">
          <div className="card-progress-track">
            <div
              className="card-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="card-progress-label">{progress}%</span>
        </div>
      </div>
    </Link>
  );
}
