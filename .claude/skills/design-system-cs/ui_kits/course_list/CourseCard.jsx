// Course card — one chapter row
function CourseCard({ chapter }) {
  const { id, stage, stageLabel, num, title, sub, duration, lessons, progress, status } = chapter;
  const statusBadge = {
    done: <span className="status-pill done">완료</span>,
    inprogress: <span className="status-pill inprogress">학습 중</span>,
    upcoming: null,
  }[status];

  return (
    <a className={`course-card stage-${stage}`} href="#">
      <div className="course-card-top">
        <div className="course-stage-tag">
          <span className="stage-dot"></span>
          <span>{stageLabel}</span>
        </div>
        {statusBadge}
      </div>
      <div className="course-card-body">
        <div className="course-num num">{num}</div>
        <div>
          <h3 className="course-title">{title}</h3>
          <p className="course-sub">{sub}</p>
        </div>
      </div>
      <div className="course-card-foot">
        <div className="course-meta">
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className="num">{duration}</span>
          </span>
          <span className="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            <span className="num">{lessons}</span>강
          </span>
        </div>
        {progress != null && (
          <div className="card-progress">
            <div className="card-progress-track">
              <div className="card-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="card-progress-label num">{progress}%</span>
          </div>
        )}
      </div>
    </a>
  );
}
window.CourseCard = CourseCard;
