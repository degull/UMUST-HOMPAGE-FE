import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Event.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Dropdown from '../../../components/Menu/List/Event/dropdown';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formatDate = (timestamp) => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   return new Date(timestamp).toLocaleString('ko-KR', options);
 };
 
 const generatePageNumbers = (totalPages) => {
   return Array.from({ length: totalPages }, (_, i) => i + 1);
 };


const Event = () => {
   const navigate = useNavigate();
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [event, setEvent] = useState([]);
   const pageSize = 10;


   useEffect(() => {
      const apiUrl = `https://eb-umust.umust302.shop/api/articles/EVENT?page=${currentPage}&size=${pageSize}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data.content)) {
            setEvent(data.content);
            setTotalPages(data.totalPages);
          } else {
            console.error('API 응답의 content 속성이 배열이 아닙니다:', data);
          }
        })
        .catch(error => console.error('게시글을 불러오는 중 오류 발생:', error));
    }, [currentPage]);
  
    const handleViewCount = async (eventId) => {
      try {
        await axios.put(`https://eb-umust.umust302.shop/api/articles/${eventId}/views`);
        
        const updatedEvents = await fetchEvents();
        setEvent(updatedEvents);
      } catch (error) {
        console.error('조회수 업데이트 중 오류 발생:', error);
      }
    };
  
    const fetchEvents = async () => {
      const response = await fetch(`https://eb-umust.umust302.shop/api/articles/EVENT?page=${currentPage}&size=${pageSize}&sort=createdAt,desc`);
      const data = await response.json();
      return Array.isArray(data.content) ? data.content : [];
    };
    
  
    
    const navigateToDetail = (postId) => {
      navigate(`/Board/events/${postId}`);
    };
  

   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/EventLogo.png"/>
         <Dropdown />

         <S.MainContainer>
            <S.Title>행사정보</S.Title>
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
            {Array.isArray(event) && event.map((event, index) => (
              <Link key={event.id} to={`/Board/events/${event.id}`} onClick={() => handleViewCount(event.id)}>
                <S.PostItem>
                  <S.PostNumber>{index + 1 + currentPage * pageSize}</S.PostNumber>
                  <S.PostTitleContainer>{event.title.length > 13 ? `${event.title.substring(0, 13)}...` : event.title}</S.PostTitleContainer>
                  <S.PostDate>{formatDate(event.createdAt)}</S.PostDate>
                  <S.PostAuthor>{event.createdBy}</S.PostAuthor>
                  <S.ViewCount> {event.view}</S.ViewCount>
                </S.PostItem>
              </Link>
            ))}
          </S.PostList>
            </S.PostListWrapper>
         </S.MainContainer>

         <Footer />
      </S.Wrapper>
   );
};

export default Event;
