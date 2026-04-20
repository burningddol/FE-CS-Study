import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrandMark size={28} />
            <strong style={{ fontSize: 15, letterSpacing: "-0.02em" }}>JUNSEOK CS study</strong>
          </div>
          <p className="footer-desc">
            비전공 프론트엔드 개발자를 위한 10주 CS 집중 커리큘럼이에요.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-heading">학습</div>
            <Link href="/stage/1">1단계 · 자료구조</Link>
            <Link href="/stage/2">2단계 · 네트워크</Link>
            <Link href="/stage/3">3단계 · 운영체제</Link>
            <Link href="/stage/4">4단계 · 데이터베이스</Link>
            <Link href="/stage/5">5단계 · 심화 FE</Link>
            <Link href="/stage/6">6단계 · SW 공학</Link>
          </div>
          <div className="footer-col">
            <div className="footer-heading">원본</div>
            <a
              href="https://github.com/burningddol/FE-CS-Study/wiki"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Wiki
            </a>
            <a
              href="https://github.com/burningddol/FE-CS-Study"
              target="_blank"
              rel="noreferrer"
            >
              저장소
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-heading">소개</div>
            <Link href="/">이 노트에 대해</Link>
            <a
              href="https://github.com/burningddol/FE-CS-Study/issues"
              target="_blank"
              rel="noreferrer"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JUNSEOK CS study · MIT License</span>
        <span>Made with 열정</span>
      </div>
    </footer>
  );
}
