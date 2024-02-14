import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Tech.styled";
import Dropdown from "../../components/Menu/Research/Patent/dropdown";

const Patent = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CEO.png" />
      <Dropdown />

      <S.MainComponent>특허</S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Patent;
