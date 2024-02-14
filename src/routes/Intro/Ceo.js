import React, { useState } from "react";
import * as S from "./Ceo.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Intro/Ceo/dropdown";
// import "./Ceo.css";

const Ceo = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CEO.png" />
      <Dropdown />
      <S.MainComponent src="/img/ceoIntro.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Ceo;
