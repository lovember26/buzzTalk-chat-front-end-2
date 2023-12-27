import { ReactComponent as SearchIcon } from "../../../images/search-chat.svg";
import { ReactComponent as PhoneIcon } from "../../../images/phone-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as AddFriendIcon } from "../../../images/add-friend.svg";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import {
  UserStatusWrapper,
  Indicator,
  ActionBar,
  ActionBarItem,
  ChatContainer,
  StyledHeader,
  UserBarWrapper,
  UserBarImage,
  UserBarInfoWrapper,
  UserBarUserName,
  UserBarUserStatus,
  UserBarImageWrapper,
} from "./Profile.styled";
// import { useLocation } from "react-router";
// import { useEffect, useState } from "react";
// import { fetchUserByUsername } from "services/userApi";

import { useChat } from "contexts/ChatContext";

export default function Profile() {
  const {
    isPrivateChat,
    privateChatName,
    publicChatName,
    privateChatImage,
    publicChatImage,
  } = useChat();

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBarWrapper>
          <UserBarImageWrapper>
            {privateChatImage || publicChatImage ? (
              <UserBarImage
                src={isPrivateChat ? privateChatImage : publicChatImage}
                width="50"
                alt="avatar"
              />
            ) : (
              <DefaultIcon />
            )}
          </UserBarImageWrapper>
          <UserBarInfoWrapper className="user">
            <UserBarUserName className="username">
              {isPrivateChat ? privateChatName : publicChatName}
            </UserBarUserName>
            <UserStatusWrapper>
              <UserBarUserStatus className="user-status">
                online
              </UserBarUserStatus>
              <Indicator></Indicator>
            </UserStatusWrapper>
          </UserBarInfoWrapper>
        </UserBarWrapper>
        <ActionBar>
          <ActionBarItem>
            <SearchIcon />
          </ActionBarItem>
          <ActionBarItem>
            <PhoneIcon />
          </ActionBarItem>
          <ActionBarItem>
            <VideoIcon />
          </ActionBarItem>
          <ActionBarItem>
            <AddFriendIcon />
          </ActionBarItem>
        </ActionBar>
      </StyledHeader>
    </ChatContainer>
  );
}
