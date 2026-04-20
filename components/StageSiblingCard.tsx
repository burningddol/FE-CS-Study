import Link from "next/link";
import type { Stage } from "@/lib/curriculum";

interface StageSiblingCardProps {
  stage: Stage;
  direction: "prev" | "next";
}

export function StageSiblingCard({ stage, direction }: StageSiblingCardProps) {
  const isNext = direction === "next";
  const label = isNext ? "다음 단계 →" : "← 이전 단계";

  return (
    <Link
      href={`/stage/${stage.slug}`}
      className={`course-card stage-sibling stage-sibling--${direction}`}
    >
      <div className="course-card-top stage-sibling-top">
        <span className={`course-stage-tag stage-sibling-tag stage-sibling-tag--${direction}`}>
          {label}
        </span>
      </div>
      <div className="stage-sibling-body">
        <div className="stage-sibling-kicker">{stage.stageLabel}</div>
        <div className="stage-sibling-title">{stage.title}</div>
      </div>
    </Link>
  );
}
