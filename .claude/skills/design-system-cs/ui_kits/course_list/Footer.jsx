function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="../../assets/logo.svg" alt="JUNSEOK CS study" height="32"/>
          <p className="footer-desc">비전공자를 위한 10주 CS 집중 커리큘럼</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-heading">학습</div>
            <a href="#">전체 강의</a>
            <a href="#">커리큘럼</a>
            <a href="#">로드맵</a>
          </div>
          <div className="footer-col">
            <div className="footer-heading">커뮤니티</div>
            <a href="#">질문 게시판</a>
            <a href="#">후기</a>
            <a href="#">스터디 모집</a>
          </div>
          <div className="footer-col">
            <div className="footer-heading">회사</div>
            <a href="#">소개</a>
            <a href="#">문의하기</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JUNSEOK CS study</span>
        <span>Made with 해요체</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
