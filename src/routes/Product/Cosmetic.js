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

      <S.MainImg src="/img/test (2).png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Cosmetic;
