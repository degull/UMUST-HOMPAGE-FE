import React, { useState } from "react";
import * as S from "./Croorga.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Croorga/dropdown";

const Croorga = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CroorgaBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CroorgaContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Croorga;
