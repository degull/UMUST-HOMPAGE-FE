import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./Matinfo.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Product/Matinfo/dropdown";
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('ko-KR', options);
};

const generatePageNumbers = (totalPages) => {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

const Matinfo = () => {
  const [Infos, setInfos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;


  
  useEffect(() => {
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/COSINFO?page=${currentPage}&size=${pageSize}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setInfos(data.content);
          setTotalPages(data.totalPages);
        } else {
          console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
        }
      })
      .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
  }, [currentPage]);

  const handleViewCount = async (infoId) => {
    try {
      await axios.put(`https://eb-umust.umust302.shop/api/articles/${infoId}/views`);
      
      const updatedInfos = await fetchInfos();
      setInfos(updatedInfos);
    } catch (error) {
      console.error('조회수 업데이트 중 오류 발생:', error);
    }
  };

  const fetchInfos = async () => {
    const response = await fetch(`https://eb-umust.umust302.shop/api/articles/REFERENCE?page=${currentPage}&size=${pageSize}`);
    const data = await response.json();
    return Array.isArray(data.content) ? data.content : [];
  };

  return (
    <S.Wrapper>
      <Header />
      
      <S.WrapImage src="/img/MatinfoBanner.png" />
      <Dropdown />

      <S.MainContainer>
        <S.Title>공지사항</S.Title>
        <S.Memo>유머스트알엔디의 관련정보입니다.</S.Memo>
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
            {Array.isArray(Infos) && Infos.map((Infos, index) => (
              <Link key={Infos.id} to={`/product/infos/${Infos.id}`} onClick={() => handleViewCount(Infos.id)}>
                <S.PostItem>
                  <S.PostNumber>{index + 1 + currentPage * pageSize}</S.PostNumber>
                  <S.PostTitleContainer>{Infos.title.length > 13 ? `${Infos.title.substring(0, 13)}...` : Infos.title}</S.PostTitleContainer>
                  <S.PostDate>{formatDate(Infos.createdAt)}</S.PostDate>
                  <S.PostAuthor>{Infos.createdBy}</S.PostAuthor>
                  <S.ViewCount> {Infos.view}</S.ViewCount>
                </S.PostItem>
              </Link>
            ))}
          </S.PostList>

        </S.PostListWrapper>


        <S.PaginationContainer>
        {generatePageNumbers(totalPages).map((pageNumber) => (
          <S.PaginationItem
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber - 1)}
            active={currentPage === pageNumber - 1}
          >
            {pageNumber}
          </S.PaginationItem>
        ))}
      </S.PaginationContainer>
      </S.MainContainer>



      <Footer />
    </S.Wrapper>
  );
};

export default Matinfo;
