import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  ButtonWrapper,
  Line,
  ButtonBack,
  Text,
  TextInfo,
} from "./CreateChat.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

import SelectPrivateChat from "../../SelectPrivateChat/SelectPrivateChat";
import SelectPublicChat from "../../SelectPublicChat/SelectPublicChat";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

const CreateChat = ({
  users,
  handleNavigate,
  setCurrentView,
  createOwnChat,
  setCreateOwnChat,
  joinChat,
  setJoinChat,
  kindChatChoice,
  setKindChatChoice,
}) => {
  // const [userPrivateChatChoice, setUserPrivateChatChoice] = useState(null);
  // const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);
  // const [publicChatName, setPublicChatName] = useState("");

  // const dispatch = useDispatch();

  // const handlerSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("handlerSubmit");

  //   if (kindChatChoice === "private" && userPrivateChatChoice) {
  //     await dispatch(createPrivateChatThunk(userPrivateChatChoice));
  //   }

  //   if (kindChatChoice === "public" && userPublicChatChoice) {
  //     const newPublicChat = {
  //       title: publicChatName,
  //       participants: userPublicChatChoice,
  //     };

  //     await dispatch(createPublicChatThunk(newPublicChat));
  //   }
  // };

  return (
    <>
      <Text>What kind of chat you’d like to create?</Text>
      <ButtonWrapper>
        <ButtonCreate
          onClick={() => {
            handleNavigate("private");
          }}
          color={"#451952"}
          background={"#7e5d88"}
          fill={"#451952"}
          text="For me and my friends"
        />
        <Line></Line>
        <ButtonCreate
          onClick={() => {
            handleNavigate("public");
          }}
          color={"#ffffff"}
          background={"#F39F5A"}
          fill={"#ffffff"}
          text="For Public Discussion"
        />
        <TextInfo>
          Public Chat rooms is the place where you can discuss different topics
          with people with the same interests!
        </TextInfo>
      </ButtonWrapper>
      <ButtonBack
        onClick={() => {
          handleNavigate("initial");
        }}
      >
        Back
      </ButtonBack>
    </>
  );
};

export default CreateChat;
