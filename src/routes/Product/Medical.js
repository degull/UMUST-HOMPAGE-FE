import React from "react";
import * as S from "./Medical.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Product/Medical/dropdown";

const Medical = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/MedicalBanner.png" />
      <Dropdown />

      <S.MainImg src="/img/test (2).png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Medical;
