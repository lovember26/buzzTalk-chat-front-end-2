import { useChat } from "contexts/ChatContext";
import { ButtonsWrapp, RequestWrapper } from "./AddFriendRequest.styled";
import { useState } from "react";
import { addFriend } from "services/friendsApi";

export default function AddFriendRequest() {
    const [isOpen, setIsOpen]=useState(true);

    const { privateChatName, isFriend,isPrivateChat,setIsFriend } = useChat();

    const handleCancel=()=>{
        setIsOpen(false);
    }

    const handleAddFriend=()=>{
      
    addFriend(privateChatName);
      setIsFriend(true);
    setIsOpen(false);
    }
    return (
      !isFriend && isOpen && isPrivateChat && (<RequestWrapper>
      <p>Do you want to add @{privateChatName} to your friends?</p>
      <ButtonsWrapp>
        <button className="add-button" type="button" onClick={handleAddFriend}>add</button>
        <button className="cancel-button" type="button" onClick={handleCancel}>cancel</button>
      </ButtonsWrapp>
      </RequestWrapper>)
    );
  }