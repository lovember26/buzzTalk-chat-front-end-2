import React from "react";
import { useState } from "react";
import {
  FormWrapper,
  JoinChatText,
  ButtonWrapper,
  Line,
  Text,
  TextInfo,
} from "./CreateChatForm.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

import TypeCreateChatForm from "components/ChatRooms/TypeCreateChatForm/TypeCreateChatForm";
import JoinChatForm from "components/ChatRooms/JoinChatForm/JoinChatForm";

const CreateChatForm = ({ users }) => {
  const [createOwnChat, setCreateOwnChat] = useState(null);
  const [kindChatChoice, setKindChatChoice] = useState(null);
  const [joinChat, setJoinChat] = useState(null);

  return (
    <>
      {!createOwnChat && !joinChat && (
        <FormWrapper>
          <Text>Create a chat room</Text>
          <TextInfo>
            Chat rooms is the place where you can discuss different topics with
            people with the same interests!
          </TextInfo>
          <ButtonWrapper>
            <ButtonCreate
              onClick={() => {
                setCreateOwnChat(true);
              }}
              color={"#451952"}
              background={"#7e5d88"}
              fill={"#451952"}
              text="Create your own"
            />
            <Line></Line>
            <JoinChatText>Already have an invite?</JoinChatText>
            <ButtonCreate
              onClick={() => {
                setJoinChat(true);
              }}
              color={"#ffffff"}
              background={"#F39F5A"}
              fill={"#ffffff"}
              text="Join the chat room"
            />
          </ButtonWrapper>
        </FormWrapper>
      )}

      {createOwnChat && (
        <TypeCreateChatForm
          users={users}
          createOwnChat={createOwnChat}
          setCreateOwnChat={setCreateOwnChat}
          joinChat={joinChat}
          setJoinChat={setJoinChat}
          kindChatChoice={kindChatChoice}
          setKindChatChoice={setKindChatChoice}
        />
      )}

      {joinChat && (
        <JoinChatForm
          createOwnChat={createOwnChat}
          setCreateOwnChat={setCreateOwnChat}
          joinChat={joinChat}
          setJoinChat={setJoinChat}
          kindChatChoice={kindChatChoice}
          setKindChatChoice={setKindChatChoice}
        />
      )}
    </>
  );
};

export default CreateChatForm;
