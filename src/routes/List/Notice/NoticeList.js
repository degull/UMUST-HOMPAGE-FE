import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Notice.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';


const NoticeList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://eb-umust.umust302.shop/api/articles/NOTICE?page=${currentPage}&size=${pageSize}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data.content)) {
          setPosts(data.content);
          setTotalPages(data.totalPages);
        } else {
          console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
        }
      } catch (error) {
        console.error('공지사항 불러오기 실패:', error);
      }
    };

    fetchData();
  }, [currentPage]);

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

        {/* 페이징 추가 */}
        <S.PaginationContainer>
          {Array.from({ length: totalPages }, (_, i) => i).map((pageNumber) => (
            <S.PaginationItem
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              active={currentPage === pageNumber}
            >
              {pageNumber + 1}
            </S.PaginationItem>
          ))}
        </S.PaginationContainer>
      </S.MainContainer>

      <Footer />
    </S.Wrapper>
  );
};

export default NoticeList;
