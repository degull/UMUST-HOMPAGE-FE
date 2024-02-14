import React from "react";
import * as S from "./OpenInno.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Intro/OpenInno/dropdown";

const OpenInno = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/OpenInnoBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/inno.png" />

      <Footer />
    </S.Wrapper>
  );
};

export default OpenInno;
