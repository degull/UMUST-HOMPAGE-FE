import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styled';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (menuNumber) => {
    setActiveMenu(menuNumber);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <S.Wrapper isScrolled={isScrolled} onMouseLeave={handleMouseLeave}>      <S.Header isScrolled={isScrolled}>
      <Link to="/">
          <S.Logo src='/img/Logo.png' alt='Logo' />
        </Link>
        <S.Menu>
          <S.Menu1 onMouseEnter={() => handleMouseEnter(1)}>회사소개</S.Menu1>
          <S.Menu2 onMouseEnter={() => handleMouseEnter(2)}>연구개발</S.Menu2>
          <S.Menu3 onMouseEnter={() => handleMouseEnter(3)}>사업영역</S.Menu3>
          <S.Menu4 onMouseEnter={() => handleMouseEnter(4)}>제품</S.Menu4>
          <S.Menu5 onMouseEnter={() => handleMouseEnter(5)}>CRO 서비스</S.Menu5>
          <S.Menu6 onMouseEnter={() => handleMouseEnter(6)}>알림마당</S.Menu6>

          
          {activeMenu && (
            <S.MenuBar>
              {activeMenu === 1 && (
                <S.MenuStyle1>
                  <S.SubMenu1>
                    <Link to="/Intro/Ceo">CEO 인사말</Link>
                  </S.SubMenu1>

                  <S.SubMenu2 >
                    <Link to="/Intro/Outline">기업 개요</Link>
                  </S.SubMenu2>

                  <S.SubMenu3 >
                    <Link to="/Intro/Ci">CI 소개</Link>
                  </S.SubMenu3>

                  <S.SubMenu4 >
                    <Link to="/Intro/Orga">조직도</Link>
                  </S.SubMenu4>
                  <S.SubMenu5 >
                    <Link to="/Intro/History">주요연혁</Link>
                  </S.SubMenu5>

                  <S.SubMenu5 >
                    <Link to="/Intro/OpenInno">Open Innovation</Link>
                  </S.SubMenu5>

                  <S.SubMenu6 >
                    <Link to="/Intro/Invest">투자</Link>
                  </S.SubMenu6>
                </S.MenuStyle1>
              )}
              {activeMenu === 2 && (
                <S.MenuStyle2>
                  <S.SubMenu7 >
                    <Link to="/Research/Tech">핵심기술</Link>
                  </S.SubMenu7>
                  <S.SubMenu8 >
                    <Link to="/Research/Lab">기업부설 연구소</Link>
                  </S.SubMenu8>
                </S.MenuStyle2>
              )}           
              {activeMenu === 3 && (
                <S.MenuStyle3>
                  <S.SubMenu9 >의료기기</S.SubMenu9>
                  <S.SubMenu10 >코스메슈티컬</S.SubMenu10>
                  <S.SubMenu11 >비임상연구용역</S.SubMenu11>
                  <S.SubMenu12>신약개발</S.SubMenu12>
                </S.MenuStyle3>
              )}
              {activeMenu === 4 && (
                <S.MenuStyle4>
                  <S.SubMenu13 >
                    <Link to="/Product/Medical">의료기기</Link>
                  </S.SubMenu13>
                  <S.SubMenu14 >
                    <Link to="/Product/Cosmetic">코스메슈티컬</Link>
                  </S.SubMenu14>
                </S.MenuStyle4>
              )}
              {activeMenu === 5 && (
                <S.MenuStyle5>
                  <S.SubMenu15>서비스 소개</S.SubMenu15>
                  <S.SubMenu16>서비스 항목</S.SubMenu16>
                </S.MenuStyle5>
              )}
              {activeMenu === 6 && (
                <S.MenuStyle6>
                  <S.SubMenu17>
                    <Link to="/List/Notice">공지사항</Link>
                  </S.SubMenu17>
                  <S.SubMenu18>
                    <Link to="/List/Press">보도자료</Link>
                  </S.SubMenu18>
                  <S.SubMenu19>
                    <Link to="/List/Event">행사정보</Link>
                  </S.SubMenu19>
                  <S.SubMenu20>
                    <Link to="/List/Album">앨범</Link>
                  </S.SubMenu20>
                </S.MenuStyle6>
              )}
            </S.MenuBar>
          )}
        </S.Menu>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;