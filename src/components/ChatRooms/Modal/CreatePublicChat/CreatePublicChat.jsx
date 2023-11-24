import React from "react";
import {
  ButtonsWrapper,
  Button,
  ButtonBack,
  Text,
  InputWrapper,
  Lable,
  Input,
  Form,
} from "./CreatePublicChat.styled";

import SelectPublicChat from "../../SelectPublicChat/SelectPublicChat";

const CreatePublicChat = ({
  users,
  handleNavigate,
  handlerSubmit,
  setUserPublicChatChoice,
  publicChatName,
  setPublicChatName,
}) => {
  return (
    <>
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
        <SelectPublicChat users={users} setChoice={setUserPublicChatChoice} />
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

export default CreatePublicChat;
