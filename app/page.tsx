import { Nav } from "@/components/Nav";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { StageOverviewCard } from "@/components/StageOverviewCard";
import { ChapterBrowser } from "@/components/ChapterBrowser";
import { curriculum, availableChapters, totalChapters } from "@/lib/curriculum";

export default function Home() {
  const total = totalChapters();
  const available = availableChapters();

  return (
    <>
      <Nav active="home" />
      <HeroBanner total={total} />

      <section id="curriculum" className="filters-wrap">
        <div className="section-head">
          <h2 className="section-title">6단계 커리큘럼</h2>
          <span className="section-caption">
            총 <strong>{total}</strong>개 챕터 · <strong>{available}</strong>개 공개
          </span>
        </div>
      </section>

      <div className="course-grid">
        {curriculum.map((stage) => (
          <StageOverviewCard key={stage.slug} stage={stage} />
        ))}
      </div>

      <section id="progress" className="filters-wrap" style={{ paddingTop: 32 }}>
        <div className="section-head">
          <h2 className="section-title">공개된 챕터 · 바로 시작하기</h2>
          <span className="section-caption">단계별 필터로 좁혀볼 수 있어요</span>
        </div>
      </section>

      <ChapterBrowser />

      <Footer />
    </>
  );
}
