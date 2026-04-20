# JUNSEOK CS study — Design System

> **비전공 FE 개발자를 위한 10주 CS 집중 커리큘럼 웹사이트의 디자인 시스템**

친근하지만 진지한 에듀테크. 인프런의 따뜻한 학습 경험과 Linear의 정제된 개발자 감수성을 섞었습니다. 입문자가 "나도 할 수 있겠다"고 느끼면서도, 콘텐츠가 가벼워 보이지 않도록 타이포그래피와 여백에 무게를 실었습니다.

---

## 프로젝트 컨텍스트

**브랜드:** JUNSEOK CS study
**한 줄 설명:** 비전공자가 전공자 수준의 CS 기초를 10주 만에 갖추도록 돕는 학습 사이트
**콘텐츠:** 6단계 커리큘럼 — 자료구조·알고리즘 / 브라우저·네트워크 / 운영체제 / DB / 심화 FE CS·컴파일러 / 소프트웨어 공학
**타깃:** 비전공 입문자 (특히 FE 커리어 전환자)
**콘텐츠 톤:** 해요체, 선생님이 옆에서 설명해주는 느낌. 단순 암기가 아니라 "왜 그런지"를 증명할 수 있게 도와주는 서술.

**참고 자료 (유저 제공)**
- 콘텐츠 원본 위키: https://github.com/burningddol/FE-CS-Study/wiki

> 위키는 총 42페이지 분량의 상세한 챕터 본문을 담고 있습니다. 이 디자인 시스템은 그 텍스트 자산을 웹사이트로 풀어내기 위한 시각 체계입니다.

---

## 이 레포지토리 구성 (Index)

```
/
├── README.md              ← 이 파일 (브랜드 + 비주얼 + 콘텐츠 가이드)
├── SKILL.md               ← Claude / Agent Skill 진입점
├── colors_and_type.css    ← 컬러/타입 토큰. 모든 페이지에서 import
├── tokens.css             ← 간격·반경·그림자·모션 토큰
├── fonts/                 ← Pretendard, JetBrains Mono
├── assets/                ← 로고, 스테이지 아이콘, 장식용 SVG
├── preview/               ← Design System 탭에서 보여주는 낱개 카드들
├── ui_kits/
│   ├── course_list/       ← 강의 목록 페이지
│   └── course_detail/     ← 강의 상세 / 학습 페이지
└── slides/                ← (이번 버전에는 없음)
```

UI 킷 각각에는 `README.md`, `index.html` (프로토타입), 그리고 여러 `.jsx` 컴포넌트 파일이 들어 있습니다.

---

## 콘텐츠 기본 원칙 (CONTENT FUNDAMENTALS)

원본 위키의 톤을 그대로 계승합니다. 선생님이 옆에 앉아서 "이거 왜 그런지 같이 보자"고 말하는 느낌.

### 문체 (Voice)
- **해요체 기본.** "~합니다"는 공식 공지·약관에만. 학습 콘텐츠는 "~해요 / ~이에요 / 살펴볼게요".
- **2인칭 "여러분" 대신 암묵적 대상.** "여러분이 알아야 할 것"보다 "우리가 왜 이걸 배워야 하느냐면"이 훨씬 자연스럽습니다.
- **단정형보다 유도형.** "X입니다" → "X예요. 왜 그런지 한번 볼게요."
- **격려는 담백하게.** "화이팅!" 같은 감탄은 쓰지 않습니다. 대신 "여기까지 따라왔다면 이미 절반은 끝난 거예요." 류의 조용한 독려.

### 케이스 (Casing)
- **한글 제목:** 문장형 그대로. 모든 단어 앞글자를 키우거나 하지 않음. → "수 표현과 비트 연산" ✅ / "수 표현과 비트 연산" ✅
- **영문 제목/UI 라벨:** Sentence case. `Course list` ✅ / `Course List` ❌
- **기술 용어:** 원어 그대로 코드 폰트. `fetch`, `Reflow`, `B-Tree`. 한글 번역이 있어도 원어를 괄호로 병기. → "리플로우(Reflow)"
- **숫자:** 천 단위 콤마는 쓰지 않음 (학습 맥락). 단, 학생 수·수강 지표는 콤마 OK.

### 한글·영문 혼용 규칙
- 영문 용어 앞뒤에 공백 **한 칸**. → `JS의 V8 엔진은` ❌ → `JS 의 V8 엔진은` ❌ → `JS의 V8 엔진은` (조사 붙을 때는 붙임) ✅
- 코드 조각이 문장에 섞일 때는 `inline code`로 감싸고 한글과 한 칸 띄움. → "`useEffect` 의 의존성 배열은"

### 길이
- 챕터 카드 제목: **14자 이내** 권장, 20자 초과 금지.
- 챕터 한 줄 설명: **40자 이내**.
- 버튼 텍스트: **8자 이내** ("강의 시작하기" ✅ / "지금 바로 수강 신청하고 학습 시작하기" ❌).

### 이모지 / 특수문자
- **이모지는 쓰지 않습니다.** 에듀테크에서 남용하면 진지함이 깎입니다. 예외: 졸업 배지 한 곳(🎓)에만 허용.
- `·`(가운뎃점)으로 단어 연결 — "자료구조·알고리즘", "브라우저·네트워크·인증". 슬래시(`/`)보다 우선.
- 화살표는 `→` (U+2192) 하나만 사용. `->`, `=>`는 코드 안에서만.

### 구체 예시 (위키에서 발췌)
> "비전공자가 전공자와 가장 많이 벌어지는 영역. 단순 코테 풀이가 아니라 **왜 그 복잡도를 갖는지 증명할 수 있는 수준**을 목표로 해요."
>
> "FE 면접 최빈출 영역. 'URL을 치면 무슨 일이 일어나나' 30분 답변이 목표예요."
>
> "얕게, 하지만 FE 실무 연결 지점은 확실히. JS가 왜 싱글 스레드인지, 크롬이 왜 멀티 프로세스인지 OS 수준에서 이해해요."

---

## 시각적 기본 원칙 (VISUAL FOUNDATIONS)

### 컬러
- **Primary: Indigo (`#4F46E5` → dark `#818CF8`)** — 신뢰·집중·학습의 깊이. CTA, 진행률, 활성 상태.
- **Accent: Amber (`#F59E0B`)** — 성취·스트릭·배지 전용. 가볍게, 절대 남용하지 않음.
- **Semantic:** Success green `#10B981`, Warning amber, Danger red `#EF4444`, Info blue `#3B82F6`.
- **Neutral scale:** 10단계 grayscale (`#FAFAFA` → `#0A0A0A`). 라이트/다크 모두 지원.
- **스테이지 컬러 (6종):** 각 커리큘럼 단계마다 고유 색 (bg-tint + border + text 3톤 세트). 탐색성을 위해 고정.
  - 1단계 수학·자료구조: Indigo
  - 2단계 브라우저·네트워크: Cyan
  - 3단계 운영체제: Violet
  - 4단계 DB: Emerald
  - 5단계 심화 FE: Rose
  - 6단계 SW공학: Amber

**가이드라인:** 메인 화면에서 채색은 전체 면적의 **15% 이하**. 나머지는 흰/회색. 컬러가 의미를 갖게.

### 타이포그래피
- **한글·영문 본문:** **Pretendard Variable** — 한글은 또렷하고 영문은 넉넉한 중립 고딕. 본문 기본.
- **디스플레이:** Pretendard 700/800. 별도 세리프 디스플레이는 쓰지 않습니다 (에듀테크 감성 유지).
- **숫자 전용 디스플레이:** `font-variant-numeric: tabular-nums` + weight 700. 진행률·레벨 숫자는 이걸로.
- **코드:** **JetBrains Mono 400/500/700**. inline code · 블록 code 전부.
- **스케일 (desktop):** 48 / 36 / 28 / 22 / 18 / **16 (base)** / 14 / 13. Modular scale 1.25 ≒.
- **행간:** 본문 `1.7` (한글 때문에 조금 더 넉넉), 제목 `1.25`.
- **자간:** 제목 `-0.02em`, 본문 기본값, 영문 code `0em`.

### 간격·레이아웃
- **Grid:** 12 column, gutter 24, max-width 1200 (course list) / 1040 (course detail) / 720 (본문 reading).
- **Spacing scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96. (`--space-1` → `--space-10`)
- **컨테이너 좌우 패딩:** 데스크톱 32px, 모바일 20px.
- **섹션 간 수직 여백:** 64px (데스크톱), 40px (모바일).

### 라운딩 (Radii)
- `--radius-sm: 6px` — badge, tag, input
- `--radius-md: 10px` — button, small card
- `--radius-lg: 14px` — standard card (가장 많이 씀)
- `--radius-xl: 20px` — feature card, modal
- `--radius-full: 9999px` — pill, avatar

### 그림자 (Shadows)
부드러운 다층 그림자 — 날카롭거나 과장된 드롭 섀도 금지. 라이트 모드 위주.

- `--shadow-xs`: `0 1px 2px rgb(0 0 0 / 0.04)`
- `--shadow-sm`: `0 2px 6px rgb(0 0 0 / 0.05), 0 1px 2px rgb(0 0 0 / 0.04)` — 카드 기본
- `--shadow-md`: `0 8px 24px rgb(0 0 0 / 0.06), 0 2px 6px rgb(0 0 0 / 0.04)` — hover 상승
- `--shadow-lg`: `0 20px 48px rgb(0 0 0 / 0.12), 0 4px 12px rgb(0 0 0 / 0.06)` — modal
- 다크 모드: 그림자 불투명도를 40% → 60%로 올리고, 추가로 `inset 0 1px 0 rgb(255 255 255 / 0.04)` 하이라이트 라인.

### 테두리
- 기본 카드: `1px solid var(--border-subtle)` — 그림자가 있어도 1px 라인은 꼭 들어갑니다 (해상도 낮을 때 가독성).
- 활성/포커스: `2px solid var(--primary)` + 2px 오프셋 outline.
- 다크 모드에서 border는 `rgba(255,255,255,0.08)`.

### 배경
- **기본은 단색.** 그라디언트는 히어로 1곳과 진행률 바에만 제한적으로.
- **히어로 배경:** 아주 연한 dot grid (`radial-gradient` repeat, 간격 24px, opacity 0.04) + 코너에 blurred indigo blob 1개.
- **풀블리드 이미지, 손그림 일러스트, 반복 텍스처는 쓰지 않습니다.** 대신 **기하학적 패턴 카드**(격자 · 도트 · 아이소메트릭)를 스테이지 섹션에 장식으로 소량 사용.

### 모션
- **이징:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — standard. `cubic-bezier(0.4, 0, 0.2, 1)` — emphasized.
- **지속 시간:** 120ms (hover), 200ms (카드 진입), 320ms (페이지 전환), 600ms (진행률 애니메이션).
- **바운스 금지.** 학습 중 시선을 뺏지 않도록. 스프링 애니메이션은 퀴즈 정답 피드백 한 곳에만 아주 약하게.
- **Fade + 짧은 slide-up (8px)**이 기본 입장 모션.

### 상태별 스타일
- **Hover:** 카드 — `translateY(-2px)` + `shadow-sm` → `shadow-md`. 버튼 — 배경 12% 어둡게. 링크 — underline 등장.
- **Active/Pressed:** `scale(0.98)` + 그림자 축소. 배경 색 추가로 4% 어둡게.
- **Focus-visible:** `outline: 2px solid var(--primary); outline-offset: 2px`. 라운딩도 따라감 (버튼 스타일).
- **Disabled:** opacity 0.45, pointer-events none, 그림자 제거.
- **Loading:** skeleton (배경 neutral-100, 1.2s linear shimmer). 스피너는 버튼 내부 14px만.

### 카드
3가지 밀도:
1. **Stage Card** (커리큘럼 단계 큰 카드): radius-xl, shadow-sm, 스테이지 컬러 tint 배경(5%), 좌측에 4px 컬러 라인 **없음** (슬롭 금지). 대신 스테이지 숫자를 커다란 아웃라인 타입으로.
2. **Chapter Card** (강의 목록 아이템): radius-lg, 흰 배경, shadow-sm, 1px border. hover 시 살짝 상승.
3. **Meta Card** (stat, progress, tip): radius-md, 배경만 neutral-50 (shadow 없음).

### 투명도 / 블러
- **Sticky header:** `backdrop-filter: blur(12px)` + `background: rgba(255,255,255,0.72)`. 스크롤 0 → 4일 때는 완전 투명, 이후 blur 적용.
- 다크 모드는 `rgba(10,10,10,0.72)`.
- 다른 곳에서는 blur 남용 금지.

### 이미지 톤
- 실사진은 원칙상 쓰지 않습니다 (에듀테크에서 산만). 필요할 경우 **고채도 금지 / 쿨톤 화이트 밸런스** 기준. 강사 프로필은 예외.
- 일러스트는 2D 기하학적 스타일, 스테이지 컬러 팔레트에 맞춘 2~3색 제한.

### 레이아웃 규칙
- **Sticky top nav:** 64px 높이, 상시 고정.
- **Footer:** full-bleed neutral-50 배경, 상단 80px 수직 여백.
- **Sidebar (course detail):** 280px 고정 폭, 우측에 커리큘럼 목차.
- **모바일 breakpoint:** 768px 이하에서 모든 사이드바 → 상단 accordion, 그리드 → 1열.

---

## 아이콘 (ICONOGRAPHY)

- **아이콘 라이브러리: [Lucide](https://lucide.dev)** (CDN 링크 사용). 스트로크 2px, 라운드 join.
  - 이유: Pretendard 같은 중립 한글 고딕과 시각 무게가 가장 잘 맞음. Heroicons outline은 약간 얇고, Tabler는 살짝 가벼움.
  - 사용법은 `<i data-lucide="book-open"></i>` + `lucide.createIcons()`. UI 킷에서는 인라인 SVG 복사본을 주로 사용.
- **아이콘 사이즈:** 14 / 16 / 20 / 24 / 32. 버튼 내부는 16, 인라인 메타는 14, 카드 아이콘은 24.
- **컬러:** `currentColor` 상속이 원칙. 스테이지별 아이콘만 스테이지 컬러.
- **이모지:** 사용하지 않음 (예외: 졸업 배지 `🎓` 한 곳).
- **유니코드 기호:** `·`, `→`, `×`는 사용. `•`(bullet)은 목록에서 CSS `list-style` 대신 수동으로.
- **로고:** `assets/logo.svg` (가로 락업) / `assets/logo-mark.svg` (심볼). 그래디언트 없는 2컬러 워드마크 + 오각형 심볼 (자료구조 노드 은유).
- **스테이지 아이콘 6종:** `assets/stage-1.svg` ~ `assets/stage-6.svg`. Lucide 기반으로 고른 뒤 파일로 보관:
  - 1단계: `binary`
  - 2단계: `globe`
  - 3단계: `cpu`
  - 4단계: `database`
  - 5단계: `zap`
  - 6단계: `blocks`

**대체 플래그:** 사용자 제공 로고/아이콘이 없어 직접 도출했습니다. 원본 브랜드 로고·아이콘이 있다면 교체 요청 부탁드려요.

---

## 폰트 서브스티튜션 (FLAG)

- **Pretendard**: 오픈소스 OFL. `fonts/`에 Pretendard Variable woff2 하나를 두고 CSS `@font-face`로 연결합니다. (프로덕션에서는 unpkg CDN 사용 권장.)
- **JetBrains Mono**: 오픈소스. 코드 폰트로 사용.
- 별도 커스텀 폰트는 없음. 브랜드 전용 폰트를 쓸 계획이라면 알려주세요 — 쉽게 교체 가능하게 토큰으로 관리하고 있습니다.

---

## 사용하기

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="tokens.css">
```

그 다음 `ui_kits/course_list/index.html` 또는 `ui_kits/course_detail/index.html`을 열어보세요.
