import styled from "@emotion/styled";
import { theme } from "theme";

export const AllFriendsListTitle=styled.p`
height:30px;
padding:6px;
font-size: 14px;
color:${theme.colors.white[100]};
background:${theme.colors.MAIN_COLOR};
opacity:0.5;
margin-bottom:16px;
`
export const FriendsList=styled.ul`
max-height: calc(100vh - 200px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
    border-radius: 8px;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.1) inset; */
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border: 3px solid transparent;
    border-radius: 8px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: purple;
  }`
export const ItemWrapper=styled.li`
display:flex;
justify-content:space-between;
align-items:center;
padding:4px 8px;
color:${theme.colors.gray[600]};
font-size: 12px;
border-bottom: 1px solid  #696969;
img{
    width:36px;
    height:36px;
    background:purple;
    border-radius:50%;
}`

