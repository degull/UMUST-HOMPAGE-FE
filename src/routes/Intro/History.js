import React from 'react';
import * as S from './History.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const History = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/HistoryLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent1 src="/img/history.png" />


         <Footer />
      </S.Wrapper>
   );
};

export default History;

