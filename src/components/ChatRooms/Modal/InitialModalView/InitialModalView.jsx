import React from "react";

import { ModalMainButton } from "components/common/ModalMainButton/ModalMainButton";

import {
  Title,
  TextDescription,
  ModalMainButtonsWrapper,
  Line,
  JoinChatText,
} from "./InitialModalView.styled";

const InitialModalView = ({ handleNavigate }) => {
  return (
    <>
      <Title>Create a chat room</Title>
      <TextDescription>
        Chat rooms is the place where you can discuss different topics with
        people with the same interests!
      </TextDescription>
      <ModalMainButtonsWrapper>
        <ModalMainButton
          onClick={() => {
            handleNavigate("create");
          }}
          color={"#451952"}
          background={"#7e5d88"}
          fill={"#451952"}
          text="Create your own"
        />
        <Line></Line>
        <JoinChatText>Already have an invite?</JoinChatText>
        <ModalMainButton
          onClick={() => {
            handleNavigate("join");
          }}
          color={"#ffffff"}
          background={"#F39F5A"}
          fill={"#ffffff"}
          text="Join the chat room"
        />
      </ModalMainButtonsWrapper>
    </>
  );
};

export default InitialModalView;
