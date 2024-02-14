import React, { useState } from "react";
import * as S from "./Item.styled";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Cro/Item/dropdown";
// import "./Ceo.css";

const Item = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/ItemBanner.png" />
      <Dropdown />
      <S.MainComponent src="/img/ItemContent.png" />
      <Footer />
    </S.Wrapper>
  );
};

export default Item;
