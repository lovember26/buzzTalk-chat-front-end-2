import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormWrapper,
  Form,
  Input,
  ButtonsWrapper,
  ButtonWrapper,
  Line,
  ButtonBack,
  Lable,
  Button,
  InputWrapper,
  Text,
  TextInfo,
} from "./TypeCreateChatForm.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

import SelectPrivateChat from "../SelectPrivateChat/SelectPrivateChat";
import SelectPublicChat from "../SelectPublicChat/SelectPublicChat";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

const TypeCreateChatForm = ({ users, setCreateOwnChat }) => {
  const [userPrivateChatChoice, setUserPrivateChatChoice] = useState(null);
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);

  const [kindChatChoice, setKindChatChoice] = useState(null);
  const [publicChatName, setPublicChatName] = useState("");

  const dispatch = useDispatch();

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
      {!kindChatChoice && (
        <FormWrapper>
          <Text>What kind of chat you’d like to create?</Text>
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
            <TextInfo>
              Public Chat rooms is the place where you can discuss different
              topics with people with the same interests!
            </TextInfo>
          </ButtonWrapper>
          <ButtonBack
            onClick={() => {
              setCreateOwnChat(null);
            }}
          >
            Back
          </ButtonBack>
        </FormWrapper>
      )}

      {kindChatChoice === "public" && (
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
      )}

      {kindChatChoice === "private" && (
        <FormWrapper>
          <Text>Choose a friend for private communication</Text>
          <Form onSubmit={handlerSubmit}>
            <SelectPrivateChat
              users={users}
              setChoice={setUserPrivateChatChoice}
            />
            {/* <Input type="text" placeholder="Enter name of created chat"></Input> */}
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
      )}
    </>
  );
};

export default TypeCreateChatForm;
