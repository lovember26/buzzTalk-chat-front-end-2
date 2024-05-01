import { useChat } from "contexts/ChatContext";
import { AvatarBlock } from "../FriendInfo/FriendInfo.styled";
import { ReactComponent as MuteIcon } from "../../../images/friend-info-mute.svg";
import { ReactComponent as MoreIcon } from "../../../images/friend-info-more.svg";
import { ReactComponent as LeaveIcon } from "../../../images/leave-icon.svg";
import { ReactComponent as MessageIcon } from "../../../images/message-icon.svg";
import { ButtonList, CancelButton, ChatNameInput, DoneButton, EditButton, MemberListItem, MembersCount, MembersList, Wrapper } from "./GroupChatInfo.styled";
import { useState } from "react";
import { ReactComponent as Camera } from "../../../images/big-camera.svg";
import { useDispatch } from "react-redux";

import { updatePublicChatThunk } from "redux/chat/chatThunk";
import EditPublicChatPhotoPopUp from "./EditPublicChatPhotoPopUp/EditPublicChatPhotoPopUp";


export default function GroupChatInfo() {
  const [isEditOpen, setIsEditOpen]=useState(false);
  const [isPopUpOpen, setIsPopUpOpen]=useState(false);
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const togglePopUp=()=>{
    setIsPopUpOpen((prevState) => !prevState);
 
  }
  const toggleIsEdit=()=>{
    setIsEditOpen(prevState => !prevState)
  }
    const { 
        publicChatName,
    publicChatImage, publicChatParticipants, publicChatId } = useChat();
    const [title, setTitle]=useState(publicChatName ? publicChatName : "Chat name");
    const [image, setImage]=useState(publicChatImage);
    // const {
    //   register,
    //   watch,
    //   handleSubmit,
    //   formState: { errors, isValid },
    // } = useForm({
    //   mode: "onChange",
    //   resolver: yupResolver(inputEditPublicChatSchema),
    //   defaultValues: {
    //     title,
        
    //   },
    // });
    const handleChange=(e)=>{
      setTitle(e.target.value);
     
    }
    const onSubmit = async () => {
     
      try {
        const formData = new FormData();
    
        formData.append("chat_id", publicChatId);
        formData.append("title", title);
        formData.append("image", file);
    
        await dispatch(updatePublicChatThunk(formData));
        setIsEditOpen(false);
       
      } catch (error) {
        console.log("error updateUserInfo", error);
      }
    };
    
    // const usernameError = selectInputNotification(errors["name"]);
    // const aboutError = selectInputNotification(errors["aboutMe"]);

    return (
    <Wrapper>
     
     <AvatarBlock style={{position:"relative",}}>
     {!isEditOpen && <EditButton type="button" onClick={toggleIsEdit}>Edit</EditButton>}
      {isEditOpen && <CancelButton type="button" onClick={toggleIsEdit}>Cancel</CancelButton>}
      {isEditOpen && <DoneButton onClick={onSubmit}>Done</DoneButton>}
         {isEditOpen ? 
        <div style={{position:"relative",}}> <button type="button" onClick={togglePopUp}>
    <img src={image} alt="avatar" />
     <Camera style={{position:"absolute",top:"25px",left:"17px"}} /> 
     </button>  {isPopUpOpen && <EditPublicChatPhotoPopUp  setIsPopUpOpen={setIsPopUpOpen} setFile={setFile} setImage={setImage} />}</div> :  
      <img src={publicChatImage} alt="avatar"/>} 
     
    {isEditOpen ? <ChatNameInput type="text" value={title} onChange={handleChange}/> : <p>{title}</p>}
  
  </AvatarBlock>
  <ButtonList>

  <li>
                <button type="button">
                  <MuteIcon />
                  <p>mute</p>
                </button>
              </li> 
              <li>
                <button type="button">
                  <LeaveIcon />
                  <p>leave</p>
                </button>
              </li>  <li>
                <button type="button">
                  <MoreIcon />
                  <p>more</p>
                </button>
              </li></ButtonList>
              <MembersCount>Chat members <span>{publicChatParticipants.length}</span></MembersCount>
<MembersList>{
    publicChatParticipants.map(participant=>{
        return <MemberListItem key={participant.username}>
          <div   style={{
        display: "flex",
        alignItems:"center",
        gap:"16px",
        
      }}> <img src={participant.image} alt="avatar"></img>
            <div ><p>@{participant.username}</p>
            <p style={{
                color: "rgba(255, 255, 255, 0.50)",

                fontSize: "10px",
                marginTop:"5px",
            }}>offline</p>
            </div>
            </div>
           <div  style={{
        display: "flex",
        gap:"13px",
       
        
      }}><button type="button"><MessageIcon/></button>
           <button type="button"> <MoreIcon/></button></div> 
            </MemberListItem>
    })}
   </MembersList>
  </Wrapper>
    )
}