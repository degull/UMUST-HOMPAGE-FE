import React from 'react';
import * as S from './Footer.styled';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Upper>
          <S.Logo>UMUST R&D</S.Logo>
          <S.SubMenu>
            <Link to="/Map/Map">
              <S.Map>찾아오시는 길</S.Map>
            </Link>
            <Link to="/site-map">
              <S.SiteMap>사이트 맵</S.SiteMap>
            </Link>
            <Link to="/privacy-policy">
              <S.Policy>개인정보처리방침</S.Policy>
            </Link>
            <Link to="/terms">
              <S.Terms>이용약관</S.Terms>
            </Link>
{/*             <Link to="/Contact/Contact">
              <S.Contact>문의</S.Contact>
            </Link> */}
          </S.SubMenu>
        </S.Upper>

        <S.Lower>
          <S.Addr>
            상호 : (주)유머스트알엔디 | 대표이사 : 이강파 | 주소 : 서울 도봉구 마들로 13길 61 창동 씨드큐브 C동 302호
            <br />
            <br />
            Email : u-service@naver.com
            <br />
            Tel: 02-998-5552
          </S.Addr>
          <S.Copyright>Copyright &copy; 2024 UMUST R&D all right reserved.</S.Copyright>
        </S.Lower>
      </S.Container>
    </S.Wrapper>
  );
}
