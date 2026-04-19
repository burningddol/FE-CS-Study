import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { curriculum, findStage } from "@/lib/curriculum";

export function generateStaticParams() {
  return curriculum.map((stage) => ({ stage: stage.slug }));
}

interface StagePageProps {
  params: Promise<{ stage: string }>;
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
  const totalReadMins = stage.chapters.reduce(
    (sum, c) => sum + c.readMins,
    0,
  );

  return (
    <>
      <SiteHeader />
      <main>
        {/* ─────────────  BREADCRUMB  ───────────── */}
        <div className="border-b border-rule/70">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 font-display text-[12px] uppercase tracking-[0.24em] text-ink-mute flex items-center gap-3">
            <Link href="/" className="no-underline hover:text-burgundy">
              목차
            </Link>
            <span className="text-rule">/</span>
            <span className="text-ink">
              Stage {stage.num}
            </span>
          </div>
        </div>

        {/* ─────────────  STAGE HERO  ───────────── */}
        <section className="relative border-b border-rule/70 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-14 pb-16 md:pt-20 md:pb-24 grid grid-cols-12 gap-6 md:gap-10">
            {/* left - title block */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display italic text-burgundy text-xl">
                  stage {stage.num}
                </span>
                <span className="h-px flex-1 bg-rule max-w-[180px]" />
                <span className="font-display uppercase tracking-[0.28em] text-[11px] text-ink-mute">
                  {stage.weeks}
                </span>
              </div>

              <h1 className="font-display font-light text-ink leading-[0.98] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4.4rem)] mb-6">
                {stage.title}
              </h1>

              <div className="font-hand text-2xl md:text-3xl text-burgundy mb-8 leading-snug">
                &mdash; {stage.subtitle}
              </div>

              <p className="font-body text-[17px] leading-[1.8] text-ink-soft max-w-[62ch]">
                {stage.overview}
              </p>
            </div>

            {/* right - stat block */}
            <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l border-rule/60 self-end">
              <div className="font-display uppercase tracking-[0.24em] text-[11px] text-ink-mute mb-5">
                이 단계의 통계
              </div>
              <dl className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-rule/50 pb-3">
                  <dt className="font-display italic text-ink-soft text-[14px]">
                    총 챕터
                  </dt>
                  <dd className="font-display text-burgundy text-3xl italic">
                    {hasChapters ? stage.chapters.length : "—"}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-rule/50 pb-3">
                  <dt className="font-display italic text-ink-soft text-[14px]">
                    예상 독서시간
                  </dt>
                  <dd className="font-display text-ink text-xl">
                    {hasChapters ? `~${totalReadMins}분` : "—"}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="font-display italic text-ink-soft text-[14px]">
                    상태
                  </dt>
                  <dd className="font-hand text-xl text-burgundy">
                    {hasChapters ? "읽기 가능" : "준비 중"}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="hidden md:block absolute top-5 right-10 font-display italic text-ochre/50 text-[12px] tracking-widest">
            Stage {stage.num} / 06
          </div>
        </section>

        {/* ─────────────  CHAPTER LIST  ───────────── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-ink">
              장 목록 <span className="italic text-burgundy">Chapters</span>
            </h2>
            {hasChapters && (
              <span className="font-display uppercase tracking-[0.26em] text-[11px] text-ink-mute hidden sm:inline">
                {stage.chapters.length} entries
              </span>
            )}
          </div>

          {hasChapters ? (
            <ol className="divide-y divide-rule/70 border-t-2 border-b-2 border-ink">
              {stage.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <Link
                    href={`/stage/${stage.slug}/${chapter.id}`}
                    className="group grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-9 no-underline hover:bg-paper-soft transition-colors"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-display italic text-4xl md:text-5xl text-burgundy leading-none">
                        {chapter.num}
                      </span>
                    </div>

                    <div className="col-span-8 md:col-span-9">
                      <h3 className="font-display text-xl md:text-2xl font-medium text-ink tracking-tight mb-2 group-hover:text-burgundy transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-ink-soft max-w-[64ch] text-[15px] leading-[1.7]">
                        {chapter.blurb}
                      </p>
                    </div>

                    <div className="col-span-2 flex md:items-start md:justify-end">
                      <div className="text-right">
                        <div className="font-display uppercase tracking-[0.2em] text-[10px] text-ink-mute mb-0.5">
                          read
                        </div>
                        <div className="font-display italic text-ochre text-lg">
                          {chapter.readMins}분
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <div className="border border-rule/70 border-dashed bg-paper-soft/60 p-12 md:p-16 text-center">
              <div className="font-hand text-3xl text-burgundy mb-3">
                준비 중입니다
              </div>
              <p className="font-body text-ink-soft max-w-[48ch] mx-auto leading-[1.7]">
                이 단계의 챕터는 아직 편집 중입니다. 우선 1단계부터 읽으며
                기초 어휘를 세워두시면, 이후 단계가 순차적으로 공개될 때
                훨씬 가볍게 따라올 수 있습니다.
              </p>
              <Link
                href="/stage/1"
                className="inline-flex items-center gap-3 mt-8 bg-ink text-paper px-6 py-3 font-display text-[14px] no-underline hover:bg-burgundy-deep transition-colors"
              >
                <span className="italic">1단계로 이동</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </section>

        {/* ─────────────  STAGE NAVIGATION  ───────────── */}
        <section className="border-t border-rule/70 bg-paper-deep/40">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-2 gap-6">
            <div>
              {prevStage && (
                <Link
                  href={`/stage/${prevStage.slug}`}
                  className="group block no-underline"
                >
                  <div className="font-display uppercase tracking-[0.24em] text-[10px] text-ink-mute mb-2">
                    ← 이전 단계
                  </div>
                  <div className="font-display italic text-burgundy text-2xl mb-1">
                    {prevStage.num}
                  </div>
                  <div className="font-display text-ink text-lg group-hover:text-burgundy transition-colors">
                    {prevStage.title}
                  </div>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextStage && (
                <Link
                  href={`/stage/${nextStage.slug}`}
                  className="group block no-underline"
                >
                  <div className="font-display uppercase tracking-[0.24em] text-[10px] text-ink-mute mb-2">
                    다음 단계 →
                  </div>
                  <div className="font-display italic text-burgundy text-2xl mb-1">
                    {nextStage.num}
                  </div>
                  <div className="font-display text-ink text-lg group-hover:text-burgundy transition-colors">
                    {nextStage.title}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
