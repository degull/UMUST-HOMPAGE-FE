import React, { useState, useEffect } from 'react';
import * as S from './Paper.styled';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import axios from 'axios';
import Dropdown from '../../../components/Menu/Research/Thesis/dropdown';

const Paper = () => {
   const [paperList, setPaperList] = useState([]);


   useEffect(() => {
      const fetchPaperDetails = async () => {
        try {
          const response = await axios.get('https://eb-umust.umust302.shop/api/thesis');
          const paperList = response.data;
  
          setPaperList(paperList);
        } catch (error) {
          console.error('Error fetching paper details:', error);
        }
      };
  
      fetchPaperDetails();
    }, []);


  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/NoticeLogo.png" />
      <Dropdown />
      <S.MainContainer>
        <S.Title>논문</S.Title>
        <S.Memo>유머스트알엔디의 연구 성과입니다.</S.Memo>
        <S.Border />

         {/*  */}
         {paperList.map((paper, index) => (
        <S.PaperHeader key={index}>
          <S.PaperTitle>{paper.title}</S.PaperTitle>
          <S.PaperDetail>
            <S.subPaper>Journal:<br/><S.subApi>{paper.journal}</S.subApi></S.subPaper>
          </S.PaperDetail>
          <S.PaperDetail>
            <S.subPaper>Authors:<br/><S.subApi>{paper.authors}</S.subApi></S.subPaper>
          </S.PaperDetail>
          <S.PaperDetail><S.subPaper>{paper.date}</S.subPaper></S.PaperDetail>
          <S.PaperDetail>
            <S.subPaper>
              <a href={`//${paper.link}`} target="_blank">
                <img src="/img/link.png" alt="Link Icon" style={{ width: '20px', height: '20px' }} />
              </a>
            </S.subPaper>
          </S.PaperDetail>
        </S.PaperHeader>
      ))}

      {paperList.length === 0 && <div>Loading...</div>}

      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default Paper;
