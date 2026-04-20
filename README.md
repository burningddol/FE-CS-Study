# [ FE-CS-Study 학습하러가기](https://cs-junseok.vercel.app/)
## [wiki](https://cs-junseok.vercel.app/)

비전공 출신 FE 개발자를 위한 CS 집중 스터디. 10주 안에 전공자 수준의 기초 체력을 갖춰야 한다.

**시작**: 2026-04-19
**기간**: 10주 (하루 3시간, 주 6일)
**이전 스터디**: [JS-Study](https://github.com/burningddol/JS-Study---) — 언어 기초편

---

## 목표

프레임워크를 쓰는 수준에 머물러선 안 된다. 그 밑에서 무엇이 어떻게 돌아가는지 설명할 수 있어야 한다. 전공자가 4년간 쌓는 것을 10주로 줄일 수는 없으니, FE 실무·면접에 직결되는 것만 추려 집중해야 한다.

아래 질문에 스스로 답할 수 있는 수준까지 올라가야 한다.

- 브라우저는 왜 탭마다 프로세스를 분리하는가
- `0.1 + 0.2 !== 0.3`인 이유를 비트 수준에서 설명하라
- Babel이 코드를 변환한다는 것의 의미를 정의하라
- Vite가 Webpack보다 빠른 지점을 지목하라
- OAuth 2.0 흐름을 화이트보드에 그려라
- Virtual DOM에서 실제로 빠른 것이 무엇인지 답하라

---

## 로드맵

전체 학습 자료는 [GitHub Wiki](https://github.com/burningddol/FE-CS-Study/wiki)에 정리되어 있다. 단계별 요약은 아래 표, 챕터별 상세 내용은 각 위키 페이지를 참조한다.

| 단계 | 주제 | 기간 | 핵심 |
|---|---|---|---|
| [1단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-1) | 수학·논리 + 자료구조·알고리즘 | 2.5주 | 비트, IEEE 754, 힙, 트라이, 위상 정렬 |
| [2단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-2) | 브라우저·네트워크·인증 | 2.5주 | HTTP/3, TLS, CORS, OAuth, JWT |
| [3단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-3) | 운영체제·컴퓨터 구조 | 1주 | 프로세스/스레드, I/O 모델, GC |
| [4단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-4) | 데이터베이스 | 0.5주 | 정규화, B-Tree 인덱스, 트랜잭션 |
| [5단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-5) | 심화 FE CS + 컴파일러·AST | 2주 | V8, 번들러, 렌더링 패턴 |
| [6단계](https://github.com/burningddol/FE-CS-Study/wiki/Home#stage-6) | 소프트웨어 공학 | 1.5주 | 패턴, SOLID, 아키텍처, TDD |

시간 부족 시 우선순위: **2 → 1 → 5 → 6 → 3 → 4**.

상세 커리큘럼은 [FE_CS_커리큘럼.md](FE_CS_커리큘럼.md).

---

## 챕터 목록

### 1단계: 수학·자료구조·알고리즘
- [1-1. 수 표현과 비트 연산](https://github.com/burningddol/FE-CS-Study/wiki/1단계-1-수-표현과-비트-연산)
- [1-2. 이산수학 핵심](https://github.com/burningddol/FE-CS-Study/wiki/1단계-2-이산수학-핵심)
- [1-3. 복잡도 분석](https://github.com/burningddol/FE-CS-Study/wiki/1단계-3-복잡도-분석)
- [1-4. 배열·문자열·해시](https://github.com/burningddol/FE-CS-Study/wiki/1단계-4-배열-문자열-해시)
- [1-5. 스택·큐·힙](https://github.com/burningddol/FE-CS-Study/wiki/1단계-5-스택-큐-힙)
- [1-6. 연결 리스트·트리·그래프](https://github.com/burningddol/FE-CS-Study/wiki/1단계-6-연결-리스트-트리-그래프)
- [1-7. 핵심 알고리즘](https://github.com/burningddol/FE-CS-Study/wiki/1단계-7-핵심-알고리즘)

### 2단계: 브라우저·네트워크·인증
- [2-1. 네트워크 기초](https://github.com/burningddol/FE-CS-Study/wiki/2단계-1-네트워크-기초)
- [2-2. HTTP와 HTTPS](https://github.com/burningddol/FE-CS-Study/wiki/2단계-2-HTTP와-HTTPS)
- [2-3. 통신 프로토콜과 API 스타일](https://github.com/burningddol/FE-CS-Study/wiki/2단계-3-통신-프로토콜과-API-스타일)
- [2-4. 인증과 인가](https://github.com/burningddol/FE-CS-Study/wiki/2단계-4-인증과-인가)
- [2-5. 브라우저 렌더링 과정](https://github.com/burningddol/FE-CS-Study/wiki/2단계-5-브라우저-렌더링-과정)
- [2-6. 이벤트 루프](https://github.com/burningddol/FE-CS-Study/wiki/2단계-6-이벤트-루프)
- [2-7. 브라우저 저장소](https://github.com/burningddol/FE-CS-Study/wiki/2단계-7-브라우저-저장소)
- [2-8. 웹 보안](https://github.com/burningddol/FE-CS-Study/wiki/2단계-8-웹-보안)
- [2-9. 캐싱과 CDN](https://github.com/burningddol/FE-CS-Study/wiki/2단계-9-캐싱과-CDN)

### 3단계: 운영체제·컴퓨터 구조
- [3-1. 프로세스와 스레드](https://github.com/burningddol/FE-CS-Study/wiki/3단계-1-프로세스와-스레드)
- [3-2. 동기·비동기와 I-O 모델](https://github.com/burningddol/FE-CS-Study/wiki/3단계-2-동기-비동기와-IO-모델)
- [3-3. 메모리 관리](https://github.com/burningddol/FE-CS-Study/wiki/3단계-3-메모리-관리)
- [3-4. CPU·캐시·지역성](https://github.com/burningddol/FE-CS-Study/wiki/3단계-4-CPU-캐시-지역성)

### 4단계: 데이터베이스
- [4-1. DB 기초와 선택 기준](https://github.com/burningddol/FE-CS-Study/wiki/4단계-1-DB-기초와-선택-기준)
- [4-2. SQL 기본기](https://github.com/burningddol/FE-CS-Study/wiki/4단계-2-SQL-기본기)
- [4-3. 정규화](https://github.com/burningddol/FE-CS-Study/wiki/4단계-3-정규화)
- [4-4. 인덱스](https://github.com/burningddol/FE-CS-Study/wiki/4단계-4-인덱스)
- [4-5. 트랜잭션](https://github.com/burningddol/FE-CS-Study/wiki/4단계-5-트랜잭션)
- [4-6. FE가 자주 마주치는 이슈](https://github.com/burningddol/FE-CS-Study/wiki/4단계-6-FE가-자주-마주치는-이슈)

### 5단계: 심화 FE CS + 컴파일러·AST
- [5-1. JavaScript 엔진 (V8)](https://github.com/burningddol/FE-CS-Study/wiki/5단계-1-JavaScript-엔진-V8)
- [5-2. 실행 컨텍스트·스코프·클로저](https://github.com/burningddol/FE-CS-Study/wiki/5단계-2-실행-컨텍스트-스코프-클로저)
- [5-3. 컴파일러와 AST](https://github.com/burningddol/FE-CS-Study/wiki/5단계-3-컴파일러와-AST)
- [5-4. 모듈 시스템과 번들러](https://github.com/burningddol/FE-CS-Study/wiki/5단계-4-모듈-시스템과-번들러)
- [5-5. 렌더링 패턴](https://github.com/burningddol/FE-CS-Study/wiki/5단계-5-렌더링-패턴)
- [5-6. 웹 성능 최적화](https://github.com/burningddol/FE-CS-Study/wiki/5단계-6-웹-성능-최적화)
- [5-7. 프레임워크 내부 동작](https://github.com/burningddol/FE-CS-Study/wiki/5단계-7-프레임워크-내부-동작)
- [5-8. 기타 꼭 알아야 할 것들](https://github.com/burningddol/FE-CS-Study/wiki/5단계-8-기타-꼭-알아야-할-것들)

### 6단계: 소프트웨어 공학
- [6-1. 디자인 패턴](https://github.com/burningddol/FE-CS-Study/wiki/6단계-1-디자인-패턴)
- [6-2. 설계 원칙](https://github.com/burningddol/FE-CS-Study/wiki/6단계-2-설계-원칙)
- [6-3. 아키텍처 패턴](https://github.com/burningddol/FE-CS-Study/wiki/6단계-3-아키텍처-패턴)
- [6-4. 함수형 프로그래밍](https://github.com/burningddol/FE-CS-Study/wiki/6단계-4-함수형-프로그래밍)
- [6-5. 테스팅](https://github.com/burningddol/FE-CS-Study/wiki/6단계-5-테스팅)
- [6-6. 버전 관리 (Git)](https://github.com/burningddol/FE-CS-Study/wiki/6단계-6-버전-관리-Git)
- [6-7. 배포와 CI-CD](https://github.com/burningddol/FE-CS-Study/wiki/6단계-7-배포와-CICD)

---

## 공부 방식

- **3회독을 전제로 간다.** 1회독은 용어, 2회독은 구현·실전 연결, 3회독은 면접 답변 수준까지 올려야 한다.
- **그림으로 검증한다.** TCP handshake, OAuth 흐름, 렌더링 파이프라인은 펜 없이 그릴 수 있어야 한다.
- **코테는 매일 한 문제.** 30분 고민 후 해설을 본다. 몰아서 풀지 않는다.

---

## 참고 자료

| 자료 | 용도 |
|---|---|
| 『이것이 취업을 위한 코딩 테스트다』(나동빈) | 1단계 기본서 |
| 『모던 자바스크립트 Deep Dive』(이웅모) | 5단계 교재 |
| 『리팩터링 2판』(마틴 파울러) | 6단계 발췌독 |
| [web.dev](https://web.dev) | 브라우저·성능 |
| [patterns.dev](https://patterns.dev) | 디자인 패턴 |
| [MDN](https://developer.mozilla.org) | 표준 레퍼런스 |
| [astexplorer.net](https://astexplorer.net) | AST 시각화 |
| [regex101.com](https://regex101.com) | 정규식 디버거 |
| [JavaScript Visualizer 9000](https://www.jsv9000.app) | 이벤트 루프 시각화 |

---

## 레포 구조

```
FE-CS-Study/
├── README.md
├── FE_CS_커리큘럼.md
└── wiki/
    └── Home.md          # 커리큘럼 인덱스 (상세는 GitHub Wiki)
```

학습 콘텐츠(41개 챕터)는 [GitHub Wiki](https://github.com/burningddol/FE-CS-Study/wiki)에 있다.

---

## 진도

- [ ] 1단계: 수학·논리 + 자료구조·알고리즘
- [ ] 2단계: 브라우저·네트워크·인증
- [ ] 3단계: 운영체제·컴퓨터 구조
- [ ] 4단계: 데이터베이스
- [ ] 5단계: 심화 FE CS + 컴파일러·AST
- [ ] 6단계: 소프트웨어 공학
