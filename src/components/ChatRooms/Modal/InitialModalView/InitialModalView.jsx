import React from "react";

import {
  ButtonWrapper,
  Line,
  Text,
  JoinChatText,
  TextInfo,
} from "./InitialModalView.styled";

import { ButtonCreate } from "components/common/ButtonCreate/ButtonCreate";

const InitialModalView = ({ handleNavigate }) => {
  return (
    <>
      <Text>Create a chat room</Text>
      <TextInfo>
        Chat rooms is the place where you can discuss different topics with
        people with the same interests!
      </TextInfo>
      <ButtonWrapper>
        <ButtonCreate
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
        <ButtonCreate
          onClick={() => {
            handleNavigate("join");
          }}
          color={"#ffffff"}
          background={"#F39F5A"}
          fill={"#ffffff"}
          text="Join the chat room"
        />
      </ButtonWrapper>
    </>
  );
};

export default InitialModalView;
