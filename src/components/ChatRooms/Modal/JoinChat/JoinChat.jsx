import React from "react";

import { ModalButtonBack } from "components/common/ModalButtonBack/ModalButtonBack";
import { ModalButtonSendForm } from "components/common/ModalButtonSendForm/ModalButtonSendForm";

import { Title, TextDescription, ButtonsWrapper } from "./JoinChat.styled";

const JoinChat = ({ handleNavigate }) => {
  return (
    <>
      <Title>Join a chat room</Title>
      <TextDescription>
        Enter an invite link to join an existing chat room
      </TextDescription>

      <ButtonsWrapper>
        <ModalButtonBack
          text={"Back"}
          navigate={handleNavigate}
          to={"initial"}
        />
        <ModalButtonSendForm text={"Join the chat room"} />
      </ButtonsWrapper>
    </>
  );
};

export default JoinChat;
