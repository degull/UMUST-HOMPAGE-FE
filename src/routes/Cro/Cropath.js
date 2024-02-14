import React, { useState } from "react";
import * as S from "./Cropath.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Cropath/dropdown";
// import "./Ceo.css";

const Cropath = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CropathBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CropathContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Cropath;
