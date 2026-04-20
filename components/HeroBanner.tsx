"use client";

import Link from "next/link";
import { useMemo } from "react";
import { curriculum } from "@/lib/curriculum";
import { useProgress } from "@/components/ProgressProvider";

interface HeroBannerProps {
  total: number;
}

interface ResumeTarget {
  href: string;
  label: string;
  caption: string;
}

function findResumeTarget(
  getStatus: (id: string) => "upcoming" | "inprogress" | "done",
): ResumeTarget | null {
  for (const stage of curriculum) {
    for (const chapter of stage.chapters) {
      if (!chapter.hasContent) continue;
      if (getStatus(chapter.id) === "inprogress") {
        return {
          href: `/stage/${stage.slug}/${chapter.id}`,
          label: "이어서 학습하기",
          caption: `${chapter.num} · ${chapter.title}`,
        };
      }
    }
  }
  return null;
}

export function HeroBanner({ total }: HeroBannerProps) {
  const { getStatus, isReady } = useProgress();

  const resume = useMemo<ResumeTarget | null>(() => {
    if (!isReady) return null;
    return findResumeTarget(getStatus);
  }, [getStatus, isReady]);

  const primaryHref = resume?.href ?? "/stage/1/1-1";
  const primaryLabel = resume?.label ?? "1단계부터 시작";

  return (
    <section className="hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="hero-body">
        <div>
          <div className="hero-kicker">FE 개발자를 위한 CS 스터디 · 10주</div>
          <h1 className="hero-title">
            쓰는 법 말고,
            <br />
            그 아래 <span className="hero-accent">CS</span>까지.
          </h1>
          <p className="hero-sub">자료구조·네트워크·OS·DB·프레임워크 내부까지.
            <br/>
            <span>
              FE에 필요한 CS 전 영역을 6단계 {total}개 챕터로 정리했어요.
            </span>
          </p>
          
          <div className="hero-cta">
            <Link href={primaryHref} className="btn btn-primary btn-lg">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              {primaryLabel}
            </Link>
            <Link href="#curriculum" className="btn btn-secondary btn-lg">
              커리큘럼 전체 보기
            </Link>
          </div>
          {resume && (
            <p className="hero-resume-caption">{resume.caption}</p>
          )}
        </div>
      </div>
    </section>
  );
}
