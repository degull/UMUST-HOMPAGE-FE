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
   height: 100%;
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



export const Thumbnail = styled.div`
  img {
    width: 200px;
    height: 150px;
    border-radius: 4px;

  }
`;

export const PostTitle = styled.div`
   font-size: 14px;
   font-weight: bold;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const AlbumItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  width: 380px;
  height: 250px;
`;


export const AlbumTitle = styled.h3`
  font-size: 14px;
  font-weight: 800;
  margin: 14px 0;
`;

export const CreateDate = styled.p`
  font-size: 12px;
  color: #777;
  margin-bottom: 13px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

export const PaginationItem = styled.div`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ddd' : 'transparent')};
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;