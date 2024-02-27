import styled from "@emotion/styled";

export const RequestWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:4px;
height:53px;
font-size:12px;
font-weight:600;
box-shadow: 0 1px 7px 0 rgba(0,0,0,.2);
margin:0 -15px;
`
export const ButtonsWrapp=styled.div`
display:flex;
gap:18px;
button{
    display:flex;
    align-items: center;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
  
    border-radius:5px;
    color:white;
    padding: 6px 39px;
}
    .add-button{
        background-color:#f39f5a;
        &:hover{
            opacity:0.9;
         }
    
}
.cancel-button{
        background-color:#ae445a;;
    &:hover{
       opacity:0.9;
    }
}
}
`