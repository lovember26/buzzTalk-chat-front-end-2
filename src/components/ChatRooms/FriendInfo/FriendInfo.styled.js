import styled from "@emotion/styled";
import { theme } from "theme";

export const Wrapper = styled.div`
  width: 379px;
  display: flex;
  padding-top: 39px;
  padding-right: 16px;
  background-color: ${theme.colors.BTN_COLOR_HOVER};
`;
export const ActionButton = styled.button``;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 343px;
`;
export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  img {
    width: 91px;
    height: 91px;
    background-color: black;
    border-radius: 50%;
  }
  p {
    color: ${theme.colors.white[100]};
    font-size: 15px;
  }
`;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .list-item {
    background-color: ${theme.colors.BTN_COLOR};
    border-radius: 10px;
    width: 343px;
    height: 62px;
  }
  .about-me {
    padding: 15px 26px;
    p{
        color: ${theme.colors.white[100]};
    font-size: 15px;
    }
    .about-me-title {
      color: rgba(255, 255, 255, 0.6);
      font-size;13px;
    }
  }
  .copy-share-item{
    height:62px;
     padding: 15px 26px;
     display:flex;
     flex-direction:column;
    gap:3px;
     li button{
      width:291px;
      height:16px;
      font-size: 15px;
     color:${theme.colors.white[100]};
      display:flex;
      justify-content:space-between;
     }
     
  }
    .clear-item{
    padding: 15px 26px;
   display:flex;
   align-items:center;
   button{ 
     width:291px;
    display:flex;
      justify-content:space-between;
  
    p{color:#69A2FF;}
  }
  }
   .block-item{
    padding: 15px 26px;
   display:flex;
   align-items:center;
   button{ 
     width:291px;
    display:flex;
      justify-content:space-between;
  
    p{color:#EA4335;}
  }
  }

`;

export const ItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 23px;
  font-size: 8px;
  li button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
  p {
    color: ${theme.colors.white[100]};
  }
`;
