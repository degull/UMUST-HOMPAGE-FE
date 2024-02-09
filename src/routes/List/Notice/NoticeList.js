// NoticeList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const NoticeList = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/NoticeLogo.png" />
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
                {/* Link를 사용하여 해당 공지사항의 상세 페이지로 이동 */}
                <S.PostTitle>
                  <Link to={`/notices/${post.id}`}>{post.title}</Link>
                </S.PostTitle>
                <S.PostDate>{(new Date(post.createdAt)).toLocaleDateString()}</S.PostDate>
                <S.PostAuthor>{post.createdBy}</S.PostAuthor>
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

export default NoticeList;
