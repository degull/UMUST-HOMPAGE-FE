import React from "react";
import * as S from "./Medical.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Product/Matinfo/dropdown";

const Matinfo = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/MatinfoBanner.png" />
      <Dropdown />

      <S.MainComponent>관련정보</S.MainComponent>
      <Footer />
    </S.Wrapper>
  );
};

export default Matinfo;
