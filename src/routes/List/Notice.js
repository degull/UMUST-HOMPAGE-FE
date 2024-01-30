import React, { useEffect, useState } from 'react';
import * as S from './Notice.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Notice = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      // Simulating data fetching from an API endpoint
      const fetchData = async () => {
         try {
            // Simulating API response data
            const apiResponse = [
               { id: 1, title: '새로운 기능 추가', date: '2024-02-01', author: '관리자', views: 10 },
               { id: 2, title: '서버 업그레이드 예정 안내', date: '2024-02-05', author: '관리자', views: 5 },
               // Add more simulated posts as needed
            ];

            setPosts(apiResponse);
         } catch (error) {
            console.error('공지사항 불러오기 실패:', error);
         }
      };

      fetchData();
   }, []);

   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/NoticeLogo.png"/>
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainContainer>
            <S.Title>공지사항</S.Title>
            <S.Memo>유머스트알엔디의 최신 소식을 알려드립니다.</S.Memo>

            <S.PostListWrapper>
               <S.PostListHeader>
                  <S.PostListLabel>번호</S.PostListLabel>
                  <S.PostListLabel>제목</S.PostListLabel>
                  <S.PostListLabel>날짜</S.PostListLabel>
                  <S.PostListLabel>작성자</S.PostListLabel>
                  <S.PostListLabel>조회수</S.PostListLabel>
               </S.PostListHeader>
               <S.PostList>
                  {posts.map(post => (
                     <S.PostItem key={post.id}>
                        <S.PostNumber>{post.id}</S.PostNumber>
                        <S.PostTitle>{post.title}</S.PostTitle>
                        <S.PostDate>{post.date}</S.PostDate>
                        <S.PostAuthor>{post.author}</S.PostAuthor>
                        <S.PostViews>{post.views}</S.PostViews>
                     </S.PostItem>
                  ))}
               </S.PostList>
            </S.PostListWrapper>
         </S.MainContainer>

         <Footer />
      </S.Wrapper>
   );
};

export default Notice;
