"use client";

import { useMemo, useState } from "react";
import { curriculum } from "@/lib/curriculum";
import { CourseCard } from "@/components/CourseCard";
import { StageFilter } from "@/components/StageFilter";

export function ChapterBrowser() {
  const [activeStage, setActiveStage] = useState<string>("all");

  const rows = useMemo(() => {
    const pairs = curriculum.flatMap((stage) =>
      stage.chapters
        .filter((c) => c.hasContent)
        .map((chapter) => ({ stage, chapter })),
    );
    if (activeStage === "all") return pairs;
    return pairs.filter(({ stage }) => stage.slug === activeStage);
  }, [activeStage]);

  return (
    <>
      <section className="filters-wrap" style={{ paddingTop: 0 }}>
        <StageFilter active={activeStage} onChange={setActiveStage} />
      </section>

      {rows.length === 0 ? (
        <div className="empty-card">
          <h3>이 단계는 아직 준비 중이에요</h3>
          <p>
            먼저 1단계부터 읽으시면 이후 단계가 공개됐을 때 훨씬 가볍게 따라올 수
            있어요.
          </p>
        </div>
      ) : (
        <div className="course-grid">
          {rows.map(({ stage, chapter }) => (
            <CourseCard key={`${stage.slug}-${chapter.id}`} stage={stage} chapter={chapter} />
          ))}
        </div>
      )}
    </>
  );
}
