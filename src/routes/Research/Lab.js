import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from "./Lab.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Menu/Research/Lab/dropdown";
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };

const Lab = () => {
  const [Blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    const pageSize = 12; 
    const apiUrl = `https://eb-umust.umust302.shop/api/articles/LABORATORY?page=${currentPage}&size=${pageSize}`;
 
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.content)) {
          setBlogs(data.content);
          setTotalPages(data.totalPages);
        } else {
          console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
        }
      })
      .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
  }, [currentPage]);
 
 
   const handleEditAlbum = (albumId) => {
     console.log(`Editing Album with ID: ${albumId}`);
   };
 
   const handleDeleteAlbum = (albumId) => {
     console.log(`Deleting Album with ID: ${albumId}`);
   };

  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/AlbumLogo.png" />
      <Dropdown />

      <S.MainContainer>
        <S.Title>기업부설연구소</S.Title>
        <S.Memo>유머스트알엔디의 연구소를 소개합니다.</S.Memo>
        <S.Line />

         <S.AlbumGrid>
            {Array.isArray(Blogs) && Blogs.map(Blogs => (
               <Link key={Blogs.id} to={`/Research/blogs/${Blogs.id}`}>
               <S.AlbumItem>
                  <S.Thumbnail>
                    {Blogs.files && Blogs.files.length > 0 && Blogs.files[0].fileURL && (
                    <img src={Blogs.files[0].fileURL} alt={`Thumbnail for ${Blogs.title}`} />
                  )}
                  </S.Thumbnail>
                  <S.AlbumTitle>{Blogs.title}</S.AlbumTitle>
                  <S.CreateDate>{formatDate(Blogs.createdAt)}</S.CreateDate>
               </S.AlbumItem>
               </Link>
            ))}
         </S.AlbumGrid>

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

export default Lab;
