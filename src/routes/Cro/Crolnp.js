import React, { useState } from "react";
import * as S from "./Crolnp.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Crolnp/dropdown";


const Crolnp = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/CrolnpBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/CrolnpContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Crolnp;
