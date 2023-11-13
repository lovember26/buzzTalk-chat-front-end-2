import { useSelector } from "react-redux";
import { selectUserName } from "redux/user/userSelectors";
import { selectUserImage } from "redux/user/userSelectors";

import { ReactComponent as SearchIcon } from "../../../images/search-chat.svg";
import { ReactComponent as PhoneIcon } from "../../../images/phone-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as AddFriendIcon } from "../../../images/add-friend.svg";
import {
  ActionBar,
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

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBarWrapper>
          <UserBarImageWrapper>
            <UserBarImage src={image} width="50" alt="avatar" />
          </UserBarImageWrapper>
          <UserBarInfoWrapper className="user">
            <UserBarUserName className="username">{username}</UserBarUserName>
            <UserBarUserStatus className="user-status">
              online
            </UserBarUserStatus>
          </UserBarInfoWrapper>
        </UserBarWrapper>
        <ActionBar>
          <li>
            <SearchIcon />
          </li>
          <li>
            <PhoneIcon />
          </li>
          <li>
            <VideoIcon />
          </li>
          <li>
            <AddFriendIcon />
          </li>
        </ActionBar>
      </StyledHeader>
    </ChatContainer>
  );
}
