import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormWrapper,
  Form,
  Input,
  ButtonsWrapper,
  ButtonWrapper,
  ButtonBack,
  Lable,
  Button,
  InputWrapper,
  Text,
  ButtonForPublic,
  ButtonForPrivate,
} from "./CreateChatForm.styled";

import SelectPrivateChat from "../SelectPrivateChat/SelectPrivateChat";
import SelectPublicChat from "../SelectPublicChat/SelectPublicChat";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

const CreateChatForm = ({ users }) => {
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
            <ButtonForPublic
              onClick={() => {
                setKindChatChoice("public");
              }}
            >
              For public discussion
            </ButtonForPublic>
            <ButtonForPrivate
              onClick={() => {
                setKindChatChoice("private");
              }}
            >
              For private discussion
            </ButtonForPrivate>
          </ButtonWrapper>
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

export default CreateChatForm;
