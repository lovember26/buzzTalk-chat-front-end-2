import styled from "@emotion/styled";
import { theme } from "theme";

export const NotificationWrapper=styled.div`
position:absolute;
bottom:50px;
right:30px;
z-index:999;
width:302px;
height:68px;
padding:12px 18px;
border-radius:10px;
display:flex;
gap:10px;
background-color: #9e7f90;
font-size:10px;
color:${theme.colors.white[100]};
img{
    width:40px;
    height:38px;
    border-radius:50%;
   
}
`

export const NowWrap=styled.p`
position:absolute;
right:18px;
opacity:0.5;
color:#f4f4f4;`