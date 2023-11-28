import styled from "@emotion/styled";

export const PopUpContainer=styled.div`
position:absolute;
top:90px;
left:220px;
width: 121px;
height: 75px;
padding:7px 13px;
border-radius: 10px;
background: #7E5D88;
font-size: 10px;
font-style: normal;
box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.31);
z-index:999;
ul{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:4px;
  li button{
    display:flex;
    gap:3px;
    align-items:center;
    width:100%;
    height:16px;
    
   }
   li input{
position:absolute;
opacity:0;
   }
   .add-photo-button{
    color:#fff;
    font-weight: 500;
    font-style: normal;
    
   }
   .remove-photo-button{
    color: #FF3D3D;
   }
}
@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    top:68px;
    left:40px;  
}
`