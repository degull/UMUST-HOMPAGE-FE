import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Event.styled';
import ReactMarkdown from 'react-markdown';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const EventDetail = ({ onDelete, onEdit }) => {
   const navigate = useNavigate();
   const { eventId } = useParams(); 
   const [ event, setEvent ] = useState(null);
   const [showConfirmation, setShowConfirmation] = useState(false);

   useEffect(() => {
      const fetchNoticeById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${eventId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received event data:', data);
          console.log(eventId)
          setEvent(data);
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      };
  
      fetchNoticeById();
    }, [eventId]);
  
    if (!event) {
      return <div>로딩 중...</div>;
    }


 
   return (
      <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/PressLogo.png"/>
      <S.MainContainer>
        <S.Border />

      <S.DetailContainer>
      

        <S.NoticeTitle>{event.title || '제목 없음'}</S.NoticeTitle>

        <S.NoticeDetails>
          <span>작성자: {event.createdBy || '관리자'}</span><br/>
          <span>작성 시간: {(new Date(event.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Content><ReactMarkdown>{event.content}</ReactMarkdown></S.Content>

        {event.files && event.files.length > 0 && (
          <S.NoticeImages>
            {event.files.map(file => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}





        {event.files && event.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {event.files.map(file => (
              <div key={file.fileId}>
                <a href={file.fileURL} download>{file.originalFileName}</a>
              </div>
            ))}
          </S.NoticeFiles>
        )}
      </S.DetailContainer>
      </S.MainContainer>
      <Footer />
      </S.Wrapper>
   );
};

export default EventDetail;