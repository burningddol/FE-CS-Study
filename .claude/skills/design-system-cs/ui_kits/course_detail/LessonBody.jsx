function LessonBody() {
  const [tab, setTab] = React.useState('overview');
  return (
    <div className="lesson-body">
      <div className="tabs">
        <button className={`tab ${tab==='overview'?'is-active':''}`} onClick={()=>setTab('overview')}>개요</button>
        <button className={`tab ${tab==='curriculum'?'is-active':''}`} onClick={()=>setTab('curriculum')}>커리큘럼<span className="tab-count">12</span></button>
        <button className={`tab ${tab==='notes'?'is-active':''}`} onClick={()=>setTab('notes')}>내 노트<span className="tab-count">3</span></button>
        <button className={`tab ${tab==='qna'?'is-active':''}`} onClick={()=>setTab('qna')}>질문<span className="tab-count">8</span></button>
      </div>
      <div className="tab-content">
        {tab === 'overview' && <>
          <h3>이 챕터에서 배우는 것</h3>
          <p>HTTP 요청/응답 구조부터 상태 코드, 헤더의 역할, HTTP/1.1→2→3 버전별 차이, TLS 1.3 까지 차근차근 살펴볼게요. FE 면접에서 "URL을 치면 무슨 일이 일어나나요?" 질문이 나왔을 때 30분 동안 설명할 수 있는 수준이 목표예요.</p>
          <h3>핵심 키워드</h3>
          <div className="keywords">
            <span className="kw">GET / POST</span>
            <span className="kw">Status codes</span>
            <span className="kw">Request headers</span>
            <span className="kw">HTTP/2</span>
            <span className="kw">HTTP/3 (QUIC)</span>
            <span className="kw">TLS 1.3</span>
            <span className="kw">Keep-Alive</span>
            <span className="kw">CORS</span>
          </div>
          <div className="callout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div className="callout-text"><strong>먼저 보면 좋은 챕터.</strong> <code>2-1 네트워크 기초</code> 에서 TCP 3-way handshake를 이해하고 오면 훨씬 수월해요.</div>
          </div>
          <h3>선수 지식</h3>
          <ul>
            <li>TCP/IP 계층 구조 (2-1 챕터에서 다뤄요)</li>
            <li>브라우저의 기본 동작 개념</li>
            <li>터미널에서 <code>curl</code> 명령어 실행해보기</li>
          </ul>
        </>}
        {tab === 'curriculum' && <>
          <h3>전체 커리큘럼 · 12강</h3>
          <ul>
            <li>HTTP 요청/응답 기본 구조 · 4:20</li>
            <li>상태 코드 완벽 정리 (2xx~5xx) · 6:10</li>
            <li>헤더의 종류와 역할 · 5:45</li>
            <li>쿠키와 세션 · 4:30</li>
            <li>HTTPS 가 필요한 이유 · 3:50</li>
            <li>TLS handshake 단계별 · 7:15</li>
            <li>HTTP/1.1 의 한계 · 2:40</li>
            <li>HTTP/2 — 멀티플렉싱과 HPACK · 5:30</li>
            <li>HTTP/3 — QUIC 이 바꾼 것 · 4:45</li>
            <li>CORS 실전 트러블슈팅 · 3:20</li>
            <li>Keep-Alive 와 Connection Reuse · 2:55</li>
            <li>정리 퀴즈 · 2:00</li>
          </ul>
        </>}
        {tab === 'notes' && <>
          <h3>내 노트</h3>
          <p>아직 노트가 3개 있어요. 강의를 보면서 <code>N</code> 키로 빠르게 노트를 남길 수 있어요.</p>
        </>}
        {tab === 'qna' && <>
          <h3>질문과 답변 · 8개</h3>
          <p>수강생들이 남긴 질문이 8개 있어요. 비슷한 질문을 먼저 검색해보고, 없다면 새 질문을 남겨주세요.</p>
        </>}
      </div>
    </div>
  );
}
window.LessonBody = LessonBody;
