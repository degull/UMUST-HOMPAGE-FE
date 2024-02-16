import React, { useState } from "react";
import * as S from "./Newmedi.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Business/NewMedi/dropdown";
// import "./Ceo.css";

const Newmedi = () => {
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

export default Newmedi;
