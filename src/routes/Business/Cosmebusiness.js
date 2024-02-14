import React, { useState } from "react";
import * as S from "./Cosmebusiness.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Business/Cosmebusiness/dropdown";
// import "./Ceo.css";

const Cosmebusiness = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CosmeBusinessBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CosmeBusinessContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Cosmebusiness;
