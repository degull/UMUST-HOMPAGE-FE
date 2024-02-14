import React, { useState } from "react";
import * as S from "./Cropk.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Cropk/dropdown";
// import "./Ceo.css";

const Cropk = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/IntroBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CropkContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Cropk;
