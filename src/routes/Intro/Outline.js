import React from 'react';
import * as S from './Outline.styled';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Outline = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/OutlineLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent1 src="/img/Outline1.png" />
         <S.MainComponent2 src="/img/Outline2.png" />
         <S.MainComponent3 src="/img/Outline3.png" />
         <S.MainComponent4 src="/img/Outline4.png" />
         <S.MainComponent5 src="/img/Outline5.png" />

         <Footer />
      </S.Wrapper>
   );
};

export default Outline;