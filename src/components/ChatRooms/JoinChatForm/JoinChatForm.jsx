import React from "react";
import {
  FormWrapper,
  ButtonWrapper,
  ButtonsWrapper,
  Button,
  Line,
  ButtonBack,
  Text,
  TextInfo,
} from "./JoinChatForm.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

const JoinChatForm = ({
  createOwnChat,
  setCreateOwnChat,
  joinChat,
  setJoinChat,
  kindChatChoice,
  setKindChatChoice,
}) => {
  return (
    <>
      {!createOwnChat && !kindChatChoice && (
        <FormWrapper>
          <Text>Join a chat room</Text>
          <TextInfo>
            Enter an invite link to join an existing chat room
          </TextInfo>

          <ButtonsWrapper>
            <ButtonBack
              onClick={() => {
                setJoinChat(null);
              }}
            >
              Back
            </ButtonBack>
            <Button>Join the chat room</Button>
          </ButtonsWrapper>
        </FormWrapper>
      )}
    </>
  );
};

export default JoinChatForm;
