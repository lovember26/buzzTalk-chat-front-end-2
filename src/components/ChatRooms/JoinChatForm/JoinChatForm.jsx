import React from "react";
import {
  FormWrapper,
  ButtonWrapper,
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
          <ButtonWrapper>
            <ButtonCreate
              onClick={() => {
                setKindChatChoice("private");
              }}
              color={"#451952"}
              background={"#7e5d88"}
              fill={"#451952"}
              text="For me and my friends"
            />
            <Line></Line>
            <ButtonCreate
              onClick={() => {
                setKindChatChoice("public");
              }}
              color={"#ffffff"}
              background={"#F39F5A"}
              fill={"#ffffff"}
              text="For Public Discussion"
            />
          </ButtonWrapper>
          <ButtonBack
            onClick={() => {
              setJoinChat(null);
            }}
          >
            Back
          </ButtonBack>
        </FormWrapper>
      )}
    </>
  );
};

export default JoinChatForm;
