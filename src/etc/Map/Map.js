import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Map.styled';

const Map = () => {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124';
      script.onload = () => {
        if (window.kakao) {
          mapScript();
        } else {
          console.error('카카오 맵 API 스크립트 로드됨, 그러나 window.kakao가 정의되지 않았습니다.');
        }
      };
      script.onerror = () => {
        console.error('카카오 맵 API 스크립트 로드 중 오류가 발생했습니다.');
      };
      document.head.appendChild(script);
    };

    const mapScript = () => {
      const container = document.getElementById('map');
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(37.6544068, 127.0497957),
          level: 5,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerdata = [
          { lat: 37.6544068, lng: 127.0497957, title: '(주)유머스트알엔디' },
        ];

        markerdata.forEach((el) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(el.lat, el.lng),
            title: el.title,
          });

          // (선택 사항) 마커에 이벤트 리스너 추가
          window.kakao.maps.event.addListener(marker, 'click', () => {
            // 마커 클릭 시 수행할 작업 추가
          });
        });
      } else {
        console.error('맵 컨테이너를 찾을 수 없습니다.');
      }
    };

    loadMapScript();
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/test.png" />
      <S.TitleImg src='/img/map_te.png'/>
      <S.MainComponent src="/img/map_k.png" />
      <S.MapContainer id="map" style={{ width: '800px', height: '350px', margin: '0 auto', marginBottom: '30px' }} />
      <Footer />
    </S.Wrapper>
  );
};

export default Map;
