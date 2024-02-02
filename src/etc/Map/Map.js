import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Map.styled';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124';
    document.head.appendChild(script);

    script.onload = () => {
      // kakao 객체가 로드된 후 mapscript 호출
      if (window.kakao) {
        mapscript();
      }
    };
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.6544068, 127.0497957),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    
    const markerdata = [
      { lat: 37.6544068, lng: 127.0497957, title: '(주)유머스트알엔디' },
    ];

    markerdata.forEach((el) => {
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });
    });
  };

  return (
    <S.Wrapper>
      <Header />
      <S.WrapImage src="/img/test.png" />
      <S.TitleImg src='/img/map_te.png'/>
      <S.MainComponent src="/img/map_k.png" />
      <S.MapContainer id="map" style={{ width: "800px", height: "350px", margin:"0 auto", marginBottom:"30px"}} />
      <Footer />
    </S.Wrapper>
  );
};

export default Map;
