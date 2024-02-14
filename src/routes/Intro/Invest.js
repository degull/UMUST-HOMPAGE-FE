import React from "react";
import * as S from "./Invest.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Intro/Invest/dropdown";

const Invest = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/InvestBanner.png" />
      <Dropdown />

      <S.MainComponent src="/img/invest.png" />

      <Footer />
    </S.Wrapper>
  );
};

export default Invest;
