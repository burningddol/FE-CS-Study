import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { CurriculumSidebar } from "@/components/CurriculumSidebar";
import { LessonMeta } from "@/components/LessonMeta";
import { NextCTA } from "@/components/NextCTA";
import { Footer } from "@/components/Footer";
import { ChapterProgressToggle } from "@/components/ChapterProgressToggle";
import { curriculum, findChapter } from "@/lib/curriculum";

export function generateStaticParams() {
  const params: { stage: string; chapter: string }[] = [];
  for (const stage of curriculum) {
    for (const chapter of stage.chapters) {
      if (chapter.hasContent) {
        params.push({ stage: stage.slug, chapter: chapter.id });
      }
    }
  }
  return params;
}

export const dynamicParams = false;

interface ChapterPageProps {
  params: Promise<{ stage: string; chapter: string }>;
}

export async function generateMetadata(
  { params }: ChapterPageProps,
): Promise<Metadata> {
  const { stage: stageSlug, chapter: chapterId } = await params;
  const found = findChapter(stageSlug, chapterId);
  if (!found || !found.chapter.hasContent) return {};

  const { stage, chapter } = found;
  const title = `${chapter.num} ${chapter.title}`;
  const ogTitle = `${title} · ${stage.stageLabel}`;
  const url = `/stage/${stage.slug}/${chapter.id}`;

  return {
    title,
    description: chapter.sub,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: ogTitle,
      description: chapter.sub,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: chapter.sub,
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { stage: stageSlug, chapter: chapterId } = await params;
  const found = findChapter(stageSlug, chapterId);
  if (!found || !found.chapter.hasContent) notFound();

  const { stage, chapter, prev, next } = found;

  const { default: Content } = await import(
    `@/content/stage-${stage.slug}/${chapter.id}.mdx`
  );

  return (
    <>
      <TopBar
        stageLabel={stage.stageLabel}
        stageSlug={stage.slug}
        chapterTitle={chapter.title}
      />
      <div className="layout">
        <CurriculumSidebar
          activeChapterId={chapter.id}
          activeStageSlug={stage.slug}
        />
        <main className="main">
          <LessonMeta stage={stage} chapter={chapter} prev={prev} next={next} />
          <div className="lesson-body">
            <div className="prose">
              <Content />
            </div>
          </div>
          <ChapterProgressToggle chapterId={chapter.id} />
          <NextCTA stageSlug={stage.slug} next={next} />
        </main>
      </div>
      <Footer />
    </>
  );
}
