import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Introinfo.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dropdown from '../../../components/Menu/List/Notice/dropdown';
import ReactMarkdown from 'react-markdown';


const IntroinfoDetail = () => {
   const navigate = useNavigate();
   const { dataId } = useParams();
   const [data, setdata] = useState(null);
   const [editMode, setEditMode] = useState(false);
   const [showConfirmation, setShowConfirmation] = useState(false);

   const fetchDataById = async () => {
      try {
        const response = await fetch(`https://umust302.shop/api/articles/${dataId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'apdplication/json',
          },
        });
        const data = await response.json();
        
        console.log('Received press data:', data);
        console.log(dataId);
        setdata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchDataById();
    }, [dataId]);
   
    if (!data) {
      return <div>로딩 중...</div>;
    }


   return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/NoticeLogo.png" />
      <S.MainContainer>
        <S.Border />

      <S.DetailContainer>
      

        <S.NoticeTitle>{data.title || '제목 없음'}</S.NoticeTitle>

        <S.NoticeDetails>
          <span>작성자: {data.createdBy || '관리자'}</span><br/>
          <span>작성 시간: {(new Date(data.createdAt)).toLocaleString() || '알 수 없음'}</span>
        </S.NoticeDetails>
        <S.Content><ReactMarkdown>{data.content}</ReactMarkdown></S.Content>

        {data.files && data.files.length > 0 && (
          <S.NoticeImages>
            {data.files.map(file => (
              <img key={file.fileId} src={file.fileURL} alt={`Attached Image ${file.fileId}`} />
            ))}
          </S.NoticeImages>
        )}





        {data.files && data.files.length > 0 && (
          <S.NoticeFiles>
            <span>첨부파일:</span>
            {data.files.map(file => (
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

export default IntroinfoDetail;