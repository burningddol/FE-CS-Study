import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { curriculum } from "@/lib/curriculum";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ─────────────  HERO  ───────────── */}
        <section className="relative border-b border-rule/70 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 grid grid-cols-12 gap-6 md:gap-10">
            {/* left — title stack */}
            <div className="col-span-12 lg:col-span-8 relative">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display text-burgundy italic text-xl">
                  vol. i
                </span>
                <span className="h-px flex-1 bg-rule max-w-[200px]" />
                <span className="font-display uppercase tracking-[0.32em] text-[11px] text-ink-mute">
                  2026 edition
                </span>
              </div>

              <h1 className="font-display font-light text-ink leading-[0.92] tracking-[-0.03em]">
                <span className="block text-[clamp(2.2rem,7vw,5.6rem)]">
                  프론트엔드 개발자
                </span>
                <span className="block text-[clamp(2.2rem,7vw,5.6rem)]">
                  를 위한 <span className="italic text-burgundy">컴퓨터</span>
                </span>
                <span className="block text-[clamp(2.2rem,7vw,5.6rem)]">
                  <span className="italic text-burgundy">과학</span> 수업노트.
                </span>
              </h1>

              <p className="mt-10 max-w-[56ch] font-body text-[17px] leading-[1.75] text-ink-soft">
                비전공자가 기능 구현 너머로 가기 위해 필요한 컴퓨터 과학
                전체를 <span className="hand-underline">10주</span>{" "}
                동안 정면으로 통과한다. 41개 챕터, 여섯 단계. 매 장마다{" "}
                <em className="italic text-ink">
                  &quot;왜 이게 이렇게 되는가&quot;
                </em>
                에 대한 답을 얻는다.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/stage/1"
                  className="group relative inline-flex items-center gap-3 bg-ink text-paper px-7 py-3.5 font-display text-[15px] no-underline hover:bg-burgundy-deep transition-colors"
                >
                  <span className="italic">1단계부터 시작</span>
                  <span className="w-6 h-px bg-paper transition-all group-hover:w-10" />
                  <span>→</span>
                </Link>
                <a
                  href="https://github.com/burningddol/FE-CS-Study/wiki"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display italic text-ink-soft hover:text-burgundy text-[15px]"
                >
                  원본 위키 보기 →
                </a>
              </div>
            </div>

            {/* right — marginalia */}
            <aside className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l border-rule/60 font-body text-[14.5px] leading-[1.68] text-ink-soft self-end">
              <div className="font-hand text-2xl text-burgundy mb-3 leading-tight">
                &mdash; 편집자의 주
              </div>
              <p className="mb-4">
                이 노트는 <strong className="text-ink">위키 형식</strong>의
                학습 자료를 읽기 좋게 재편한 것이다. 챕터 본문은 원문을
                그대로 두되, 각 장 앞에{" "}
                <em className="italic">도입부 섹션(§ 0)</em>을 두어
                아무 배경 없이 들어와도 맥락이 잡히도록 했다.
              </p>
              <p className="mb-4">
                모든 다이어그램은{" "}
                <strong className="text-ink">손으로 그린 SVG</strong>로
                새로 그렸다. 추상적인 개념일수록 그림이 먼저다.
              </p>
              <div className="mt-6 pt-5 border-t border-rule/60 flex items-baseline justify-between font-display text-[13px] tracking-[0.15em] uppercase">
                <span className="text-ink-mute">총 41장</span>
                <span className="text-burgundy italic lowercase normal-case tracking-normal font-semibold">
                  ∼ 14 hrs reading
                </span>
              </div>
            </aside>
          </div>

          <div className="hidden md:block absolute top-6 right-10 font-display italic text-ochre/60 text-[13px] tracking-widest">
            FE · CS · 2026
          </div>
          <div className="hidden md:block absolute bottom-5 left-10 font-hand text-ochre-soft/70 text-2xl rotate-[-4deg]">
            ✎ scholar&apos;s notebook
          </div>
        </section>

        {/* ─────────────  CURRICULUM INDEX  ───────────── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-ink">
              목차 <span className="italic text-burgundy">The Curriculum</span>
            </h2>
            <span className="font-display uppercase tracking-[0.28em] text-[11px] text-ink-mute hidden sm:inline">
              6 stages · 41 chapters
            </span>
          </div>

          <ol className="divide-y divide-rule/70 border-t-2 border-b-2 border-ink">
            {curriculum.map((stage) => (
              <li key={stage.num}>
                <Link
                  href={`/stage/${stage.slug}`}
                  className={`group grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 no-underline transition-colors ${
                    stage.slug === "1"
                      ? "hover:bg-paper-soft"
                      : "hover:bg-paper-soft/50"
                  }`}
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display italic text-5xl md:text-6xl text-burgundy leading-none">
                      {stage.num}
                    </span>
                  </div>

                  <div className="col-span-10 md:col-span-7">
                    <div className="font-display text-[11px] uppercase tracking-[0.26em] text-ink-mute mb-1.5">
                      {stage.weeks}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-ink mb-1.5 tracking-tight group-hover:text-burgundy transition-colors">
                      {stage.title}
                    </h3>
                    <div className="font-hand text-xl text-ink-mute mb-3">
                      {stage.subtitle}
                    </div>
                    <p className="text-ink-soft max-w-[60ch] text-[15.5px] leading-[1.68]">
                      {stage.overview}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-4 flex md:flex-col md:items-end md:justify-between md:text-right gap-4">
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-1">
                        {stage.chapters.length > 0
                          ? `${stage.chapters.length} chapters`
                          : "준비 중"}
                      </div>
                      {stage.slug === "1" && (
                        <div className="font-display italic text-burgundy text-lg">
                          읽기 가능 →
                        </div>
                      )}
                    </div>
                    {stage.chapters.length > 0 && (
                      <ul className="text-right text-[12px] text-ink-mute font-mono space-y-0.5">
                        {stage.chapters.slice(0, 3).map((c) => (
                          <li key={c.id}>
                            {c.num} · {c.title}
                          </li>
                        ))}
                        {stage.chapters.length > 3 && (
                          <li className="italic font-display text-ochre">
                            +{stage.chapters.length - 3} more
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* ─────────────  FOOTNOTE  ───────────── */}
        <footer className="border-t border-rule/70 bg-paper-deep/50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="font-display italic text-2xl text-ink">
                finis coronat opus.
              </div>
              <div className="font-hand text-xl text-burgundy mt-1">
                &mdash; 끝이 전체를 완성한다.
              </div>
            </div>
            <div className="font-display text-[12px] uppercase tracking-[0.24em] text-ink-mute">
              burningddol · MIT license · 2026
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
