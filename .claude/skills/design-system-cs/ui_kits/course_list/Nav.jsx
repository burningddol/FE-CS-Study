// Top sticky navigation
function Nav({ active = 'courses' }) {
  const links = [
    { id: 'courses', label: '강의' },
    { id: 'curriculum', label: '커리큘럼' },
    { id: 'progress', label: '진행률' },
    { id: 'review', label: '리뷰' },
  ];
  return (
    <nav className="nav">
      <a className="brand" href="#">
        <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
          <path d="M20 3L35.5 14.3L29.6 32.5H10.4L4.5 14.3L20 3Z" stroke="#4F46E5" strokeWidth="2.6" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="4" fill="#4F46E5"/>
          <circle cx="20" cy="3" r="2.2" fill="#4F46E5"/>
          <circle cx="35.5" cy="14.3" r="2.2" fill="#4F46E5"/>
          <circle cx="29.6" cy="32.5" r="2.2" fill="#4F46E5"/>
          <circle cx="10.4" cy="32.5" r="2.2" fill="#4F46E5"/>
          <circle cx="4.5" cy="14.3" r="2.2" fill="#4F46E5"/>
        </svg>
        <div className="brand-text">
          <span className="brand-title">JUNSEOK</span>
          <span className="brand-sub">CS · STUDY</span>
        </div>
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l.id} className={`nav-link ${active === l.id ? 'is-active' : ''}`} href="#">{l.label}</a>
        ))}
      </div>
      <div className="nav-right">
        <button className="nav-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
          <span>강의 검색</span>
          <kbd className="kbd">⌘K</kbd>
        </button>
        <div className="avatar">JS</div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
