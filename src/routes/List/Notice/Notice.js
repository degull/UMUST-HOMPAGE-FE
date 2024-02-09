import React, { useEffect, useState } from 'react';
import * as S from './Notice.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Notice = () => {
  // 상태를 통해 공지사항 목록을 저장
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 데이터를 불러오는 함수
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

    // 컴포넌트가 마운트되었을 때 데이터를 불러옴
    fetchData();
  }, []);

  // 공지사항 상세보기로 이동하는 함수
  const navigateToDetail = (postId) => {
    // 실제 라우트 경로로 대체하세요
    // 예: `/Board/notices/${postId}`
    console.log(`${postId}번 공지사항으로 이동합니다.`);
  };

  return (
    <S.Wrapper>
      {/* 헤더 */}
      <Header />
      
      {/* 이미지 및 메뉴 탭 */}
      <S.WrapImage src="/img/NoticeLogo.png" />
      <S.MenuTab>구현예정</S.MenuTab>

      {/* 메인 컨테이너 */}
      <S.MainContainer>
        {/* 제목 및 메모 */}
        <S.Title>공지사항</S.Title>
        <S.Memo>유머스트알엔디의 최신 소식을 알려드립니다.</S.Memo>

        {/* 공지사항 목록 */}
        <S.PostListWrapper>
          {/* 헤더 */}
          <S.PostListHeader>
            <S.PostListLabel>번호</S.PostListLabel>
            <S.PostListLabel>제목</S.PostListLabel>
            <S.PostListLabel>날짜</S.PostListLabel>
            <S.PostListLabel>작성자</S.PostListLabel>
            <S.PostListLabel>조회수</S.PostListLabel>
          </S.PostListHeader>
          
          {/* 목록 */}
          <S.PostList>
            {posts.map(post => (
              <S.PostItem key={post.id}>
                <S.PostNumber>{post.id}</S.PostNumber>
                {/* 클릭 시 상세보기로 이동하도록 설정 */}
                <S.PostTitle onClick={() => navigateToDetail(post.id)}>
                  {post.title}
                </S.PostTitle>
                <S.PostDate>{(new Date(post.createdAt)).toLocaleDateString()}</S.PostDate>
                <S.PostAuthor>{post.createdBy}</S.PostAuthor>
                <S.PostViews>{post.views}</S.PostViews>
                <S.ViewCount>{post.views}</S.ViewCount>

              </S.PostItem>
            ))}
          </S.PostList>
        </S.PostListWrapper>
      </S.MainContainer>

      {/* 푸터 */}
      <Footer />
    </S.Wrapper>
  );
};

export default Notice;
