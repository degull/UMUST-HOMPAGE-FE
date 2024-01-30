import React from 'react';
import * as S from './CI.styled';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const CI = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/ci.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent1 src="/img/mark1.png" />
         <S.MainComponent2 src="/img/mark2.png" />
         <S.MainComponent3 src="/img/mark3.png" />

         <Footer />
      </S.Wrapper>
   );
};

export default CI;