import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ChapterNav } from "@/components/ChapterNav";
import { curriculum, findChapter } from "@/lib/curriculum";

export function generateStaticParams() {
  const params: { stage: string; chapter: string }[] = [];
  for (const stage of curriculum) {
    for (const chapter of stage.chapters) {
      params.push({ stage: stage.slug, chapter: chapter.id });
    }
  }
  return params;
}

export const dynamicParams = false;

interface ChapterPageProps {
  params: Promise<{ stage: string; chapter: string }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { stage: stageSlug, chapter: chapterId } = await params;
  const found = findChapter(stageSlug, chapterId);
  if (!found) notFound();

  const { stage, chapter, index } = found;

  const { default: Content } = await import(
    `@/content/stage-${stage.slug}/${chapter.id}.mdx`
  );

  const prevChapter = index > 0 ? stage.chapters[index - 1] : null;
  const nextChapter =
    index < stage.chapters.length - 1 ? stage.chapters[index + 1] : null;

  return (
    <>
      <SiteHeader />
      <main>
        {/* ─────────────  BREADCRUMB  ───────────── */}
        <div className="border-b border-rule/70">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 font-display text-[12px] uppercase tracking-[0.24em] text-ink-mute flex items-center gap-3 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="no-underline hover:text-burgundy">
              목차
            </Link>
            <span className="text-rule">/</span>
            <Link
              href={`/stage/${stage.slug}`}
              className="no-underline hover:text-burgundy"
            >
              Stage {stage.num}
            </Link>
            <span className="text-rule">/</span>
            <span className="text-ink normal-case tracking-normal font-semibold">
              § {chapter.num}
            </span>
          </div>
        </div>

        {/* ─────────────  CHAPTER BODY  ───────────── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT sidebar — chapter navigation */}
          <aside className="hidden lg:block col-span-3 xl:col-span-2 relative">
            <div className="sticky top-24">
              <ChapterNav stage={stage} currentId={chapter.id} />
            </div>
          </aside>

          {/* MAIN — article */}
          <article className="col-span-12 lg:col-span-9 xl:col-span-8 max-w-[760px] mx-auto lg:mx-0 w-full">
            {/* chapter meta header */}
            <header className="mb-14 pb-10 border-b border-rule/70">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display italic text-burgundy text-xl">
                  § {chapter.num}
                </span>
                <span className="h-px flex-1 bg-rule max-w-[160px]" />
                <span className="font-display uppercase tracking-[0.26em] text-[11px] text-ink-mute">
                  {chapter.readMins}분 읽기
                </span>
              </div>

              <h1 className="font-display text-ink font-light text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.025em] mb-6">
                {chapter.title}
              </h1>

              <p className="font-body text-[17px] leading-[1.75] text-ink-soft italic max-w-[62ch]">
                {chapter.blurb}
              </p>
            </header>

            <div className="prose-scholar">
              <Content />
            </div>

            {/* chapter nav — prev/next */}
            <nav className="mt-20 pt-10 border-t-2 border-ink grid grid-cols-2 gap-6">
              <div>
                {prevChapter && (
                  <Link
                    href={`/stage/${stage.slug}/${prevChapter.id}`}
                    className="group block no-underline"
                  >
                    <div className="font-display uppercase tracking-[0.24em] text-[10px] text-ink-mute mb-2">
                      ← 이전 장
                    </div>
                    <div className="font-display italic text-burgundy text-lg mb-0.5">
                      § {prevChapter.num}
                    </div>
                    <div className="font-display text-ink group-hover:text-burgundy transition-colors">
                      {prevChapter.title}
                    </div>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {nextChapter && (
                  <Link
                    href={`/stage/${stage.slug}/${nextChapter.id}`}
                    className="group block no-underline"
                  >
                    <div className="font-display uppercase tracking-[0.24em] text-[10px] text-ink-mute mb-2">
                      다음 장 →
                    </div>
                    <div className="font-display italic text-burgundy text-lg mb-0.5">
                      § {nextChapter.num}
                    </div>
                    <div className="font-display text-ink group-hover:text-burgundy transition-colors">
                      {nextChapter.title}
                    </div>
                  </Link>
                )}
              </div>
            </nav>
          </article>

          {/* RIGHT — decorative colophon column */}
          <aside className="hidden xl:block col-span-2 relative">
            <div className="sticky top-24 font-display text-[11px] uppercase tracking-[0.24em] text-ink-mute">
              <div className="border-l border-rule pl-4 mb-6">
                <div className="mb-1">colophon</div>
                <div className="font-hand text-lg text-burgundy normal-case tracking-normal">
                  §{chapter.num}
                </div>
              </div>
              <div className="border-l border-rule pl-4 mb-6">
                <div className="mb-1">stage</div>
                <div className="text-ink normal-case tracking-normal font-semibold">
                  {stage.title}
                </div>
              </div>
              <div className="border-l border-rule pl-4">
                <div className="mb-1">weeks</div>
                <div className="text-ink normal-case tracking-normal">
                  {stage.weeks}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
