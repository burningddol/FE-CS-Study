export interface Chapter {
  id: string;
  num: string;
  title: string;
  sub: string;
  duration: string;
  lessons: number;
  hasContent: boolean;
}

export interface Stage {
  num: string;
  slug: string;
  stageLabel: string;
  title: string;
  subtitle: string;
  weeks: string;
  overview: string;
  chapters: Chapter[];
}

export const curriculum: Stage[] = [
  {
    num: "01",
    slug: "1",
    stageLabel: "01 · 수학과 자료구조",
    title: "수학과 자료구조·알고리즘",
    subtitle: "모든 컴퓨팅 사고의 언어를 세워요",
    weeks: "1–2주차",
    overview:
      "비트와 진법, 이산수학, 복잡도를 거쳐 배열·해시·스택·큐·트리·그래프·정렬까지. 이후 모든 단계에서 반복 등장할 기초 어휘를 여기서 확립해요.",
    chapters: [
      {
        id: "1-1",
        num: "1-1",
        title: "수 표현과 비트 연산",
        sub: "진법 변환, 2의 보수, IEEE 754, 비트마스크 실전.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-2",
        num: "1-2",
        title: "이산수학 핵심",
        sub: "명제 논리, 집합, 순열·조합, 귀납법.",
        duration: "16분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-3",
        num: "1-3",
        title: "복잡도 분석",
        sub: "빅오, 분할상환, JS 내장 연산의 숨은 복잡도.",
        duration: "14분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-4",
        num: "1-4",
        title: "배열·문자열·해시",
        sub: "연산 비용표와 Object vs Map vs Set 실전.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-5",
        num: "1-5",
        title: "스택·큐·힙",
        sub: "LIFO, FIFO, 우선순위 큐가 설명하는 알고리즘의 반.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-6",
        num: "1-6",
        title: "연결 리스트·트리·그래프",
        sub: "DOM, Virtual DOM, 번들러 의존성 그래프의 뿌리.",
        duration: "22분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "1-7",
        num: "1-7",
        title: "핵심 알고리즘",
        sub: "정렬, 이분 탐색, DP, 그리디, 위상 정렬, 최단 경로.",
        duration: "24분",
        lessons: 5,
        hasContent: true,
      },
    ],
  },
  {
    num: "02",
    slug: "2",
    stageLabel: "02 · 브라우저와 네트워크",
    title: "브라우저·네트워크·인증",
    subtitle: "웹이 실제로 어떻게 움직이는지 들여다봐요",
    weeks: "3–4주차",
    overview:
      "TCP/IP에서 TLS 1.3, HTTP/3, OAuth, 이벤트 루프, 브라우저 저장소, XSS·CSRF·CORS, 캐싱·CDN까지.",
    chapters: [
      {
        id: "2-1",
        num: "2-1",
        title: "네트워크 기초",
        sub: "OSI 7계층, TCP/IP, TCP vs UDP, DNS.",
        duration: "22분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "2-2",
        num: "2-2",
        title: "HTTP와 HTTPS",
        sub: "HTTP 1.1/2/3 차이, TLS 1.3 핸드셰이크, 인증서.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "2-3",
        num: "2-3",
        title: "통신 프로토콜과 API 스타일",
        sub: "REST, GraphQL, gRPC, WebSocket, SSE.",
        duration: "20분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "2-4",
        num: "2-4",
        title: "인증과 인가",
        sub: "쿠키·세션, JWT, OAuth 2.0, OIDC.",
        duration: "22분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "2-5",
        num: "2-5",
        title: "브라우저 렌더링 과정",
        sub: "Critical Rendering Path, Reflow/Repaint, 합성.",
        duration: "20분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "2-6",
        num: "2-6",
        title: "이벤트 루프",
        sub: "Task·Microtask, requestAnimationFrame, 렌더 타이밍.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "2-7",
        num: "2-7",
        title: "브라우저 저장소",
        sub: "Cookie, Local·SessionStorage, IndexedDB, Cache API.",
        duration: "16분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "2-8",
        num: "2-8",
        title: "웹 보안",
        sub: "XSS, CSRF, CORS, CSP, SameSite 쿠키.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "2-9",
        num: "2-9",
        title: "캐싱과 CDN",
        sub: "Cache-Control, ETag, CDN 동작 원리.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
    ],
  },
  {
    num: "03",
    slug: "3",
    stageLabel: "03 · 운영체제",
    title: "운영체제·컴퓨터 구조",
    subtitle: "왜 JS는 싱글 스레드인지 끝까지 설명해요",
    weeks: "5주차",
    overview:
      "프로세스와 스레드, 동기·비동기 I/O 모델, 메모리 관리, CPU 캐시와 지역성.",
    chapters: [
      {
        id: "3-1",
        num: "3-1",
        title: "프로세스와 스레드",
        sub: "Process vs Thread, 컨텍스트 스위칭, JS 싱글 스레드.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "3-2",
        num: "3-2",
        title: "동기·비동기와 I/O 모델",
        sub: "Blocking vs Non-blocking, 이벤트 기반 I/O.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "3-3",
        num: "3-3",
        title: "메모리 관리",
        sub: "스택과 힙, 가비지 컬렉션, 메모리 누수 패턴.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "3-4",
        num: "3-4",
        title: "CPU 캐시·지역성",
        sub: "L1/L2/L3, 캐시 라인, 시간·공간 지역성.",
        duration: "16분",
        lessons: 4,
        hasContent: true,
      },
    ],
  },
  {
    num: "04",
    slug: "4",
    stageLabel: "04 · 데이터베이스",
    title: "데이터베이스",
    subtitle: "FE가 알아야 할 데이터 계층을 정리해요",
    weeks: "6주차",
    overview:
      "관계형 vs NoSQL, SQL 기본기, 정규화, 인덱스, 트랜잭션, FE가 자주 만나는 실무 이슈.",
    chapters: [
      {
        id: "4-1",
        num: "4-1",
        title: "DB 기초와 선택 기준",
        sub: "관계형 vs NoSQL, ACID vs BASE, 선택 기준.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "4-2",
        num: "4-2",
        title: "SQL 기본기",
        sub: "JOIN, 서브쿼리, GROUP BY, 윈도우 함수.",
        duration: "20분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "4-3",
        num: "4-3",
        title: "정규화",
        sub: "1NF~BCNF, 역정규화의 트레이드오프.",
        duration: "16분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "4-4",
        num: "4-4",
        title: "인덱스",
        sub: "B-Tree, 해시, 복합 인덱스, 실행 계획.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "4-5",
        num: "4-5",
        title: "트랜잭션",
        sub: "ACID, 격리 수준, 락과 데드락.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "4-6",
        num: "4-6",
        title: "FE가 자주 만나는 이슈",
        sub: "N+1, 페이지네이션, 동시성, 시간대 처리.",
        duration: "16분",
        lessons: 4,
        hasContent: true,
      },
    ],
  },
  {
    num: "05",
    slug: "5",
    stageLabel: "05 · 심화 FE",
    title: "심화 FE CS",
    subtitle: "프레임워크 내부를 열어봐요",
    weeks: "7–8주차",
    overview:
      "V8 엔진, 실행 컨텍스트와 클로저, 컴파일러·AST, 모듈·번들러, 렌더링 패턴, 성능, 프레임워크 내부, 접근성과 PWA.",
    chapters: [
      {
        id: "5-1",
        num: "5-1",
        title: "JavaScript 엔진 V8",
        sub: "Ignition, TurboFan, Hidden Class, Inline Cache.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-2",
        num: "5-2",
        title: "실행 컨텍스트·스코프·클로저",
        sub: "Execution Context, Scope Chain, Closure의 실체.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-3",
        num: "5-3",
        title: "컴파일러와 AST",
        sub: "파서, AST, Babel·SWC 내부 흐름.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "5-4",
        num: "5-4",
        title: "모듈 시스템과 번들러",
        sub: "CommonJS vs ESM, Webpack·Vite·Rollup.",
        duration: "20분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-5",
        num: "5-5",
        title: "렌더링 패턴",
        sub: "CSR, SSR, SSG, ISR, RSC.",
        duration: "20분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-6",
        num: "5-6",
        title: "웹 성능 최적화",
        sub: "Core Web Vitals(LCP, CLS, INP), 번들·이미지.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-7",
        num: "5-7",
        title: "프레임워크 내부 동작",
        sub: "Virtual DOM, Fiber, Reactivity 시스템.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "5-8",
        num: "5-8",
        title: "기타 꼭 알아야 할 것들",
        sub: "접근성, i18n, PWA, Service Worker.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
    ],
  },
  {
    num: "06",
    slug: "6",
    stageLabel: "06 · SW 공학",
    title: "소프트웨어 공학",
    subtitle: "혼자서 서비스를 운영할 수 있는 힘을 길러요",
    weeks: "9–10주차",
    overview:
      "디자인 패턴, SOLID, 아키텍처, 함수형, 테스팅, Git 내부, 배포와 CI/CD.",
    chapters: [
      {
        id: "6-1",
        num: "6-1",
        title: "디자인 패턴",
        sub: "생성·구조·행동 패턴과 FE 실전 적용.",
        duration: "22분",
        lessons: 5,
        hasContent: true,
      },
      {
        id: "6-2",
        num: "6-2",
        title: "설계 원칙",
        sub: "SOLID, DRY, KISS, YAGNI.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "6-3",
        num: "6-3",
        title: "아키텍처 패턴",
        sub: "MVC, MVVM, Flux, Clean Architecture.",
        duration: "20분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "6-4",
        num: "6-4",
        title: "함수형 프로그래밍",
        sub: "순수 함수, 불변성, 고차 함수, 커링.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "6-5",
        num: "6-5",
        title: "테스팅",
        sub: "단위·통합·E2E, TDD, 테스트 피라미드.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "6-6",
        num: "6-6",
        title: "버전 관리 Git",
        sub: "Git 내부 구조, 브랜치 전략, rebase vs merge.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
      {
        id: "6-7",
        num: "6-7",
        title: "배포와 CI/CD",
        sub: "CI/CD 파이프라인, 블루-그린, 카나리 배포.",
        duration: "18분",
        lessons: 4,
        hasContent: true,
      },
    ],
  },
];

export function findStage(slug: string): Stage | undefined {
  return curriculum.find((s) => s.slug === slug);
}

export interface FindChapterResult {
  stage: Stage;
  chapter: Chapter;
  index: number;
  prev: Chapter | null;
  next: Chapter | null;
}

export function findChapter(
  stageSlug: string,
  chapterId: string,
): FindChapterResult | undefined {
  const stage = findStage(stageSlug);
  if (!stage) return undefined;
  const index = stage.chapters.findIndex((c) => c.id === chapterId);
  if (index < 0) return undefined;
  const chapter = stage.chapters[index];
  const prev = index > 0 ? stage.chapters[index - 1] : null;
  const next = index < stage.chapters.length - 1 ? stage.chapters[index + 1] : null;
  return { stage, chapter, index, prev, next };
}

export function totalChapters(): number {
  return curriculum.reduce((sum, s) => sum + s.chapters.length, 0);
}

export function availableChapters(): number {
  return curriculum.reduce(
    (sum, s) => sum + s.chapters.filter((c) => c.hasContent).length,
    0,
  );
}
