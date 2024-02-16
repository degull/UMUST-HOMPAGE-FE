import React, { useState } from "react";
import * as S from "./Machine.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Business/Machine/dropdown";
// import "./Ceo.css";

const Machine = () => {
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

export default Machine;
