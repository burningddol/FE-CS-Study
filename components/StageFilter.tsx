"use client";

import { curriculum } from "@/lib/curriculum";

interface StageFilterProps {
  active: string;
  onChange: (stage: string) => void;
}

export function StageFilter({ active, onChange }: StageFilterProps) {
  return (
    <div className="stage-filter">
      <button
        type="button"
        className={`stage-chip ${active === "all" ? "is-active" : ""}`}
        onClick={() => onChange("all")}
      >
        <span>전체</span>
      </button>
      {curriculum.map((stage) => (
        <button
          key={stage.slug}
          type="button"
          className={`stage-chip stage-${stage.slug} ${active === stage.slug ? "is-active" : ""}`}
          onClick={() => onChange(stage.slug)}
        >
          <span className="stage-chip-num">{stage.num}</span>
          <span>{stage.title}</span>
        </button>
      ))}
    </div>
  );
}
