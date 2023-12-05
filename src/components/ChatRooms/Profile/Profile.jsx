import { useSelector } from "react-redux";
import { selectUserImage } from "redux/user/userSelectors";

import { ReactComponent as SearchIcon } from "../../../images/search-chat.svg";
import { ReactComponent as PhoneIcon } from "../../../images/phone-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as AddFriendIcon } from "../../../images/add-friend.svg";
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

import { useChat } from "contexts/ChatContext";

export default function Profile() {
  const image = useSelector(selectUserImage);
  const { isPrivateChat, privateChatName, publicChatName } = useChat();

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBarWrapper>
          <UserBarImageWrapper>
            <UserBarImage src={image} width="50" alt="avatar" />
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
