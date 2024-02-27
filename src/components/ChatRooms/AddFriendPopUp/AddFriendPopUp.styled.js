import styled from "@emotion/styled";
import { theme } from "theme";

export const PopUpWrapper=styled.div`
position:absolute;
top:55%;
right:40px;
padding:10px 13px;
ul{
display:flex;
flex-direction:column;
gap:7px;

}
button{
    display:flex;
    gap:4px;
    align-items:center;
    justify-content:center;
    font-size:10px;
   &.white-button{color:white;}
   &.red-button{color: #ea4335;}
   &.gray-button{
    color: #bbb8b8;
   }
}
width:101px;
height:50px;
box-shadow: 0 1px 12px 0 rgba(0,0,0,.31);
border-radius:10px;
font-size: 10px;
background-color:${theme.colors.BTN_COLOR_HOVER};
`