function LessonMeta({ lesson, onComplete, isDone }) {
  return (
    <div className="lesson-meta">
      <div className="lesson-meta-top">
        <span className="stage-tag"><span className="dot"></span>02 · 브라우저·네트워크</span>
        <span className="meta-dot">·</span>
        <span className="meta-item-txt"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> <span className="num">{lesson.duration}</span></span>
        <span className="meta-dot">·</span>
        <span className="meta-item-txt"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> <span className="num">{lesson.lessons}</span>강</span>
        <span className="meta-dot">·</span>
        <span className="meta-item-txt">업데이트 <span className="num">2주 전</span></span>
      </div>
      <h1 className="lesson-title">{lesson.title}</h1>
      <p className="lesson-sub">{lesson.sub}</p>
      <div className="lesson-actions">
        <button className={`btn ${isDone ? 'btn-secondary' : 'btn-primary'}`} onClick={onComplete}>
          {isDone ? (
            <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 완료 처리됨</>
          ) : (
            <>이 강의 완료 표시</>
          )}
        </button>
        <button className="btn btn-secondary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg> 북마크</button>
        <button className="btn btn-ghost"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> 자료 다운로드</button>
        <button className="btn btn-ghost" style={{marginLeft:'auto'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> 공유</button>
      </div>
    </div>
  );
}
window.LessonMeta = LessonMeta;
