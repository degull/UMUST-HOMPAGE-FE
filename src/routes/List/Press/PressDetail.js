import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Press.styled';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';


const PressDetail = ({ onDelete, onEdit }) => {
   const navigate = useNavigate();
   const { pressId } = useParams(); 
   const [press, setPress] = useState(null);
   const [showConfirmation, setShowConfirmation] = useState(false);
 
   useEffect(() => {
      const fetchNoticeById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${pressId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received press data:', data);
          console.log(pressId)
          setPress(data);
        } catch (error) {
          console.error('Error fetching notice:', error);
        }
      };
  
      fetchNoticeById();
    }, [pressId]);
  
    if (!press) {
      return <div>로딩 중...</div>;
    }



   return (
      <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/PressLogo.png"/>
      <S.MainContainer>
        <S.Border />

      <S.DetailContainer>
      

        <S.NoticeTitle>{press.title || '제목 없음'}</S.NoticeTitle>

        <S.NoticeDetails>
          <span>작성자: {press.createdBy || '관리자'}</span><br/>
          <span>작성 시간: {(new Date(press.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Content><ReactMarkdown>{press.content}</ReactMarkdown></S.Content>

        {press.files && press.files.length > 0 && (
          <S.NoticeImages>
            {press.files.map(file => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}





        {press.files && press.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {press.files.map(file => (
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

export default PressDetail;