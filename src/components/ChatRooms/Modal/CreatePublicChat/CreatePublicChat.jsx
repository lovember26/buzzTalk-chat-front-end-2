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
  // InputAndErrorWrapper,
  Image,
  ImageWrapper,
  UploadPhotoWrapper,
  UploadPhotoLable,
} from "./CreatePublicChat.styled";

const CreatePublicChat = ({ users, handleNavigate, setActive }) => {
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);
  const [privateChatName, ,] = useState("");
  const [file, setFile] = useState("");
  console.log("file", file);

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
      // participants: userPublicChatChoice,
    },
  });

  console.log("errors", errors);
  console.log("isValid", isValid);

  const onSubmit = async ({ title, participants }) => {
    console.log("participants", participants);
    try {
      const newPublicChat = {
        title: title,
        participants: userPublicChatChoice,
      };

      await dispatch(createPublicChatThunk(newPublicChat));

      setActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadImage = () => {
    filePicker.current.click();
  };

  const handleChangeAvatar = async (event) => {
    setFile(event.target.files[0]);
  };

  const titleError = selectInputNotification(errors["title"]);
  // const participantsError = selectInputNotification(errors["participants"]);
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

        <UploadPhotoWrapper>
          <EditProfilePageFormInputAbout
            className="hide"
            type="file"
            // {...register("avatar")}
            ref={filePicker}
            accept="image/*,.png,.jpg,.gif,.web,.webp"
            onChange={handleChangeAvatar}
          />
          <UploadPhotoLable>CHAT ROOM IMAGE</UploadPhotoLable>
          <UploadPictureButton type="button" onClick={handleUploadImage}>
            {file ? (
              <ImageWrapper>
                <Image
                  src={file ? URL.createObjectURL(file) : ""}
                  alt="image1"
                ></Image>
              </ImageWrapper>
            ) : (
              <UploadPicture />
            )}
          </UploadPictureButton>
        </UploadPhotoWrapper>

        <>
          <SelectPublicChat
            // register={{ ...register("participants") }}
            // value={watch("participants")}
            // error={participantsError}
            users={users}
            choice={userPublicChatChoice}
            setChoice={setUserPublicChatChoice}
          />

          {/* {!userPublicChatChoice && (
            <InputNotification text={"Choose friends to create a chat!"} />
          )} */}
          {/* {participantsError ? (
            <InputNotification
              text={participantsError}
              error={participantsError}
              color={"red"}
            />
          ) : (
            <InputNotification
              text={createPublicChatPageRules.PUBLIC_CHAT_TITLE}
            />
          )} */}
        </>

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
