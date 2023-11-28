import React from "react";
import { useState } from "react";

import InitialModalView from "components/ChatRooms/Modal/InitialModalView/InitialModalView";
import CreateChat from "components/ChatRooms/Modal/CreateChat/CreateChat";
import CreatePrivateChat from "components/ChatRooms/Modal/CreatePrivateChat/CreatePrivateChat";
import CreatePublicChat from "components/ChatRooms/Modal/CreatePublicChat/CreatePublicChat";
import JoinChat from "components/ChatRooms/Modal/JoinChat/JoinChat";

import { FormWrapper } from "./ChatModal.styled";

const ChatModal = ({ users, setActive }) => {
  const [currentView, setCurrentView] = useState("initial");

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "initial":
        return <InitialModalView handleNavigate={handleNavigate} />;
      case "create":
        return (
          <CreateChat
            setCurrentView={setCurrentView}
            handleNavigate={handleNavigate}
          />
        );
      case "private":
        return (
          <CreatePrivateChat
            users={users}
            handleNavigate={handleNavigate}
            setActive={setActive}
          />
        );
      case "public":
        return (
          <CreatePublicChat
            users={users}
            handleNavigate={handleNavigate}
            setActive={setActive}
          />
        );
      case "join":
        return (
          <JoinChat
            setCurrentView={setCurrentView}
            handleNavigate={handleNavigate}
          />
        );
      default:
        return null;
    }
  };

  return <FormWrapper>{renderView()}</FormWrapper>;
};

export default ChatModal;
