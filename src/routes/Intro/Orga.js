import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Orga.styled";
import Dropdown from "../../components/Menu/Intro/Orga/dropdown";

const Orga = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/OrgaBanner.png" />
      <Dropdown />

      <S.MainComponent1 src="/img/Orga.png" />

      <Footer />
    </S.Wrapper>
  );
};

export default Orga;
