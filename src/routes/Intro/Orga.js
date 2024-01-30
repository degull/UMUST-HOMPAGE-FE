import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Orga.styled';


const Orga = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/orgaLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainComponent1 src="/img/Orga.png" />


         <Footer />
      </S.Wrapper>
   );
};

export default Orga;