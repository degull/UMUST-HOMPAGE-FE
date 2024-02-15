import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width:100%;
   background:#fff;
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
   font-size: 22px;
   font-weight: 900;
   padding: 50px 30px 15px 8px;
`;

export const Memo = styled.div`
   font-size: 11px;
   padding: 0 30px 10px 8px;
`;

export const Border = styled.div`
    border: 3px solid #999;
    width: 1300px;
    margin-top: 20px;
`;



export const PostList = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 25px;
`;

export const PostItem = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 10px;
   background: #ffffff;
   border-bottom: 1px solid #dddddd;
   margin-bottom: 10px;
   width: 1300px;
   &:hover{
      background: #f9f9f9;
   }
`;

export const PostTitleContainer = styled.div`
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 380px; 
   cursor: pointer;
   text-align: center;
   font-size: 12px;
   margin-left:17px;
`;

export const PostAuthor = styled.div`
   font-size: 11px;
   margin-right: 110px;
   text-align: center;
`;

export const PostListWrapper = styled.div`
   margin-top: 20px;
`;

export const PostListHeader = styled.div`
   display: flex;
   padding: 10px;
   border: 1px solid #dddddd;
   margin-right: 30px;
   width: 1300px;
`;

export const PostListLabel = styled.div`
   font-size: 13px;
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   &:nth-child(1){
   }
   &:nth-child(2){
      margin-left: 320px;
   }
   &:nth-child(3){
      margin-left: 330px;
   }
   &:nth-child(4){
      margin-left: 250px;

   }
   &:nth-child(5){
      margin-left: 220px;

   }
`;


export const PostNumber = styled.div`
   font-size: 11px;
   font-weight: bold;
   text-align: center;
`;

export const PostTitle = styled.div`
   font-size: 11px;
   margin-left: 10px;
`;

export const PostDate = styled.div`
   font-size: 11px;
   margin-right: 100px;

`;
export const PostViews = styled.div`
   font-size: 14px;
   flex: 1;
`;


export const NoticeDetailContainer = styled.div`

   `;


export const DetailContainer = styled.div`
   height: 100%;
`;

export const NoticeTitle = styled.div`
    display: block;
    font-size: 28px;
    font-weight: 900;
    margin-top: 18px;
    line-height: 42px;
    text-align: center;
    margin-bottom: 60px;
`;

export const Content = styled.div`
   font-size: 15px;
   line-height: 28px;
`;

export const NoticeImages = styled.div`
   margin: 0 auto;

   img {
      width: 150px;
      
      
   }
`;

export const NoticeDetails = styled.div`
   font-size: 11px;
   text-align: end;
   color: #777;
   margin-bottom: 10px;
`;


export const  Buttons= styled.div``
export const ConfirmationPopup = styled.div``
export const ConfirmationPopupContent = styled.div``;

export const ConfirmationButtons = styled.div``
export const NoticeFiles = styled.div``

export const ViewCount = styled.div`
  font-size: 11px;
  margin-right: 15px;
  
 
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin-right: 150px;
  justify-content: center;
  margin-top: 20px;
  margin: 30px 30px;
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

export const NoticeContent = styled.div`
  font-size: 10px;
  color: #555;
  padding: 30px 20px;
  text-align: center;
  margin-left: -20px;
  
`;



export const NoticeId = styled.div`
  margin-right: 30px;
  font-size: 50px;
  text-align: center;
  display: flex;
`;

export const Date = styled.div`
  margin-right: 175px;
  text-align: center;
  display: flex;
  font-size: 11px;

`;

export const View = styled.div`
  margin-left: -150px;
  text-align: center;
  display: flex;
`;

export const ItemContent = styled.div`
  text-align: center;
  font-size: 12px;
  text-align: left;
  margin-left: 200px;
`;

export const Create = styled.div`
  margin-right: 185px;
  text-align: center;
  display: flex;
  font-size: 12px;

`;
export const NoticeItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 8px;
  align-items: center;
  margin-bottom: 10px;
  width: 1200px;

  &:hover {
    background-color: #f9f9f9;
  }
`;