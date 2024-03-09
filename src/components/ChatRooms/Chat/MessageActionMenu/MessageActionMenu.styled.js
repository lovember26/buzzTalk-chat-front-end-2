import styled from "@emotion/styled";
import { theme } from "theme";

export const Wrapper=styled.div`
width:77px;
height:71px;
border-radius:10px;
padding: 10px 16px;
font-size: 8px;
line-height: normal;
background:${theme.colors.BTN_COLOR_HOVER};
li{
   display:flex;
   flex-direction:column;
   gap:3px;
   padding-top:3px;
   align-items:flex-start;
}
button{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6px;
}
span{
    color:#fff;
    

&.delete-message-text{
    color: #ea4335};
}}
`