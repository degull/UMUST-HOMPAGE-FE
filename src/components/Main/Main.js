import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import * as S from './Main.styled';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const images = [
  '/img/slide_01.png',
  '/img/slide_02.png',
  '/img/slide_03.png',
];

 const BackendUrl = "https://eb-umust.umust302.shop"
 const videoId = 'HJ7bus70-_A'; // 유튜브 영상 ID

export default function Main() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDot, setCurrentDot] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  /* API 상태관리 */
  const [press, setPress] = useState([]); /* 보도자료 */
  const [events, setEvents] = useState([]); /* 행사정보 */
  const [loading, setLoading] = useState(true); // 로딩 상태 추가y

  const handleMoreBtnClick = () => {
    // 더보기 버튼 클릭 시 이동할 URL 설정
    const moreBtnUrl = 'https://www.yna.co.kr/view/AKR20230714110100516';
    window.open(moreBtnUrl, '_blank'); // 새 창으로 열기
  };

  useEffect(() => {
    let isMounted = true;

    const fetchPress = async () => {
      try {
        const response = await axios.get(BackendUrl + '/api/articles/NEWS/latest');
        setPress([response.data]);
      } catch (error) {
        console.error('보도자료 가져오는데 문제가 발생했습니다:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get(BackendUrl + '/api/articles/EVENT/latest');
        setEvents([response.data]);
      } catch (error) {
        console.error('행사정보를 가져오는데 문제가 발생했습니다:', error);
      }
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const pressResponse = await axios.get (BackendUrl + '/api/articles/NEWS/latest');
        const eventsResponse = await axios.get(BackendUrl + '/api/articles/EVENT/latest');

        setPress([pressResponse.data]);
        setEvents([eventsResponse.data]);
      } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isMouseOver]);

  const handleMouseEnter = () => {
    console.log('마우스 진입');
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    console.log('마우스 이탈');
    setIsMouseOver(false);
  };

  const handleTouchStart = (e) => {
    console.log('터치 시작', e.touches[0]);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.touches[0].clientX;
      const distance = touchEndX - touchStartX;
      console.log('터치 이동, 거리:', distance, '터치 이벤트:', e.touches[0]);

      if (distance > 50) {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
      } else if (distance < -50) {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }

      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    console.log('터치 종료');
    setTouchStartX(null);
  };



  const handleArrowRightClick = () => {
    const nextImage = (currentImage + 1) % images.length;
    setCurrentImage(nextImage);
    setCurrentDot(nextImage);
  };

  const handleArrowLeftClick = () => {
    const prevImage = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevImage);
    setCurrentDot(prevImage);
  };

  return (
    <S.Wrapper>
      <Header />
      
      <S.ImageSlide
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <S.SlideImage
            key={index}
            src={image}
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
              filter: isMouseOver ? 'brightness(0.9)' : 'none',
            }}
          />
          
        ))}

      <S.Arrow_R src='/img/arrow_r.png' onClick={handleArrowRightClick} />
      <S.Arrow_L src='/img/arrow_l.png' onClick={handleArrowLeftClick} />
      <S.DotContainer>
        {images.map((_, index) => (
          <S.Dot key={index} active={index === currentDot} />
        ))}
      </S.DotContainer>

      
        <S.SlideBtn src='/img/slide_btn.png' />

      </S.ImageSlide>

      {/* 유튜브 영상 출력 */}
      <S.Section1>
        <S.Container>
          <YouTube videoId={videoId}
           opts={{ width: '600px', height: '300px', border: '3px solid #000' }} />

           <S.Title>연합뉴스 TV 인터뷰
              <S.Text1><br/>[스타트업 발언대]"창업허브 입주 후 기업가치 150배 뛰었죠"</S.Text1>
              <S.Text2><br/> | 소프트 x-선 관절염 치료기 개발 이강파 유머스트알엔디 대표 
                      <br />관절염은 관절을 감싸는 연골에 문제가 생겨 발병한다.
                      <br />나이가 들수록 발병 우려가 커지는 대표적인 퇴행성 질환이다.
                      <br />세계 인구의 10%~15%가 이 병으로 고통받는 것으로 추산된다.
              </S.Text2>
              <S.MoreBtn src='/img/more_btn.png' onClick={handleMoreBtnClick} />{/* 홈페이지 안 보도자료로 이동 */}
           </S.Title>

        </S.Container>
      </S.Section1>


    {/* Section2 */}
      <S.Section2>
        <S.Icontainer>
          <S.IconContainer>
              <S.Tech src='/img/Tech.png'/>
              <S.TectTitle>핵심기술</S.TectTitle>
          </S.IconContainer>

          <S.IconContainer>
              <S.Thesis src='/img/Thesis.png'/>
              <S.ThesisTitle>논문</S.ThesisTitle>
          </S.IconContainer>

          <S.IconContainer>
              <S.Authentication src='/img/Authentication.png'/>
              <S.AuthenticationTitle>인증현황</S.AuthenticationTitle>
          </S.IconContainer>

          <S.IconContainer>
              <S.Research src='/img/service.png'/>
              <S.ResearchTitle>연구용역서비스</S.ResearchTitle>
          </S.IconContainer>

          <S.IconContainer>
              <S.Notice src='/img/notice.png'/>
              <S.NoticeTitle>공지사항</S.NoticeTitle>
          </S.IconContainer>

          <S.IconContainer>
          <Link to="/Map/Map">
              <S.Map src='/img/map.png'/>
              
                <S.MapTitle>오시는 길</S.MapTitle>
              </Link>
          </S.IconContainer>
        </S.Icontainer>
      </S.Section2>

 
      <S.Section3>
        <S.Section3Left>
            <S.LeftContent>
              <S.Medical src='/img/Medical.png'/>
              <S.Cosmetic src='/img/Cosmetic.png'/>

              
            </S.LeftContent>
            <S.TextContainer>
              <S.Text>RECENT NEWS</S.Text>


            {/* 보도자료 */}
            <S.PressContainer>
              <S.PressLabel>
                <Link to="/List/Press">[보도자료]</Link>
              </S.PressLabel>
              {loading ? (
                <div>Loading...</div>
              ) : (
                press && press.length > 0 ? (
                  press.map((item, index) => (
                    <S.Press key={index}>
                      <div style={{ fontWeight:'700', fontSize: '12px', color: '#333' }}>{item.title.slice(0, 15)}</div>                      
                      <div style={{ fontSize: '11px', color: '#555', lineHeight: '2' }}>{item.content}</div>
                      <div style={{ fontSize: '12px', color: '#777',position: 'absolute',right : '10px'}}>{item.createdAt.split('T')[0]}</div>                   

                    </S.Press>
                  ))
                ) : (
                  <div>No press data available</div>
                )
              )}
            </S.PressContainer>

            {/* 행사정보 */}
            <S.EventContainer>
              <S.PressLabel>
                <Link to="/List/Event">[행사정보]</Link>
              </S.PressLabel>
              {loading ? (
                <div>Loading...</div>
              ) : (
                events && events.length > 0 ? (
                  events.map((item, index) => (
                    <S.Event key={index}>
                      <div style={{ fontWeight:'700', fontSize: '12px', color: '#333' }}>{item.title.slice(0, 15)}</div>                      
                      <div style={{ fontSize: '11px', color: '#555', lineHeight: '2' }}>{item.content}</div>
                      <div style={{ fontSize: '12px', color: '#777',position: 'absolute',right : '10px'}}>{item.createdAt.split('T')[0]}</div>                   
                    </S.Event>
                  ))
                ) : (
                  <div>No event data available</div>
                )
              )}
            </S.EventContainer>
            </S.TextContainer>

        </S.Section3Left>

        <S.Section3Right>
            <S.RightContent>
              <S.Album src='/img/Album.png'/>
            </S.RightContent>
        </S.Section3Right>
      </S.Section3>

      <Footer />
    </S.Wrapper>
  );
}
