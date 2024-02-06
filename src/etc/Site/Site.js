import React from 'react';
import * as S from './Site.styled';

const Site = () => {
   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/contact_img.png" />
      </S.Wrapper>
   );
};

export default Site;