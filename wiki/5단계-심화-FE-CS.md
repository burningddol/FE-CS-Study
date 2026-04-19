# 5단계: 심화 FE CS + 컴파일러·AST

> **면접 차별화 포인트.** JS 엔진이 내 코드를 어떻게 실행하는지, Babel이 어떻게 변환하는지, Vite가 왜 빠른지까지 내려가야 한다. 이 단계를 통과해야 프레임워크를 "쓰는 사람"에서 "이해하는 사람"으로 넘어간다.

**학습 기간**: 2주

* * *

## 1. JavaScript 엔진 (V8)

### 1-1. V8 파이프라인
```
Source Code
  ↓ Parser
AST
  ↓ Ignition (interpreter)
Bytecode
  ↓ (hot code) TurboFan (optimizing compiler)
Optimized Machine Code
```

### 1-2. 인터프리터 vs 컴파일러 vs JIT
- 인터프리터: 한 줄씩 해석. 시작은 빠르지만 실행은 느리다
- 컴파일러: 전체를 변환. 시작은 느리지만 실행은 빠르다
- **JIT (Just-In-Time)**: 런타임에 자주 쓰이는 코드만 컴파일해 양쪽 장점을 취한다

### 1-3. 히든 클래스와 인라인 캐싱
- 같은 "모양"의 객체는 같은 히든 클래스를 공유해 프로퍼티 접근을 최적화한다
- 객체 생성 시 **속성을 항상 같은 순서로 추가**해야 최적화가 유지된다
- Inline Cache: 같은 호출 위치에서 속성 위치를 기억한다

### 1-4. 최적화 해제(Deoptimization) 트리거
- 타입이 섞인다 (monomorphic → polymorphic → megamorphic)
- `arguments`를 조작한다
- `with`, `eval`을 쓴다
- `delete` 연산자를 쓴다

### 1-5. 세대별 GC
- **Young (New Space)**: Scavenger, 빠른 복사 수집
- **Old Space**: Mark-Compact, 느리지만 드물게
- Young에서 두 번 살아남으면 Old로 승격한다

* * *

## 2. 실행 컨텍스트·스코프·클로저

### 2-1. 실행 컨텍스트 구성
- **Lexical Environment**: `let`, `const`, 함수 선언 (블록 스코프)
- **Variable Environment**: `var` (함수 스코프)
- **ThisBinding**

### 2-2. 호이스팅의 실제
- 선언과 초기화는 다르다는 점을 구분한다
- `var`: 선언과 초기화(undefined)가 함께 올라간다
- `let` / `const`: 선언만 올라가고 초기화는 원래 위치에서 일어난다 (TDZ)
- 함수 선언문: 전체가 올라간다
- 함수 표현식: `var` 규칙을 따른다

### 2-3. 스코프 체인
- 현재 렉시컬 환경에 없으면 외부 환경으로 거슬러 올라간다
- **렉시컬 스코프**: 선언된 위치를 기준으로 한다 (동적 스코프가 아니다)

### 2-4. 클로저의 내부
- 함수 + 선언 당시의 렉시컬 환경에 대한 참조로 정의한다
- 외부 함수가 리턴해도 환경이 GC되지 않는 이유를 설명할 수 있어야 한다
- React의 "stale closure" 문제와 직결된다

### 2-5. `this` 바인딩 4규칙
1. **기본**: 전역 (strict에선 undefined)
2. **암시적**: `obj.method()` → `this = obj`
3. **명시적**: `call`, `apply`, `bind`
4. **new**: 새 객체

**화살표 함수**는 `this`를 바인딩하지 않고 상위 스코프에서 찾는다. 콜백에 유용하다.

* * *

## 3. 컴파일러와 AST (★ 신설 영역)

### 3-1. 컴파일러 파이프라인
```
Source
 ↓ Lexer (Tokenizer)
Tokens [KEYWORD "let", IDENT "x", EQ, NUM 1]
 ↓ Parser
AST
 ↓ Transformer
Modified AST
 ↓ Code Generator
Output Code
```

### 3-2. AST (Abstract Syntax Tree)
- `let x = 1;`의 AST:
  ```
  VariableDeclaration
    kind: "let"
    declarations: [
      VariableDeclarator
        id: Identifier "x"
        init: Literal 1
    ]
  ```
- **실습**: [astexplorer.net](https://astexplorer.net)에 직접 코드를 붙여넣어 본다

### 3-3. 재귀 하강 파서
- 문법 규칙마다 함수 하나를 둔다
- 간단한 계산기 파서를 직접 구현해봐야 한다

### 3-4. Babel의 동작
1. `@babel/parser`가 AST를 만든다
2. 플러그인들이 AST를 순회(visitor)하며 변환한다
3. `@babel/generator`가 코드로 복원한다

### 3-5. ESLint와 Prettier
- ESLint 룰은 AST 노드 타입별 콜백이다
- Prettier는 AST를 읽고 자기 포맷 규칙으로 재생성한다

### 3-6. 정규표현식 내부
- NFA(비결정적 유한 오토마타)를 DFA로 변환한다
- JS 엔진 대부분은 NFA 기반 백트래킹으로 구현한다
- **Catastrophic Backtracking**: `(a+)+b`에 `aaaaaX`를 넣으면 지수 시간이 걸린다
- 실무에선 ReDoS 방어를 위해 `linear-regex` 같은 검증을 둔다

### 3-7. 유한 상태 기계 (FSM)
- 상태 + 전이 함수로 이루어진다
- **XState** 같은 상태 관리 라이브러리의 이론적 배경이다
- 폼 상태: idle → validating → submitting → success/error

* * *

## 4. 모듈 시스템과 번들러

### 4-1. CommonJS vs ESM
| | CommonJS | ESM |
|---|---|---|
| 문법 | `require`/`module.exports` | `import`/`export` |
| 로드 | 동기, 런타임 | 비동기, 정적 |
| 순환 참조 | 부분 처리 | 미해결 시 undefined |
| Tree Shaking | 어려움 | 쉬움 |

### 4-2. 의존성 그래프
- 진입점에서 시작해 `import`를 따라 DAG를 구성한다
- 번들 출력 순서는 **위상 정렬 결과**다

### 4-3. Webpack 기본
- **entry**: 시작점
- **output**: 결과물
- **loader**: 파일 변환 (babel-loader, css-loader)
- **plugin**: 번들 프로세스에 개입 (HtmlWebpackPlugin)
- **chunk**: 분할된 번들 단위

### 4-4. Vite가 빠른 이유
- **dev**: 네이티브 ESM을 브라우저가 직접 요청하므로 번들을 생략한다
- **의존성**: esbuild(Go 기반)로 사전 번들해 npm 패키지를 빠르게 정리한다
- **HMR**: 변경된 모듈만 갱신하고 전체 재번들은 하지 않는다
- **prod**: Rollup으로 번들한다 (Tree Shaking이 강하다)

### 4-5. Tree Shaking
- 정적 `import`/`export` 덕분에 사용되지 않는 export를 빌드 타임에 제거한다
- CommonJS는 동적이라 어렵다
- **side effect**가 있는 모듈은 제거되지 않는다 → `package.json`의 `sideEffects` 설정을 활용한다

### 4-6. Code Splitting
- Dynamic Import: `const m = await import('./module')`
- 라우트 기반 분할 (React.lazy)
- 벤더 청크 분리

### 4-7. Polyfill vs Transpile
- **Transpile**: 문법 변환 (화살표 함수 → function)
- **Polyfill**: 런타임 기능 추가 (Array.prototype.includes)
- `@babel/preset-env` + Browserslist로 타겟 브라우저 기준에 맞춰 변환한다

* * *

## 5. 렌더링 패턴

### 5-1. CSR (Client-Side Rendering)
- 빈 HTML + JS 번들을 받아 브라우저에서 렌더한다
- 장점: 인터랙션이 빠르다
- 단점: 초기 로딩이 느리고 (TTI ↑) SEO가 약하다

### 5-2. SSR (Server-Side Rendering)
- 서버에서 HTML을 생성해 전송하고, 브라우저는 Hydration을 한다
- 장점: 초기 페인트가 빠르고 SEO에 유리하다
- 단점: 서버 부하가 있고 TTFB에 의존한다

### 5-3. SSG (Static Site Generation)
- 빌드 타임에 HTML을 생성한다
- 장점: CDN 배포가 가능하고 성능이 최고 수준이다
- 단점: 콘텐츠 갱신 시 재빌드가 필요하다

### 5-4. ISR (Incremental Static Regeneration)
- SSG + 특정 주기로 재생성한다
- Next.js의 `revalidate`

### 5-5. Streaming SSR
- HTML을 청크로 나눠 스트리밍한다
- React 18의 `renderToPipeableStream`을 쓴다
- TTFB를 단축한다

### 5-6. React Server Components (RSC)
- 서버에서 실행되는 컴포넌트로, **번들에 포함되지 않는다**
- 직렬화 가능한 값만 Client Component로 넘긴다
- 큰 라이브러리(예: markdown 파서)는 서버에서만 쓴다

### 5-7. Islands Architecture
- 정적 HTML + 인터랙티브한 "섬"만 hydrate한다
- Astro, Qwik가 이 방식을 택한다

### 5-8. 비교표
| | CSR | SSR | SSG | ISR | RSC |
|---|---|---|---|---|---|
| TTFB | 빠름 | 느림 | 빠름 | 빠름 | 중간 |
| SEO | 약함 | 강함 | 강함 | 강함 | 강함 |
| 서버 비용 | 없음 | 큼 | 없음 | 작음 | 큼 |
| 갱신 | 즉시 | 즉시 | 재빌드 | 주기적 | 즉시 |

* * *

## 6. 웹 성능 최적화

### 6-1. Core Web Vitals
- **LCP (Largest Contentful Paint)**: 2.5초 이하 — 가장 큰 요소 렌더 시점
- **INP (Interaction to Next Paint)**: 200ms 이하 — FID의 대체 지표
- **CLS (Cumulative Layout Shift)**: 0.1 이하 — 레이아웃 이동 합계

### 6-2. 이미지 최적화
- 포맷은 **AVIF > WebP > JPEG** 순으로 고려한다
- `loading="lazy"`로 지연 로딩한다
- `srcset` + `sizes`로 해상도별 자원을 제공한다
- `<picture>`로 포맷 폴백을 구성한다

### 6-3. 폰트 최적화
- `font-display: swap`으로 시스템 폰트를 먼저 보여준다
- 서브셋팅으로 필요한 글자만 담는다 (한글 완성형 등)
- `<link rel="preload">`로 우선 로드한다

### 6-4. 코드 스플리팅
- 라우트 기반 (`React.lazy`)
- 컴포넌트 기반 (모달, 탭)
- 벤더 분리

### 6-5. 번들 크기 분석
- `webpack-bundle-analyzer`, `rollup-plugin-visualizer`를 활용한다
- 큰 의존성을 찾아 경량 대안으로 교체한다 (moment → date-fns, lodash → lodash-es)

### 6-6. 디바운스 vs 스로틀
```js
// 디바운스: 마지막 호출 후 N초 경과 시 실행 (검색어 자동완성)
const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

// 스로틀: N초마다 최대 1번 실행 (스크롤 이벤트)
const throttle = (fn, ms) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
};
```

### 6-7. 가상 스크롤 (Virtualization)
- 보이는 부분만 DOM에 렌더한다
- `react-window`, `TanStack Virtual`을 쓴다
- 수만 개 리스트를 60fps로 처리할 수 있다

### 6-8. 메모이제이션의 진짜 비용
- `useMemo` / `useCallback`에도 **비용이 있다**는 점을 기억한다
- 비교 비용이 재계산 비용보다 크면 오히려 손해다
- 기본은 **쓰지 않는 것**. 프로파일링으로 필요성이 확인됐을 때만 붙인다

* * *

## 7. 프레임워크 내부 동작

### 7-1. Virtual DOM
- JS 객체로 DOM을 표현하고, diff 결과를 실제 DOM에 최소 변경으로 반영한다
- **빠른 것이 본질이 아니다.** "UI를 상태의 함수로 표현할 수 있게 해준다"는 것이 핵심이다

### 7-2. Reconciliation
- 같은 타입이면 속성만 비교한다
- 다른 타입이면 아예 새로 만든다
- 리스트는 `key`로 매칭한다

### 7-3. React Fiber
- 이전: 렌더가 동기였고 중단이 불가능해 큰 트리에서 버벅였다
- Fiber: 작업 단위를 쪼개 **중단 가능한 렌더링**을 만든다
- 우선순위 기반 스케줄링(useTransition)을 제공한다
- 각 Fiber 노드는 연결 리스트로 이어진다

### 7-4. Concurrent Features
- `useTransition`: 급하지 않은 업데이트를 표시한다
- `useDeferredValue`: 값의 업데이트를 지연시킨다
- `<Suspense>`: 비동기 UI를 선언적으로 다룬다

### 7-5. 리렌더링 조건
- 부모가 리렌더되면 자식도 리렌더된다 (props가 동일해도)
- `React.memo`로 차단한다 (얕은 비교)
- `useMemo`/`useCallback`으로 참조 동일성을 유지한다

### 7-6. 상태 관리 비교

| | 접근 방식 | 특징 |
|---|---|---|
| Redux | Flux 아키텍처 | 보일러플레이트 많음, 미들웨어 강력 |
| Zustand | 단일 훅 | 가볍고 직관적 |
| Jotai | atom 기반 | 상향식, 세밀한 구독 |
| Recoil | atom + selector | Jotai와 유사, Meta가 만듦 |
| TanStack Query | 서버 상태 | 캐싱·동기화 특화 |

### 7-7. Vue의 반응형
- Vue 2: `Object.defineProperty`로 구현
- Vue 3: `Proxy`로 구현 (추가 속성도 추적 가능)
- 의존성을 자동 추적해 상태 변경 시 관련 컴포넌트만 갱신한다

### 7-8. SolidJS의 Signal
- Virtual DOM 없이 세밀한 반응성을 제공한다
- 컴포넌트 함수는 한 번만 실행되고, 업데이트는 Signal 단위로 일어난다

* * *

## 8. 기타 꼭 알아야 할 것들

### 8-1. 문자 인코딩
- ASCII (7비트) → Latin-1 → Unicode 순으로 확장된다
- UTF-8: 가변 길이(1~4바이트), 하위 호환
- UTF-16: JS 내부 표현 (서로게이트 페어)
- `'👨‍👩‍👧'.length === 8`의 이유를 설명할 수 있어야 한다
  - 이모지 + ZWJ + 이모지 + ZWJ + 이모지, 각 이모지가 서로게이트 페어
- `Intl.Segmenter`로 정확한 grapheme 단위를 계산한다

### 8-2. Web Components / Shadow DOM
- Custom Elements, Shadow DOM, HTML Templates로 구성한다
- 스타일 격리가 가능하다
- 프레임워크 무관한 컴포넌트를 만들 수 있다

### 8-3. WebAssembly
- 이진 포맷, 네이티브에 가까운 성능을 낸다
- Rust, C++, Go로 작성할 수 있다
- JS가 느린 연산(이미지 처리, 3D, 암호화)을 위임한다

### 8-4. 접근성 (a11y)
- 시맨틱 HTML을 우선한다 (`<button>` vs `<div onClick>`)
- ARIA는 필요할 때만 쓰고, 기본 의미를 덮어쓰지 않는다
- 키보드 내비게이션 (`tabindex`, Focus 관리)을 지원한다
- 스크린 리더로 실제 테스트한다

* * *

## 연습 문제

1. V8의 Ignition과 TurboFan의 역할 차이를 설명하라. 어떤 경우에 deoptimization이 발생하는가?
2. 아래 코드에서 클로저로 인한 메모리 누수가 발생하는지 분석하라.
   ```js
   const handlers = [];
   for (let i = 0; i < 1000; i++) {
     const data = new Array(1000);
     handlers.push(() => data.length);
   }
   ```
3. `let x = 1 + 2 * 3;`의 AST를 직접 그려라.
4. 간단한 산술식 파서를 재귀 하강으로 구현하라. (`1 + 2 * 3` → 7)
5. Vite의 dev가 Webpack보다 빠른 이유를 3가지로 설명하라.
6. `'👨‍👩‍👧'.length`가 왜 8인지 서로게이트 페어와 ZWJ로 설명하라.
7. React에서 `useMemo`를 언제 써야 하고 언제 쓰지 말아야 하는지, 비용 관점에서 설명하라.
8. CSR/SSR/SSG/ISR 중 블로그에 가장 적합한 건? 이커머스라면?

* * *

## 체크리스트

### 엔진·런타임
- [ ] V8 파이프라인 (Parser/Ignition/TurboFan)을 말할 수 있다
- [ ] JIT 컴파일과 deoptimization 조건을 안다
- [ ] 세대별 GC의 Young/Old 차이를 안다
- [ ] 실행 컨텍스트 구성 요소를 안다
- [ ] TDZ를 설명할 수 있다
- [ ] 클로저의 내부 구조를 설명할 수 있다
- [ ] `this` 바인딩 4규칙을 안다

### 컴파일러·AST
- [ ] 컴파일러 파이프라인 (Lexer/Parser/Codegen)을 안다
- [ ] AST를 직접 그릴 수 있다
- [ ] Babel의 변환 과정을 설명할 수 있다
- [ ] 정규식 catastrophic backtracking을 안다
- [ ] FSM이 XState에 어떻게 쓰이는지 안다

### 번들러
- [ ] CommonJS vs ESM 차이를 4가지 이상 안다
- [ ] Webpack의 loader/plugin 차이를 안다
- [ ] Vite가 빠른 이유 3가지를 안다
- [ ] Tree Shaking이 ESM에서만 잘 되는 이유를 안다
- [ ] Code Splitting 3가지 축을 안다

### 렌더링 패턴
- [ ] CSR/SSR/SSG/ISR/RSC를 트레이드오프로 비교할 수 있다
- [ ] Streaming SSR의 장점을 안다
- [ ] Hydration을 설명할 수 있다

### 성능
- [ ] Core Web Vitals 3가지를 안다
- [ ] 디바운스와 스로틀을 구현할 수 있다
- [ ] 가상 스크롤의 원리를 안다
- [ ] useMemo/useCallback의 비용을 안다

### 프레임워크
- [ ] Virtual DOM의 "진짜" 장점을 안다
- [ ] React Fiber가 해결한 문제를 안다
- [ ] Reconciliation에서 key의 역할을 안다
- [ ] Vue의 Proxy 기반 반응형을 설명할 수 있다
- [ ] 상태 관리 라이브러리 4종 이상을 비교할 수 있다

### 기타
- [ ] UTF-8과 UTF-16의 차이를 안다
- [ ] 이모지 길이가 `.length`와 다른 이유를 안다
- [ ] WebAssembly의 용도를 안다
- [ ] 시맨틱 HTML과 ARIA의 올바른 사용을 안다

* * *

**이전**: [4단계](4단계-데이터베이스) | **다음**: [6단계: 소프트웨어 공학](6단계-소프트웨어-공학)
