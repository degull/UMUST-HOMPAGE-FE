// NoticeDetail.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Notice.styled';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const NoticeDetail = ({ onDelete, onEdit }) => {
  const navigate = useNavigate();
  const { noticeId } = useParams(); 
  const [notice, setNotice] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await fetch(`https://umust302.shop/api/articles/${noticeId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        
        console.log('Received press data:', data);
        console.log(noticeId)
        setNotice(data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };

    // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
    fetchNoticeById();
  }, [noticeId]);

  if (!notice) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/NoticeLogo.png" />
      <S.MainContainer>
        <S.Border />

      <S.DetailContainer>
      

        <S.NoticeTitle>{notice.title || '제목 없음'}</S.NoticeTitle>

        <S.NoticeDetails>
          <span>작성자: {notice.createdBy || '관리자'}</span><br/>
          <span>작성 시간: {(new Date(notice.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Content><ReactMarkdown>{notice.content}</ReactMarkdown></S.Content>

        {notice.files && notice.files.length > 0 && (
          <S.NoticeImages>
            {notice.files.map(file => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}





        {notice.files && notice.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {notice.files.map(file => (
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

export default NoticeDetail;
