function LessonPlayer({ title, time }) {
  return (
    <div className="player">
      <div className="player-bg"></div>
      <div className="player-grid"></div>
      <div className="player-center">
        <div className="player-play">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>
        </div>
        <div className="player-title-ov">{title}</div>
      </div>
      <div className="player-controls">
        <button className="player-ctrl-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"/><rect x="17" y="4" width="2" height="16"/></svg></button>
        <span className="player-time">{time[0]}</span>
        <div className="player-track"><div className="player-track-fill"></div></div>
        <span className="player-time">{time[1]}</span>
        <button className="player-ctrl-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="1"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></button>
      </div>
    </div>
  );
}
window.LessonPlayer = LessonPlayer;
