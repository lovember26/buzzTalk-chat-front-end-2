import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPublicChatThunk } from "redux/chat/chatThunk";

import { ModalButtonBack } from "components/common/ModalButtonBack/ModalButtonBack";
import { ModalButtonSendForm } from "components/common/ModalButtonSendForm/ModalButtonSendForm";
import SelectPublicChat from "components/ChatRooms/SelectPublicChat/SelectPublicChat";

import {
  Title,
  Form,
  InputWrapper,
  Lable,
  Input,
  ButtonsWrapper,
} from "./CreatePublicChat.styled";

const CreatePublicChat = ({ users, handleNavigate, setActive }) => {
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);

  const [chatName, setChatName] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const newPublicChat = {
      title: chatName,
      participants: userPublicChatChoice,
    };

    await dispatch(createPublicChatThunk(newPublicChat));
    setActive(false);
  };

  return (
    <>
      <Title>Choose friends for public communication</Title>
      <Form onSubmit={handlerSubmit}>
        <InputWrapper>
          <Lable>CHAT ROOM NAME</Lable>
          <Input
            type="text"
            placeholder="Enter name of created chat"
            value={chatName}
            onChange={(event) => setChatName(event.target.value)}
          ></Input>
        </InputWrapper>
        <SelectPublicChat
          users={users}
          choice={userPublicChatChoice}
          setChoice={setUserPublicChatChoice}
        />
        <ButtonsWrapper>
          <ModalButtonBack
            text={"Back"}
            navigate={handleNavigate}
            to={"create"}
          />
          <ModalButtonSendForm text={"Create chat"} />
        </ButtonsWrapper>
      </Form>
    </>
  );
};

export default CreatePublicChat;
