const CURRICULUM = [
  { stage: '01 · 자료구조·알고리즘', color: '#4F46E5', items: [
    { id:'1-1', title:'수 표현과 비트 연산', dur:'32분', done:true },
    { id:'1-2', title:'이산수학 핵심', dur:'45분', done:true },
    { id:'1-3', title:'복잡도 분석', dur:'38분', done:true },
  ]},
  { stage: '02 · 브라우저·네트워크', color: '#06B6D4', items: [
    { id:'2-1', title:'네트워크 기초', dur:'41분', done:true },
    { id:'2-2', title:'HTTP와 HTTPS', dur:'48분', done:false, active:true },
    { id:'2-3', title:'통신 프로토콜과 API 스타일', dur:'36분' },
    { id:'2-4', title:'인증과 인가', dur:'52분' },
    { id:'2-5', title:'브라우저 렌더링 과정', dur:'44분' },
    { id:'2-6', title:'이벤트 루프', dur:'39분' },
  ]},
  { stage: '03 · 운영체제', color: '#8B5CF6', items: [
    { id:'3-1', title:'프로세스와 스레드', dur:'36분' },
    { id:'3-2', title:'동기·비동기와 I/O', dur:'42분' },
  ]},
];

function CurriculumSidebar({ activeId, onSelect, progress = 42 }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-kicker">10주 커리큘럼</span>
        <h2 className="sidebar-title">FE 개발자를 위한 CS</h2>
        <div className="sidebar-progress">
          <div className="sidebar-progress-track"><div className="sidebar-progress-fill" style={{width: progress+'%'}}></div></div>
          <span className="sidebar-progress-label">{progress}%</span>
        </div>
      </div>
      <div className="sidebar-list">
        {CURRICULUM.map(stage => (
          <div key={stage.stage}>
            <div className="sidebar-stage" style={{color: stage.color}}>{stage.stage}</div>
            {stage.items.map(it => (
              <div key={it.id}
                className={`sidebar-item ${it.active||activeId===it.id?'is-active':''} ${it.done?'is-done':''}`}
                onClick={() => onSelect && onSelect(it.id)}>
                <span className="sidebar-item-check">
                  {it.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </span>
                <span className="sidebar-item-label">{it.title}</span>
                <span className="sidebar-item-dur">{it.dur}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
window.CurriculumSidebar = CurriculumSidebar;
