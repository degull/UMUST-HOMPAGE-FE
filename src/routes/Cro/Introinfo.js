import React, { useState } from "react";
import * as S from "./Introinfo.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Introinfo/dropdown";
// import "./Ceo.css";

const Introinfo = () => {
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

export default Introinfo;
