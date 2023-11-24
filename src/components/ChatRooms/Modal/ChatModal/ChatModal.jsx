import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPrivateChatThunk } from "redux/chat/chatThunk";
import { createPublicChatThunk } from "redux/chat/chatThunk";

import { FormWrapper } from "./ChatModal.styled";

import InitialModalView from "components/ChatRooms/Modal/InitialModalView/InitialModalView";
import CreateChat from "components/ChatRooms/Modal/CreateChat/CreateChat";
import JoinChat from "components/ChatRooms/Modal/JoinChat/JoinChat";

import CreatePrivateChat from "../CreatePrivateChat/CreatePrivateChat";
import CreatePublicChat from "../CreatePublicChat/CreatePublicChat";

const ChatModal = ({ users }) => {
  const [kindChatChoice, setKindChatChoice] = useState(null);

  const [userPrivateChatChoice, setUserPrivateChatChoice] = useState(null);
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);
  const [publicChatName, setPublicChatName] = useState("");

  const [currentView, setCurrentView] = useState("initial");
  const dispatch = useDispatch();

  console.log("currentView", currentView);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    console.log("handlerSubmit");

    if (kindChatChoice === "private" && userPrivateChatChoice) {
      await dispatch(createPrivateChatThunk(userPrivateChatChoice));
    }

    if (kindChatChoice === "public" && userPublicChatChoice) {
      const newPublicChat = {
        title: publicChatName,
        participants: userPublicChatChoice,
      };

      await dispatch(createPublicChatThunk(newPublicChat));
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "initial":
        return <InitialModalView handleNavigate={handleNavigate} />;
      case "create":
        return (
          <CreateChat
            users={users}
            setCurrentView={setCurrentView}
            handleNavigate={handleNavigate}
          />
        );
      case "join":
        return (
          <JoinChat
            setCurrentView={setCurrentView}
            handleNavigate={handleNavigate}
          />
        );
      case "private":
        return (
          <CreatePrivateChat
            users={users}
            handleNavigate={handleNavigate}
            handlerSubmit={handlerSubmit}
            setUserPrivateChatChoice={setUserPrivateChatChoice}
          />
        );
      case "public":
        return (
          <CreatePublicChat
            users={users}
            handleNavigate={handleNavigate}
            handlerSubmit={handlerSubmit}
            setUserPublicChatChoice={setUserPublicChatChoice}
            publicChatName={publicChatName}
            setPublicChatName={setPublicChatName}
          />
        );
      default:
        return null;
    }
  };

  return <FormWrapper>{renderView()}</FormWrapper>;
};

export default ChatModal;
