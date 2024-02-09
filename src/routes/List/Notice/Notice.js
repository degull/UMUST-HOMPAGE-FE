import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Notice.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Notice = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const pageSize = 10;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://eb-umust.umust302.shop/api/articles/NOTICE';
        const response = await fetch(apiUrl);
        const data = await response.json();

        setPosts(data.content || []);
      } catch (error) {
        console.error('공지사항 불러오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  

  const navigateToDetail = (postId) => {
    navigate(`/Board/notices/${postId}`);
  };

  return (
    <S.Wrapper>
      <Header />
      
      <S.WrapImage src="/img/NoticeLogo.png" />
      <S.MenuTab>구현예정</S.MenuTab>

      <S.MainContainer>
        <S.Title>공지사항</S.Title>
        <S.Memo>유머스트알엔디의 최신 소식을 알려드립니다.</S.Memo>
        <S.Border />

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
      {/* Use the new PostTitleContainer for the title */}
      <S.PostTitleContainer onClick={() => navigateToDetail(post.id)}>
        {post.title}
      </S.PostTitleContainer>
      <S.PostDate>{(new Date(post.createdAt)).toLocaleDateString()}</S.PostDate>
      <S.PostAuthor>{post.createdBy}</S.PostAuthor>
      <S.ViewCount>{post.view}</S.ViewCount>
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
