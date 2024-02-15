import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Lab.styled';

const LabDetail = () => {
   const navigate = useNavigate();
   const { blogId } = useParams(); 
   const [ Blog, setBlog ] = useState(null);
   const [showConfirmation, setShowConfirmation] = useState(false);

   useEffect(() => {
      const fetchBlogById = async () => {
        try {
          const response = await fetch(`https://umust302.shop/api/articles/${blogId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          
          console.log('Received album data:', data);
          console.log(blogId)
          setBlog(data);
        } catch (error) {
          console.error('Error fetching notice:', error);
        }
      };
  
      // 컴포넌트가 처음 마운트될 때와 게시글 번호가 변경될 때마다 데이터를 불러옴
      fetchBlogById();
    }, [blogId]);
  
    if (!Blog) {
      return <div>로딩 중...</div>;
    }

   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/AlbumLogo.png" />
         <S.MainContainer>
            <S.Border />


            <S.DetailContainer>
            <S.AlbumTitle1>{Blog.title || '제목 없음'}</S.AlbumTitle1>

            <S.AlbumDetails>
            <span>작성자: {Blog.createdBy || '짱구'}</span><br/>
            <span>작성 시간: {(new Date(Blog.createdAt)).toLocaleString() || '알 수 없음'}</span>
            </S.AlbumDetails>

            <ReactMarkdown
               components={{
                  img: ({ alt, src }) => (
                     <img
                        alt={alt}
                        src={src}
                        style={{  width: '500px', height: 'auto', margin: '0 auto' }}
                     />
                  ),
               }}
            >
               {Blog.content}
            </ReactMarkdown>

         </S.DetailContainer>

        </S.MainContainer>
         <Footer />
      </S.Wrapper>
   );
};

export default LabDetail;