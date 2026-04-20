import Link from "next/link";
import type { Chapter, Stage } from "@/lib/curriculum";

interface LessonMetaProps {
  stage: Stage;
  chapter: Chapter;
  prev: Chapter | null;
  next: Chapter | null;
}

export function LessonMeta({ stage, chapter, prev, next }: LessonMetaProps) {
  return (
    <div className="lesson-meta">
      <div className="lesson-meta-top">
        <span className={`stage-tag stage-${stage.slug}`}>
          <span className="dot" />
          {stage.stageLabel}
        </span>
        <span className="meta-dot">·</span>
        <span className="meta-item-txt">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {chapter.duration}
        </span>
        <span className="meta-dot">·</span>
        <span className="meta-item-txt">{chapter.lessons}개 레슨</span>
      </div>
      <h1 className="lesson-title">{chapter.title}</h1>
      <p className="lesson-sub">{chapter.sub}</p>
      <div className="lesson-actions">
        {prev ? (
          <Link href={`/stage/${stage.slug}/${prev.id}`} className="btn btn-secondary">
            ← {prev.num} {prev.title}
          </Link>
        ) : (
          <Link href={`/stage/${stage.slug}`} className="btn btn-secondary">
            ← 단계 목록으로
          </Link>
        )}
        {next && (
          <Link href={`/stage/${stage.slug}/${next.id}`} className="btn btn-primary">
            다음 {next.num} →
          </Link>
        )}
      </div>
    </div>
  );
}
