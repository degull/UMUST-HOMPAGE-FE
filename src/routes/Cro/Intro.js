import React, { useState } from "react";
import * as S from "./Intro.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Intro/dropdown";

const Intro = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/IntroBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/IntroContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Intro;
