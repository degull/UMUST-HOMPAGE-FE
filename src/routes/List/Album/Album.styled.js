import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width: 100%;
   background: #fff;
`;

export const WrapImage = styled.img`
   width: 100%;
   height: 230px;
`;

export const MenuTab = styled.div`
   margin: 0 auto;
   width: 100%;
   height: 50px;
   background: #9c9;
`;

export const MainContainer = styled.div`
   max-width: 1280px;
   margin: 0 auto;
   width: 100%;
   height: 500px;
`;

export const Title = styled.div`
   font-size: 17px;
   font-weight: bold;
   padding: 30px 30px 15px 30px;
`;

export const Memo = styled.div`
   font-size: 14px;
   padding: 0 30px 30px 30px;
`;

export const Line = styled.div`
   border: 2px solid #033788;
`;

export const AlbumWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 20px;
   padding: 20px;
`;

export const PostItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   background: #f5f5f5;
   border: 1px solid #ddd;
   padding: 10px;
`;

export const Thumbnail = styled.img`
   width: 100%;
   height: auto;
   max-height: 150px; /* Set a maximum height for the thumbnail */
   margin-bottom: 10px;
`;

export const PostTitle = styled.div`
   font-size: 14px;
   font-weight: bold;
`;

