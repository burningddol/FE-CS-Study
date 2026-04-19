export type Chapter = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  readMins: number;
};

export type Stage = {
  num: string;
  slug: string;
  title: string;
  subtitle: string;
  weeks: string;
  overview: string;
  chapters: Chapter[];
};

export const curriculum: Stage[] = [
  {
    num: "01",
    slug: "1",
    title: "수학과 자료구조·알고리즘",
    subtitle: "모든 컴퓨팅 사고의 언어를 세운다",
    weeks: "1–2주차",
    overview:
      "비트와 진법, 이산수학, 복잡도를 거쳐 배열·해시·스택·큐·트리·그래프·정렬까지. 이후 모든 단계에서 반복 등장할 기초 어휘를 여기서 확립한다.",
    chapters: [
      {
        id: "1-1",
        num: "1.1",
        title: "수 표현과 비트 연산",
        blurb:
          "컴퓨터는 켜짐과 꺼짐으로만 숫자를 저장한다. 진법·2의 보수·IEEE 754·비트마스크.",
        readMins: 18,
      },
      {
        id: "1-2",
        num: "1.2",
        title: "이산수학 핵심",
        blurb:
          "드모르간으로 조건문을 리팩토링하고, 귀납법으로 재귀를 증명한다. 알고리즘의 언어.",
        readMins: 16,
      },
      {
        id: "1-3",
        num: "1.3",
        title: "복잡도 분석",
        blurb:
          "\"입력이 N배로 커지면 시간이 몇 배?\" 점근 표기법과 O(1)·O(n)·O(n²)의 진짜 의미.",
        readMins: 14,
      },
      {
        id: "1-4",
        num: "1.4",
        title: "배열·문자열·해시",
        blurb:
          "실무에서 가장 자주 쓰는 세 자료구조. unshift는 왜 O(n)인가. Map vs Object의 실전 구분.",
        readMins: 20,
      },
      {
        id: "1-5",
        num: "1.5",
        title: "스택·큐·힙",
        blurb:
          "LIFO, FIFO, 우선순위. 세 가지 줄 서기 방식이 알고리즘의 절반을 설명한다.",
        readMins: 18,
      },
      {
        id: "1-6",
        num: "1.6",
        title: "연결 리스트·트리·그래프",
        blurb:
          "노드-포인터 자료구조. DOM·Virtual DOM·번들러 의존성 — FE의 중심 구조가 여기 있다.",
        readMins: 22,
      },
      {
        id: "1-7",
        num: "1.7",
        title: "핵심 알고리즘",
        blurb:
          "정렬·이분 탐색·DP·그리디·위상 정렬·최단 경로. 실전에서 맞닥뜨리는 패턴 모음.",
        readMins: 24,
      },
    ],
  },
  {
    num: "02",
    slug: "2",
    title: "브라우저·네트워크·인증",
    subtitle: "웹이 실제로 어떻게 움직이는가",
    weeks: "3–4주차",
    overview:
      "TCP/IP에서 TLS, HTTP/3, OAuth, 이벤트 루프, 저장소, XSS·CSRF·CORS, 캐싱·CDN까지. 프론트엔드 실무의 중심축.",
    chapters: [],
  },
  {
    num: "03",
    slug: "3",
    title: "운영체제·컴퓨터 구조",
    subtitle: "왜 JS는 싱글 스레드인가",
    weeks: "5주차",
    overview: "프로세스/스레드, 동기·비동기 I/O, 메모리 관리, CPU 캐시·지역성.",
    chapters: [],
  },
  {
    num: "04",
    slug: "4",
    title: "데이터베이스",
    subtitle: "FE가 알아야 할 데이터 계층",
    weeks: "6주차",
    overview:
      "관계형 vs NoSQL, SQL 기본기, 정규화, 인덱스, 트랜잭션, FE가 자주 만나는 이슈.",
    chapters: [],
  },
  {
    num: "05",
    slug: "5",
    title: "심화 FE CS",
    subtitle: "프레임워크 내부를 이해한다",
    weeks: "7–8주차",
    overview:
      "V8 엔진, 실행 컨텍스트·클로저, 컴파일러·AST, 모듈·번들러, 렌더링 패턴, 성능, 프레임워크 내부, 접근성·PWA.",
    chapters: [],
  },
  {
    num: "06",
    slug: "6",
    title: "소프트웨어 공학",
    subtitle: "혼자서 서비스를 운영할 수 있도록",
    weeks: "9–10주차",
    overview:
      "디자인 패턴, SOLID, 아키텍처, 함수형, 테스팅, Git 내부, 배포·CI/CD.",
    chapters: [],
  },
];

export function findStage(slug: string): Stage | undefined {
  return curriculum.find((s) => s.slug === slug);
}

export function findChapter(
  stageSlug: string,
  chapterId: string,
): { stage: Stage; chapter: Chapter; index: number } | undefined {
  const stage = findStage(stageSlug);
  if (!stage) return undefined;
  const index = stage.chapters.findIndex((c) => c.id === chapterId);
  if (index < 0) return undefined;
  return { stage, chapter: stage.chapters[index], index };
}
