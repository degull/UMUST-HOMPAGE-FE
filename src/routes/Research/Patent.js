import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import * as S from "./Patent.styled";
import Dropdown from "../../components/Menu/Research/Patent/dropdown";
import axios from 'axios';

const formatDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
};

const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };

const Patent = () => {
  const [Patents, setPatents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 12;

  useEffect(() => {
     const pageSize = 12; 
     const apiUrl = `https://eb-umust.umust302.shop/api/articles/PATENT?page=${currentPage}&size=${pageSize}`;
  
     fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
         if (Array.isArray(data.content)) {
           setPatents(data.content);
           setTotalPages(data.totalPages);
         } else {
           console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
         }
       })
       .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
   }, [currentPage]);
 
   const handleEditPatent = (patentId) => {
     console.log(`Editing Patent with ID: ${patentId}`);
   };
 
   const handleDeletePatent = (patentId) => {
     console.log(`Deleting Patent with ID: ${patentId}`);
   };


  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/AlbumLogo.png" />
      <Dropdown />

      <S.MainContainer>
        <S.Title>특허</S.Title>
        <S.Memo>유머스트알엔디의 특허 현황입니다.</S.Memo>
        <S.Line />

         <S.AlbumGrid>
            {Array.isArray(Patents) && Patents.map(Patents => (
               <Link key={Patents.id} to={`/Research/patents/${Patents.id}`}>
               <S.AlbumItem>
                  <S.Thumbnail>
                    {Patents.files && Patents.files.length > 0 && Patents.files[0].fileURL && (
                    <img src={Patents.files[0].fileURL} alt={`Thumbnail for ${Patents.title}`} />
                  )}
                  </S.Thumbnail>
                  <S.AlbumTitle>{Patents.title}</S.AlbumTitle>
                  <S.CreateDate>{formatDate(Patents.createdAt)}</S.CreateDate>
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

export default Patent;
