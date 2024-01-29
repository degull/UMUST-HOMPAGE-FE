import React from 'react';
import * as S from './Invest.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Invest = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/CEO.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent src="/img/invest.png" />

         <Footer />
      </S.Wrapper>
   );
};

export default Invest;