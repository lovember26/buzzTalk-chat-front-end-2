import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPrivateChatThunk } from "redux/chat/chatThunk";

import { ModalButtonBack } from "components/common/ModalButtonBack/ModalButtonBack";
import { ModalButtonSendForm } from "components/common/ModalButtonSendForm/ModalButtonSendForm";
import SelectPrivateChat from "components/ChatRooms/SelectPrivateChat/SelectPrivateChat";

import { Title, Form, ButtonsWrapper } from "./CreatePrivateChat.styled";

const CreatePrivateChat = ({ users, handleNavigate }) => {
  const [receiver, setReceiver] = useState(null);
  const dispatch = useDispatch();

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await dispatch(createPrivateChatThunk(receiver));
  };

  return (
    <>
      <Title>Choose a friend for private communication</Title>
      <Form onSubmit={handlerSubmit}>
        <SelectPrivateChat users={users} setChoice={setReceiver} />
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

export default CreatePrivateChat;
