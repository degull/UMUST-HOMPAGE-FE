import React from "react";
import * as S from "./Medical.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Product/Material/dropdown";

const Material = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/MaterialBanner.png" />
      <Dropdown />

      <S.MainComponent>화장품 원료</S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Material;
