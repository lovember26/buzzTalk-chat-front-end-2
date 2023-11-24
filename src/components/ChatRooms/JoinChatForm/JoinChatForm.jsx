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
} from "./JoinChatForm.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

import SelectPrivateChat from "../SelectPrivateChat/SelectPrivateChat";
import SelectPublicChat from "../SelectPublicChat/SelectPublicChat";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

const JoinChatForm = ({ joinChat, setCreateOwnChat }) => {
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
      {!joinChat && (
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
              setCreateOwnChat(null);
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
