import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Matinfo.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const MatinfoDetail = () => {
   const { infoId } = useParams();
   const [Info, setInfo] = useState(null);
   const [editMode, setEditMode] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);

  const fetchInfoById = async () => {
   try {
     const response = await fetch(`https://umust302.shop/api/articles/${infoId}`, {
       method: 'PATCH',
       headers: {
         'Content-Type': 'application/json',
       },
     });
     const data = await response.json();
     
     console.log('Received press data:', data);
     console.log(infoId);
     setInfo(data);
   } catch (error) {
     console.error('Error fetching notice:', error);
   }
 };

 useEffect(() => {
   // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
   fetchInfoById();
 }, [infoId]);

 if (!Info) {
   return <div>로딩 중...</div>;
 }

   return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/MatinfoBanner.png" />

      <S.MainContainer>
        <S.Border />

      <S.DetailContainer>
      

        <S.NoticeTitle>{Info.title || '제목 없음'}</S.NoticeTitle>

        <S.NoticeDetails>
          <span>작성자: {Info.createdBy || '관리자'}</span><br/>
          <span>작성 시간: {(new Date(Info.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Content><ReactMarkdown>{Info.content}</ReactMarkdown></S.Content>

        {Info.files && Info.files.length > 0 && (
          <S.NoticeImages>
            {Info.files.map(file => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}





        {Info.files && Info.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {Info.files.map(file => (
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

export default MatinfoDetail;