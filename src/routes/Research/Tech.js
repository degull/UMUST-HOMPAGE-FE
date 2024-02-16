import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Tech.styled";
import Dropdown from "../../components/Menu/Research/Tech/dropdown";

const Tech = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/TechBanner.png" />
      <Dropdown />

      <S.MainComponent>
        <S.MainImg src="/img/test (2).png" />
      </S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Tech;
