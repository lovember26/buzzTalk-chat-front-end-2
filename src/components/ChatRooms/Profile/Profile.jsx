import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { selectUserName } from "redux/user/userSelectors";
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

export default function Profile() {
  const username = useSelector(selectUserName);
  const image = useSelector(selectUserImage);

  // const { chatSlug } = useParams();
  // console.log("chatSlug Profile", chatSlug);

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBarWrapper>
          <UserBarImageWrapper>
            <UserBarImage src={image} width="50" alt="avatar" />
          </UserBarImageWrapper>
          <UserBarInfoWrapper className="user">
            <UserBarUserName className="username">{username}</UserBarUserName>
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
