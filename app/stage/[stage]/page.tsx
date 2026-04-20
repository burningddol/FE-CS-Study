import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { StageSiblingCard } from "@/components/StageSiblingCard";
import { curriculum, findStage } from "@/lib/curriculum";

export function generateStaticParams() {
  return curriculum.map((stage) => ({ stage: stage.slug }));
}

interface StagePageProps {
  params: Promise<{ stage: string }>;
}

export async function generateMetadata(
  { params }: StagePageProps,
): Promise<Metadata> {
  const { stage: stageSlug } = await params;
  const stage = findStage(stageSlug);
  if (!stage) return {};

  const title = `${stage.stageLabel} · ${stage.title}`;
  const url = `/stage/${stage.slug}`;

  return {
    title,
    description: stage.overview,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: stage.overview,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: stage.overview,
    },
  };
}

function totalDurationMinutes(chapters: { duration: string }[]): number {
  return chapters.reduce((sum, c) => {
    const m = parseInt(c.duration, 10);
    return sum + (Number.isNaN(m) ? 0 : m);
  }, 0);
}

export default async function StagePage({ params }: StagePageProps) {
  const { stage: stageSlug } = await params;
  const stage = findStage(stageSlug);
  if (!stage) notFound();

  const stageIndex = curriculum.findIndex((s) => s.slug === stageSlug);
  const prevStage = stageIndex > 0 ? curriculum[stageIndex - 1] : null;
  const nextStage =
    stageIndex < curriculum.length - 1 ? curriculum[stageIndex + 1] : null;

  const hasChapters = stage.chapters.length > 0;
  const totalDuration = totalDurationMinutes(stage.chapters);

  return (
    <>
      <Nav active="curriculum" />

      <section className="stage-hero">
        <div className="stage-hero-top">
          <Link href="/" style={{ color: "var(--fg-muted)" }}>홈</Link>
          <span className="breadcrumb-sep">/</span>
          <span className={`stage-tag stage-${stage.slug}`}>
            <span className="dot" />
            {stage.stageLabel}
          </span>
          <span className="breadcrumb-sep">·</span>
          <span>{stage.weeks}</span>
        </div>
        <h1 className="stage-hero-title">{stage.title}</h1>
        <p className="stage-hero-sub">{stage.overview}</p>
        <div className="stage-stats">
          <div className="stat stat--left">
            <div className="stat-val">{stage.chapters.length}</div>
            <div className="stat-label">총 챕터</div>
          </div>
          <div className="stat-divider" />
          <div className="stat stat--left">
            <div className="stat-val">
              {totalDuration > 0 ? `~${totalDuration}` : "—"}
              {totalDuration > 0 && (
                <span className="stat-unit">분</span>
              )}
            </div>
            <div className="stat-label">예상 학습시간</div>
          </div>
          <div className="stat-divider" />
          <div className="stat stat--left">
            <div
              className={`stat-val stat-status ${hasChapters ? "is-open" : "is-pending"}`}
            >
              {hasChapters ? "공개" : "준비 중"}
            </div>
            <div className="stat-label">상태</div>
          </div>
        </div>
      </section>

      {hasChapters ? (
        <div className="course-grid">
          {stage.chapters.map((chapter) => (
            <CourseCard key={chapter.id} stage={stage} chapter={chapter} />
          ))}
        </div>
      ) : (
        <div className="empty-card">
          <h3>아직 준비 중이에요</h3>
          <p>
            이 단계의 챕터는 아직 집필 중이에요. 먼저 1단계부터 읽으시면 이후
            단계가 공개됐을 때 훨씬 가볍게 따라올 수 있어요.
          </p>
          <Link href="/stage/1" className="btn btn-primary">
            1단계로 이동
          </Link>
        </div>
      )}

      <section className="stage-siblings">
        <div>{prevStage && <StageSiblingCard stage={prevStage} direction="prev" />}</div>
        <div>{nextStage && <StageSiblingCard stage={nextStage} direction="next" />}</div>
      </section>

      <Footer />
    </>
  );
}
