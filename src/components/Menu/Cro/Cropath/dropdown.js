import React, { useState, useEffect } from "react";
import * as S from "./dropdown.styled";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (menuNumber) => {
    setActiveMenu(activeMenu === menuNumber ? null : menuNumber);
  };

  return (
    <S.Header>
      <S.Menu isScrolled={isScrolled}>
        <S.EmptyBox></S.EmptyBox>
        <S.Menu0>
          <Link to="/">
            <img src="/img/home.png" alt="Home" />
          </Link>
        </S.Menu0>
        <S.Menu1 onClick={() => handleClick(1)}>
          CRO서비스
          <img src="/img/down.png" alt="Dropdown" />
        </S.Menu1>
        <S.Menu2 onClick={() => handleClick(2)}>
          서비스 항목
          <img src="/img/down.png" alt="Dropdown" />
        </S.Menu2>
        <S.Menu3 onClick={() => handleClick(3)}>
          병리평가
          <img src="/img/down.png" alt="Dropdown" />
        </S.Menu3>

        {activeMenu && (
          <S.MenuBar>
            {activeMenu === 1 && (
              <S.MenuStyle1>
                <S.SubMenu1>
                  <Link to="/Intro/Ceo">회사소개</Link>
                </S.SubMenu1>
                <S.SubMenu2>
                  <Link to="/Research/Tech">연구개발</Link>
                </S.SubMenu2>
                <S.SubMenu3>
                  <Link to="/Business/Machine">사업영역</Link>
                </S.SubMenu3>
                <S.SubMenu4>
                  <Link to="/Product/Medical">제품</Link>
                </S.SubMenu4>
                <S.SubMenu5>
                  <Link to="/Cro/Intro">CRO서비스</Link>
                </S.SubMenu5>
                <S.SubMenu6>
                  <Link to="/List/Notice">알림마당</Link>
                </S.SubMenu6>
              </S.MenuStyle1>
            )}
            {activeMenu === 2 && (
              <S.MenuStyle2>
                <S.SubMenu7>
                  <Link to="/Cro/Intro">서비스 소개</Link>
                </S.SubMenu7>
                <S.SubMenu8>
                  <Link to="/Cro/Item">서비스 항목</Link>
                </S.SubMenu8>
              </S.MenuStyle2>
            )}
            {activeMenu === 3 && (
              <S.MenuStyle3>
                <S.SubMenu9>
                  <Link to="/Cro/Item">유효성 평가</Link>
                </S.SubMenu9>
                <S.SubMenu10>
                  <Link to="/Cro/Cropath">병리평가</Link>
                </S.SubMenu10>
                <S.SubMenu10>
                  <Link to="/Cro/Cropk">PK/PD 약동학적평가</Link>
                </S.SubMenu10>
                <S.SubMenu10>
                  <Link to="/Cro/Crolnp">LNP 제조</Link>
                </S.SubMenu10>
                <S.SubMenu10>
                  <Link to="/Cro/Croorga">오가노이드 제작</Link>
                </S.SubMenu10>
                <S.SubMenu10>
                  <Link to="/Cro/Crotcm">TCMSP 제작</Link>
                </S.SubMenu10>
              </S.MenuStyle3>
            )}
          </S.MenuBar>
        )}
      </S.Menu>
    </S.Header>
  );
};

export default Dropdown;
