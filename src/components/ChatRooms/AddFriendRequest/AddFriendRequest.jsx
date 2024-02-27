import { useChat } from "contexts/ChatContext";
import { ButtonsWrapp, RequestWrapper } from "./AddFriendRequest.styled";
import { useState } from "react";

export default function AddFriendRequest() {
    const [isOpen, setIsOpen]=useState(true);

    const { privateChatName, isFriend } = useChat();

    const handleCancel=()=>{
        setIsOpen(false);
    }
    return (
      !isFriend && isOpen && (<RequestWrapper>
      <p>Do you want to add @{privateChatName} to your friends?</p>
      <ButtonsWrapp>
        <button className="add-button" type="button">add</button>
        <button className="cancel-button" type="button" onClick={handleCancel}>cancel</button>
      </ButtonsWrapp>
      </RequestWrapper>)
    );
  }