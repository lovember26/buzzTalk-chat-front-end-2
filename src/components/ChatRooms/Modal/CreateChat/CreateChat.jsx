import React from "react";
import {
  Title,
  ModalMainButtonsWrapper,
  Line,
  TextDescription,
} from "./CreateChat.styled";

import { ModalMainButton } from "components/common/ModalMainButton/ModalMainButton";
import { ModalButtonBack } from "components/common/ModalButtonBack/ModalButtonBack";

const CreateChat = ({ handleNavigate }) => {
  return (
    <>
      <Title>What kind of chat you’d like to create?</Title>
      <ModalMainButtonsWrapper>
        <ModalMainButton
          onClick={() => {
            handleNavigate("private");
          }}
          color={"#451952"}
          background={"#7e5d88"}
          fill={"#451952"}
          text="For me and my friends"
        />
        <Line></Line>
        <ModalMainButton
          onClick={() => {
            handleNavigate("public");
          }}
          color={"#ffffff"}
          background={"#F39F5A"}
          fill={"#ffffff"}
          text="For Public Discussion"
        />
        <TextDescription>
          Public Chat rooms is the place where you can discuss different topics
          with people with the same interests!
        </TextDescription>
      </ModalMainButtonsWrapper>
      <ModalButtonBack text={"Back"} navigate={handleNavigate} to={"initial"} />
    </>
  );
};

export default CreateChat;
