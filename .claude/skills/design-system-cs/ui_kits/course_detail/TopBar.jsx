function TopBar() {
  return (
    <div className="topbar">
      <a className="topbar-brand" href="../course_list/index.html">
        <svg viewBox="0 0 40 40" fill="none"><path d="M20 3L35.5 14.3L29.6 32.5H10.4L4.5 14.3L20 3Z" stroke="#4F46E5" strokeWidth="2.6" strokeLinejoin="round"/><circle cx="20" cy="20" r="4" fill="#4F46E5"/></svg>
        JUNSEOK
      </a>
      <div className="topbar-divider"></div>
      <nav className="breadcrumb">
        <a href="../course_list/index.html">강의</a>
        <span className="breadcrumb-sep">/</span>
        <a href="#">2단계 · 브라우저·네트워크</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">HTTP와 HTTPS</span>
      </nav>
      <div className="topbar-actions">
        <button className="icon-btn" title="북마크"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></button>
        <button className="icon-btn" title="설정"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg></button>
        <div className="avatar-sm">JS</div>
      </div>
    </div>
  );
}
window.TopBar = TopBar;
