import Link from "next/link";
import type { Chapter } from "@/lib/curriculum";

interface NextCTAProps {
  stageSlug: string;
  next: Chapter | null;
}

export function NextCTA({ stageSlug, next }: NextCTAProps) {
  if (!next) {
    return (
      <div className="next-cta">
        <div>
          <div className="next-cta-label">NEXT</div>
          <p className="next-cta-title">이 단계의 마지막 챕터예요</p>
          <p className="next-cta-sub">
            다음 단계는 아직 준비 중이에요. 1단계 챕터를 복습해보세요.
          </p>
        </div>
        <Link href={`/stage/${stageSlug}`} className="btn btn-primary btn-lg">
          단계 목록으로 돌아가기
        </Link>
      </div>
    );
  }
  return (
    <div className="next-cta">
      <div>
        <div className="next-cta-label">NEXT · {next.num}</div>
        <p className="next-cta-title">{next.title}</p>
        <p className="next-cta-sub">{next.sub}</p>
      </div>
      <Link
        href={`/stage/${stageSlug}/${next.id}`}
        className="btn btn-primary btn-lg"
      >
        이어서 학습하기 →
      </Link>
    </div>
  );
}
