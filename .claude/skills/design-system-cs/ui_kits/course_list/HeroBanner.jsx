// Hero banner with greeting + overall progress
function HeroBanner({ name = '준석', overall = 42, dayStreak = 7 }) {
  return (
    <section className="hero">
      <div className="hero-pattern" aria-hidden="true"></div>
      <div className="hero-body">
        <div className="hero-left">
          <div className="hero-kicker">10주 CS 집중 커리큘럼</div>
          <h1 className="hero-title">
            비전공자가 전공자 수준으로.<br/>
            <span className="hero-accent">하루 한 챕터</span>씩 같이 가봐요.
          </h1>
          <p className="hero-sub">
            42개 챕터, 6단계 커리큘럼. 왜 그 복잡도를 갖는지 증명할 수 있는 수준을 목표로 해요.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              이어서 학습하기
            </button>
            <button className="btn btn-secondary btn-lg">커리큘럼 전체 보기</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="progress-card">
            <div className="progress-greeting">{name}님, 오늘도 반가워요</div>
            <div className="progress-ring" style={{ '--p': overall }}>
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" stroke="#E8E8EC" strokeWidth="10" fill="none"/>
                <circle cx="60" cy="60" r="52" stroke="#4F46E5" strokeWidth="10" fill="none"
                  strokeDasharray={`${overall * 3.267} 1000`} strokeLinecap="round"
                  transform="rotate(-90 60 60)"/>
              </svg>
              <div className="progress-ring-num">
                <span className="num">{overall}</span><span className="pct">%</span>
              </div>
            </div>
            <div className="progress-stats">
              <div className="stat">
                <div className="stat-val num">{dayStreak}</div>
                <div className="stat-label">일 연속</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-val num">18<span style={{fontSize:14,color:'#71717A',fontWeight:500}}>/42</span></div>
                <div className="stat-label">챕터</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-val num">14<span style={{fontSize:14,color:'#71717A',fontWeight:500}}>h</span></div>
                <div className="stat-label">학습시간</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.HeroBanner = HeroBanner;
