import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Contact.styled';

const Contact = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/contact_img.png" />
      </S.Wrapper>
   );
};

export default Contact;