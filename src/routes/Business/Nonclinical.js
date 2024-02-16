import React, { useState } from "react";
import * as S from "./Nonclinical.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Business/Nonclinical/dropdown";
// import "./Ceo.css";

const Nonclinical = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CEO.png" />
      <Dropdown />
      <S.MainComponent src="/img/test (2).png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Nonclinical;
