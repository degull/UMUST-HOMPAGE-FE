import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Tech.styled";
import Dropdown from "../../components/Menu/Research/Certi/dropdown";

const Certi = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CEO.png" />
      <Dropdown />

      <S.MainComponent>인증현황</S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Certi;
