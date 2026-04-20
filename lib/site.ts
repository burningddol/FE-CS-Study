const DEFAULT_SITE_URL = "https://junseok-cs-study.vercel.app";

export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
).replace(/\/$/, "");

export const SITE_NAME = "JUNSEOK CS study";

export const SITE_TITLE = `${SITE_NAME} — 프론트엔드 개발자를 위한 컴퓨터 과학`;

export const SITE_DESCRIPTION =
  "비전공 프론트엔드 개발자를 위한 10주 CS 집중 커리큘럼. 자료구조·네트워크·운영체제·데이터베이스·심화 프론트엔드·소프트웨어 공학까지 6단계 41개 챕터로 정리했어요.";

export const SITE_KEYWORDS = [
  "CS 스터디",
  "컴퓨터 과학",
  "프론트엔드 CS",
  "비전공 프론트엔드",
  "자료구조",
  "알고리즘",
  "네트워크",
  "운영체제",
  "데이터베이스",
  "면접 준비",
  "CS 면접",
  "React",
  "Next.js",
];

export const OG_IMAGE = {
  url: "/seo.png",
  width: 1200,
  height: 630,
  alt: "JUNSEOK CS study — 프론트엔드를 위한 CS 커리큘럼",
} as const;
