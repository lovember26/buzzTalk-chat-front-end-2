import React from "react";
import {
  ButtonsWrapper,
  Button,
  ButtonBack,
  Text,
  Form,
} from "./CreatePrivateChat.styled";

import SelectPrivateChat from "../../SelectPrivateChat/SelectPrivateChat";

const CreatePrivateChat = ({
  users,
  handleNavigate,
  handlerSubmit,
  setUserPrivateChatChoice,
}) => {
  return (
    <>
      <Text>Choose a friend for private communication</Text>
      <Form onSubmit={handlerSubmit}>
        <SelectPrivateChat users={users} setChoice={setUserPrivateChatChoice} />
        <ButtonsWrapper>
          <ButtonBack
            onClick={() => {
              handleNavigate("create");
            }}
          >
            Back
          </ButtonBack>
          <Button>Create chat</Button>
        </ButtonsWrapper>
      </Form>
    </>
  );
};

export default CreatePrivateChat;
