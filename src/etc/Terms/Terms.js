import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Terms.styled';

const Terms = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/contact_img.png" />
      </S.Wrapper>
   );
};

export default Terms;