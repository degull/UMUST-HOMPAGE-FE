import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const WrapImage = styled.img`
  width: 100%;
  height: 250px;
`;

export const MainComponent = styled.img`
  padding: 50px;
  width: 650px;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 1;
  margin-top: 80px;
`;

export const MapContainer = styled.div`
  position: relative;
  z-index: 0; 
`;

export const TitleImg = styled.img`
  width: 90px;
  margin: 30px 70px;
  display: flex;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2; 
  left: 23%;
`;