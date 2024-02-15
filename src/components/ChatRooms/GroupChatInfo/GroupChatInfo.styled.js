import styled from "@emotion/styled";
import { theme } from "theme";

export const Wrapper=styled.div`
display:flex;
flex-direction:column;
gap:22px;
width:343px;
`
export const ButtonList=styled.ul`
display:flex;
gap:12px;
justify-content:center;
button{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    padding:12px;
    width: 67px;
height: 61px;
border-radius: 10px;
background:  ${theme.colors.BTN_COLOR};
color:${theme.colors.white[100]};
font-size: 8px;
}
`
export const MembersCount=styled.p`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 5px;
height:22px;
color:${theme.colors.MAIN_COLOR};
font-size: 14px;
font-weight: 600;
opacity: 0.5;
background: #CBCBCB;
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);`

export const MembersList=styled.ul`
max-height: calc(100vh - 415px);
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

export const MemberListItem=styled.li`
display:flex;
align-items:center;
justify-content:space-between;
color:${theme.colors.white[100]};
margin-bottom:11px;
img{
    width:48px;
    border-radius:50%;
}
p{
    font-size: 12px;
}`
