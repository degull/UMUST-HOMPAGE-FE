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
   height: 150%;
`;

export const Title = styled.div`
   font-size: 22px;
   font-weight: 900;
   padding: 30px 30px 15px 30px;
`;

export const Memo = styled.div`
   font-size: 11px;
   padding: 0 30px 30px 30px;
`;

export const Border = styled.div`
    border: 3px solid #999;
    width: 1300px;
    margin-top: 20px;
`;



export const PostList = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
`;

export const PostItem = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 10px;
   background: #ffffff;
   border: 1px solid #dddddd;
   margin-bottom: 10px;
`;


export const PostAuthor = styled.div`
   font-size: 14px;
   margin-right: 10px;
`;

export const PostListWrapper = styled.div`
   margin-top: 20px;
`;

export const PostListHeader = styled.div`
   display: flex;
/*    background: #D9D9D9;
 */   padding: 10px;
   border: 1px solid #dddddd;
   margin-right: 30px;
   width: 1200px;
`;

export const PostListLabel = styled.div`
   font-size: 14px;
   font-weight: bold;
   flex: 1;
`;


export const PostNumber = styled.div`
   font-size: 14px;
   font-weight: bold;
   flex: 1;
`;

export const PostTitle = styled.div`
   font-size: 14px;
   flex-grow: 2;
   margin-left: 10px;
`;

export const PostDate = styled.div`
   font-size: 14px;
   flex: 1;
`;
export const PostViews = styled.div`
   font-size: 14px;
   flex: 1;
`;


export const NoticeDetailContainer = styled.div`

   `;


export const DetailContainer = styled.div`
   height: auto;
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
  font-size: 12px;
  text-align: center;
  display: flex;
  margin-right: 190px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin-right: 150px;
  justify-content: center;
  margin-top: 20px;
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