import { useChat } from "contexts/ChatContext";
import { AvatarBlock } from "../FriendInfo/FriendInfo.styled";
import { ReactComponent as MuteIcon } from "../../../images/friend-info-mute.svg";
import { ReactComponent as MoreIcon } from "../../../images/friend-info-more.svg";
import { ReactComponent as LeaveIcon } from "../../../images/leave-icon.svg";
import { ReactComponent as MessageIcon } from "../../../images/message-icon.svg";
import { ButtonList, MemberListItem, MembersCount, MembersList, Wrapper } from "./GroupChatInfo.styled";

export default function GroupChatInfo() {
    const { 
        publicChatName,
    publicChatImage, publicChatParticipants } = useChat();

    return (
    <Wrapper>  <AvatarBlock>
    <img src={publicChatImage} alt="avatar"></img>
    <p>{publicChatName? publicChatName : "Chat name"}</p>
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