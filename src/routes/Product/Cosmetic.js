import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Cosmetic.styled";
import Dropdown from "../../components/Menu/Product/Cosmetic/dropdown";

const Cosmetic = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CosmeticBanner.png" />
      <Dropdown />

      <S.MainComponent>화장품</S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Cosmetic;
