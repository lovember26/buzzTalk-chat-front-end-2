import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormWrapper,
  Form,
  Input,
  ButtonsWrapper,
  JoinChatText,
  ButtonWrapper,
  Line,
  ButtonBack,
  Lable,
  Button,
  InputWrapper,
  Text,
  TextInfo,
} from "./CreateChatForm.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

import SelectPrivateChat from "../SelectPrivateChat/SelectPrivateChat";
import SelectPublicChat from "../SelectPublicChat/SelectPublicChat";

import TypeCreateChatForm from "components/ChatRooms/TypeCreateChatForm/TypeCreateChatForm";
import JoinChatForm from "components/ChatRooms/JoinChatForm/JoinChatForm";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

const CreateChatForm = ({ users }) => {
  const [userPrivateChatChoice, setUserPrivateChatChoice] = useState(null);
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);

  const [kindChatChoice, setKindChatChoice] = useState(null);
  const [publicChatName, setPublicChatName] = useState("");

  const dispatch = useDispatch();

  const [createOwnChat, setCreateOwnChat] = useState(null);
  const [joinChat, setJoinChat] = useState(null);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    console.log("handlerSubmit");

    if (kindChatChoice === "private" && userPrivateChatChoice) {
      await dispatch(createPrivateChatThunk(userPrivateChatChoice));
    }

    if (kindChatChoice === "public" && userPublicChatChoice) {
      const newPublicChat = {
        title: publicChatName,
        participants: userPublicChatChoice,
      };

      await dispatch(createPublicChatThunk(newPublicChat));
    }
  };

  return (
    <>
      {!createOwnChat && (
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
        <TypeCreateChatForm setCreateOwnChat={setCreateOwnChat} />
      )}

      {joinChat && (
        <JoinChatForm joinChat={joinChat} setCreateOwnChat={setCreateOwnChat} />
      )}

      {/* {kindChatChoice === "public" && (
        <FormWrapper>
          <Text>Choose friends for public communication</Text>
          <Form onSubmit={handlerSubmit}>
            <InputWrapper>
              <Lable>CHAT ROOM NAME</Lable>
              <Input
                type="text"
                placeholder="Enter name of created chat"
                value={publicChatName}
                onChange={(event) => setPublicChatName(event.target.value)}
              ></Input>
            </InputWrapper>
            <SelectPublicChat
              users={users}
              setChoice={setUserPublicChatChoice}
            />
            <ButtonsWrapper>
              <ButtonBack
                onClick={() => {
                  setKindChatChoice(null);
                }}
              >
                Back
              </ButtonBack>
              <Button>Create chat</Button>
            </ButtonsWrapper>
          </Form>
        </FormWrapper>
      )} */}
    </>
  );
};

export default CreateChatForm;
