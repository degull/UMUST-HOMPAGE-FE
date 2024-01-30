import React, { useEffect, useState } from 'react';
import * as S from './Album.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Album = () => {

   const [posts, setPosts] = useState([]);

/*    useEffect(() => {
      fetch('yourApiEndpoint')
         .then(response => response.json())
         .then(data => setPosts(data))
         .catch(error => console.error('Error fetching posts:', error));
   }, []);
 */

   // 임시데이터 -> 지울거
   const samplePosts = [
      { id: 1, thumbnailUrl: '/img/Post1.jpg', title: 'Post 1' },
      { id: 2, thumbnailUrl: '/img/Post2.jpg', title: 'Post 2' },
      { id: 3, thumbnailUrl: '/img/Post3.jpg', title: 'Post 3' },
      { id: 4, thumbnailUrl: '/img/Post3.jpg', title: 'Post 4' },
      { id: 4, thumbnailUrl: '/img/Post3.jpg', title: 'Post 4' },
      { id: 4, thumbnailUrl: '/img/Post3.jpg', title: 'Post 4' },
      { id: 4, thumbnailUrl: '/img/Post3.jpg', title: 'Post 4' },
      { id: 4, thumbnailUrl: '/img/Post3.jpg', title: 'Post 4' },
   ];

   return (
      <S.Wrapper>
         <Header />
         <S.WrapImage src="/img/AlbumLogo.png" />
         <S.MenuTab>구현예정</S.MenuTab>

         <S.MainContainer>
            <S.Title>앨범</S.Title>
            <S.Memo>유머스트알엔디의 일상을 기록합니다.</S.Memo>
            <S.Line />

{/* 샘플 데이터 -> 지울거 */}
         <S.AlbumWrapper>
            {samplePosts.map(post => (
               <S.PostItem key={post.id}>
                  <S.Thumbnail src={post.thumbnailUrl} alt={`Thumbnail for ${post.title}`} />
                  <S.PostTitle>{post.title}</S.PostTitle>
               </S.PostItem>
            ))}
         </S.AlbumWrapper>


{/* 원본 */}
{/* 
         <S.AlbumWrapper>
             {posts.map(post => (
               <S.PostItem key={post.id}>
                  <S.Thumbnail src={post.thumbnailUrl} alt={`Thumbnail for ${post.title}`} />
                  <S.PostTitle>{post.title}</S.PostTitle>
               </S.PostItem>
            ))}
            </S.AlbumWrapper>

             */}
         </S.MainContainer>

         <Footer />
      </S.Wrapper>


   );
};

export default Album;

