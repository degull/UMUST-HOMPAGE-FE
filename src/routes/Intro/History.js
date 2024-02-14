import React from "react";
import * as S from "./History.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Intro/History/dropdown";

const History = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/HistoryBanner.png" />
      <Dropdown />

      <S.MainComponent1 src="/img/history.png" />

      <Footer />
    </S.Wrapper>
  );
};

export default History;
