import styled from "@emotion/styled";

export const UserProfileWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  
  .showUserCard {
    cursor: pointer;
    border-top: 1px solid rgba(255, 255, 255, 0.51);

    padding-top: 13px;
  }
  img {
    border-radius: 50%;
    width: 37px;
    height: 37px;
  }
`;
export const UserCard = styled.div`
position: absolute;
top:0;
  left:0;
  width:375px;
  padding:0 16px 56px 16px;
  display: flex;
  flex-direction: column;
  
  background: ${({ theme }) => theme.colors.white[100]};
  z-index:99;
  color: ${({ theme }) => theme.colors.black[100]};
  font-size: 14px;
  .userInfo {
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:56px;
    img{
      width: 84px;
height: 84px;
margin-bottom:32px;
    }

    .userName{
      font-size: 20px;
font-weight: 600;
margin-bottom:8px;
    }
  }
  .container{
    display:flex;
    flex-direction:column;
    align-items:center;
    .nameAndStatusWrapper {

      display: flex;
      gap: 5px;
      align-items: center;
      justify-content:center;
      margin-bottom: 8px;
    }
  }
  .text{
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size:14px;
  }
  .chat-link{
    color: ${({ theme }) => theme.colors.blue[100]};
    font-size:14px;
  }
  .editBtn {
    position:absolute;
    top:46px;
    right:18px;
  }
  .edit{
    display:none;
  }
  ul{
    margin-top:27px;
    li{
      display: flex;
      align-items: center;
     button{
      width:24px;
      height:24px;
     }
     
      .border-bottom{
        width:311px;
        display:flex;
        padding-bottom:4px;
       align-items:center;
      justify-content:space-between;
        border-bottom: 1px solid #B5B5B5;
        
      }
    }
  }
  .notification-item, .language-item{
    margin-bottom:14px;
    svg{
    fill:#B5B5B5;
    margin-right:8px;}
    button svg{
      stroke:white;
    }
p{
  font-weight: 400;

}
  }
  .security-item{
    margin-bottom:14px;
    svg{
    fill:#B5B5B5;
  stroke:#B5B5B5;
margin-right:8px;}

  button svg{
    stroke:white;
   
  }
  p{
    font-weight:400;
  }
  }
  
  .set-status-item{
    margin-bottom:46px;
    display:flex;
    justify-content:space-between;
    border-radius: 8px;
background: #F4F4F4;
padding:8px 3px 8px 6px;
font-weight:500;

    svg{
      stroke:#8B8B8B;
      width:15px;
      height:18px;
      margin-right:10px;
    }
    button{
      width:24px;
      height:24px;
    }
    button svg{
      fill:#8B8B8B;
      width:24px;
      height:24px;
      stroke:white;
    }
    .userStatus{
      display:flex;
      
      align-items:center;
      margin-left:136px;
      svg{
        width:7px;
        height:7px;
        stroke:white;
      }
      
    }
  }
  .editOptions{
    display:flex;
    flex-direction:column;
  }
  .deleteBtn {
    align-self: start;
    margin-top: 40px;
    font-weight: 400;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
  .logOutBtn {
    align-self: start;
    color: ${({ theme }) => theme.colors.red[300]};
  }
  .edit-container{
    display:flex;
    flex-direction:column;
    margin:0 -16px 0 -16px;
    height:100vh;
    padding:46px 16px;
    background: #EAE8EB;
    .hideUser{
      display:none;
    }
    .header-wrapper{
      display:none;
    }
  }
  .navigation{
    display:flex;
    justify-content:space-between;
    font-size: 16px;
    
  }
  .button-back{
    display:flex;
    align-items:center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  .button-done{
    font-weight: 500;
    color:#69A2FF;
    font-weight: 600;
  }
  .edit-avatar-container{
    align-self:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:26px;
    margin-top:-10px;
    img{
      width: 84.119px;
height: 78px;
    }
  }
  .button-new-photo{
    color:#69A2FF;
    font-size: 16px;
    font-weight: 500;
  }
  .editInputs{
    margin-top:25px;
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:start;
    div{
      border-bottom:none;
      display:flex;
      flex-direction:column;
      align-items:start;
      gap:8px;
      input{
        width:343px;
        padding:12px 8px 14px 8px;
        border-radius: 10px;
        border:none;
background:  ${({ theme }) => theme.colors.white[100]};
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
font-size: 14px;
      }
      textarea{
        width:343px;
        padding:6px 8px;
        font-size: 14px;
        border-radius: 10px;
        border:none;
background:  ${({ theme }) => theme.colors.white[100]};
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
min-height:43px;
resize: none;
&:focus{
  border:none;
  outline:none;
}
      }
    p{
      font-size: 10px;
      margin:-6px 0 0 0;
      color: ${({ theme }) => theme.colors.gray[200]};
    }  
    }
  }


@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
bottom:0;
top:auto;
  width: 336px;
  // height:300px;
  padding: 3px 15px 14px 15px;
  
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.28);

  background: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 12px;
  .header-wrapper{
    display:flex;
    .userInfo{
      margin-top:5px;
      .userAvatar{
        width:45px;
        border-top: 1px solid rgba(255, 255, 255, 0.51);
      img{
        margin-top:24px;
        margin-left:4px;
        margin-bottom:0;
        width:37px;
        height:37px;
      }}
    }
    .container{
      align-items:flex-start;
      padding-left:10px;
    .nameAndStatusWrapper{
      margin-top:24px;
      margin-left:6px;
      margin-bottom:7px;
      gap:16px;
      font-size: 18px;
    }
    .text,.chat-link{
      font-size:10px;
    }
  }
  .edit-small{
    display:none;
  }
  .edit{
    display:block;
  }
}
.editOptions{
  ul{
  margin-top:14px;
 
  
li {
 
  .border-bottom{
    border:none;
  }
  margin:0;
  padding:0;

  border-radius:0;
  border-bottom: 1px solid #B5B5B5;
  background: ${({ theme }) => theme.colors.MAIN_COLOR};
  
}
.notification-item, .language-item{
  svg{fill:#fff;}
  button svg{
    fill:#fff;
    stroke:transparent;
   }
}
.security-item{
  svg{
  fill:#fff;
stroke:#fff;
}
button svg{
  fill:#fff;
  stroke:transparent;
 }
}
.set-status-item{
  padding-left:3px;
  svg{
  stroke:#fff;
  }
 button svg{
  fill:#fff;
  stroke:transparent;
 }
 div svg{
  stroke:transparent;
 }
}
}
}
.deleteBtn{
  margin:14px 0 14px 0;
}

.edit-container{
  height:291px;
  .navigation{
    display:none;
  }
  top:0;
  background: ${({ theme }) => theme.colors.MAIN_COLOR};
  width:336px;

  padding:0 15px 14px 15px;
  
  .hideUser{
    display:block;
  }
.edit-avatar-container{
  display:none;
}
 .header-wrapper{
  display:flex;
  align-items:flex-start;
  .userAvatar img{
    margin-top:28px;
  }
  .image-container {
    position: relative;
   svg{
    position: absolute;
    top: 10px;
    left: 12px;
   z-index:99;
   }
  }
  
 
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    margin-left:4px;
    border-radius: 50%;
    width: 37px;
    height: 37px;
    background-color: rgba(0, 0, 0, 0.5); 
  }
  .nameAndStatusWrapper{
    gap:11px;
  }
  .text,.chat-link{
    margin-left:6px;
  }
  .button-done{
position:absolute;
top:46px;
right:19px;
font-size: 12px;
font-style: normal;
font-weight: 500;
  }

 }
 .editInputs {input{
  width:306px;
  height:29px;
  border-radius: 10px;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
}
textarea{
  width:306px;
  height:55px;
  border-radius: 10px;
background: rgba(255, 255, 255, 0.30);
box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
}
p{
  font-size:8px;
}
}
}
}
`;
