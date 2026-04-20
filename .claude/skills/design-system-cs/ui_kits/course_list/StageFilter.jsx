// Stage filter chips + detailed filter bar
const STAGES = [
  { id: 'all', num: '',   label: '전체',                  color: 'neutral' },
  { id: '1',   num: '01', label: '자료구조·알고리즘',     color: 'stage-1' },
  { id: '2',   num: '02', label: '브라우저·네트워크',     color: 'stage-2' },
  { id: '3',   num: '03', label: '운영체제',              color: 'stage-3' },
  { id: '4',   num: '04', label: '데이터베이스',          color: 'stage-4' },
  { id: '5',   num: '05', label: '심화 FE CS',            color: 'stage-5' },
  { id: '6',   num: '06', label: '소프트웨어 공학',       color: 'stage-6' },
];

function StageFilter({ active, onChange }) {
  return (
    <div className="stage-filter">
      {STAGES.map(s => (
        <button
          key={s.id}
          className={`stage-chip ${active === s.id ? 'is-active' : ''} ${s.color}`}
          onClick={() => onChange(s.id)}
        >
          {s.num && <span className="stage-chip-num">{s.num}</span>}
          <span>{s.label}</span>
        </button>
      ))}
    </div>
  );
}

function FilterBar({ sort, onSort, query, onQuery, count }) {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <span className="result-count"><span className="num">{count}</span>개 챕터</span>
      </div>
      <div className="filter-right">
        <div className="search-input">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
          <input placeholder="챕터 검색..." value={query} onChange={e => onQuery(e.target.value)}/>
        </div>
        <div className="sort-group">
          {[['order','커리큘럼순'],['popular','인기순'],['newest','최신순']].map(([id,label]) => (
            <button key={id} className={`sort-btn ${sort === id ? 'is-active' : ''}`} onClick={() => onSort(id)}>{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
window.StageFilter = StageFilter;
window.FilterBar = FilterBar;
window.STAGES = STAGES;
