import React, { useState } from "react";
import * as S from "./Crotcm.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Crotcm/dropdown";
// import "./Ceo.css";

const Crotcm = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CrotcmBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CrotcmContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Crotcm;
