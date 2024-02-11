import React, { useEffect, useState } from 'react';
import * as S from './Press.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const Press = () => {
   const [press, setPress] = useState([]);

   useEffect(() => {
      fetch('Api엔드포인트')
         .then(response => response.json())
         .then(data => setPress(data))
         .catch(error => console.error('행사정보 실패:', error));
   }, []);

   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/PressLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainContainer>
            <S.Title>보도자료</S.Title>
            <S.Memo>유머스트알엔디의 최신 소식을 알려드립니다.</S.Memo>

            <S.PostListWrapper>
               <S.PostListHeader>
                  <S.PostListLabel>번호</S.PostListLabel>
                  <S.PostListLabel>보도자료</S.PostListLabel>
                  <S.PostListLabel>제목</S.PostListLabel>
                  <S.PostListLabel>날짜</S.PostListLabel>
                  <S.PostListLabel>작성자</S.PostListLabel>
               </S.PostListHeader>
               <S.PostList>
                  {press.map(post => (
                     <S.PostItem key={post.id}>
                        <S.PostNumber>{post.id}</S.PostNumber>
                        <S.PostTitle>{post.title}</S.PostTitle>
                        <S.PostDate>{post.date}</S.PostDate>
                        <S.PostAuthor>{post.author}</S.PostAuthor>
                     </S.PostItem>
                  ))}
               </S.PostList>
            </S.PostListWrapper>
         </S.MainContainer>

         <Footer />
      </S.Wrapper>
   );
};

export default Press;



