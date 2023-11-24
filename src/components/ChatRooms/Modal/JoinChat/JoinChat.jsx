import React from "react";
import {
  ButtonsWrapper,
  Button,
  ButtonBack,
  Text,
  TextInfo,
} from "./JoinChat.styled";

const JoinChat = ({ handleNavigate }) => {
  return (
    <>
      <Text>Join a chat room</Text>
      <TextInfo>Enter an invite link to join an existing chat room</TextInfo>

      <ButtonsWrapper>
        <ButtonBack
          onClick={() => {
            handleNavigate("initial");
          }}
        >
          Back
        </ButtonBack>
        <Button>Join the chat room</Button>
      </ButtonsWrapper>
    </>
  );
};

export default JoinChat;
