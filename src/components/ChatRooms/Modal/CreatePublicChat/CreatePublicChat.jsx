import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { inputCreatePublicChatSchema } from "middlewares";

import { createPublicChatThunk } from "redux/chat/chatThunk";

import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { createPublicChatPageRules } from "constants";

import { ModalButtonBack } from "components/common/ModalButtonBack/ModalButtonBack";
import { ModalButtonSendForm } from "components/common/ModalButtonSendForm/ModalButtonSendForm";
import SelectPublicChat from "components/ChatRooms/SelectPublicChat/SelectPublicChat";

import { InputNotification } from "components/common/InputNotification/InputNotification";

import { generatePublicChatTGravatarThunk } from "redux/chat/chatThunk";

import UploadPicture from "images/svg/UploadPicture/UploadPicture";

import {
  Title,
  Form,
  InputWrapper,
  Lable,
  Input,
  ButtonsWrapper,
  UploadPictureButton,
  EditProfilePageFormInputAbout,
  Wrapper,
  InputAndErrorWrapper,
} from "./CreatePublicChat.styled";

const CreatePublicChat = ({ users, handleNavigate, setActive }) => {
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);
  const [privateChatName, setPrivateChatName] = useState("");
  const [file, setFile] = useState("");

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(inputCreatePublicChatSchema),
    defaultValues: {
      title: privateChatName,
      // members: description,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const newPublicChat = {
      title: privateChatName,
      participants: userPublicChatChoice,
    };

    await dispatch(createPublicChatThunk(newPublicChat));
    setActive(false);
  };

  // const handleSetGravatar = async () => {
  //   await dispatch(generatePublicChatTGravatarThunk(45));
  // };

  const handleUploadImage = () => {
    filePicker.current.click();
  };

  const handleChangeAvatar = async (event) => {
    setFile(event.target.files[0]);
  };

  const titleError = selectInputNotification(errors["title"]);

  console.log("titleError", titleError);

  return (
    <Wrapper>
      <Title>Choose friends for public communication</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Lable>CHAT ROOM NAME</Lable>
          <Input
            {...register("title")}
            value={watch("title")}
            error={titleError}
            type="text"
            placeholder="Enter name of created chat"
            // value={privateChatName}
            // onChange={(event) => setPrivateChatName(event.target.value)}
          ></Input>
          {titleError ? (
            <InputNotification
              text={titleError}
              error={titleError}
              color={"red"}
            />
          ) : (
            <InputNotification
              text={createPublicChatPageRules.PUBLIC_CHAT_TITLE}
            />
          )}
        </InputWrapper>

        <EditProfilePageFormInputAbout
          className="hide"
          type="file"
          {...register("avatar")}
          ref={filePicker}
          accept="image/*,.png,.jpg,.gif,.web,.webp"
          onChange={handleChangeAvatar}
        />

        <UploadPictureButton type="button" onClick={handleUploadImage}>
          <UploadPicture />
        </UploadPictureButton>

        {/* <button type="button" onClick={handleSetGravatar}>
            Set gravatar
          </button> */}

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
          <ModalButtonSendForm disabled={!isValid} text={"Create chat"} />
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
};

export default CreatePublicChat;
