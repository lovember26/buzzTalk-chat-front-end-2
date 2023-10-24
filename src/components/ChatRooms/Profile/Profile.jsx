import { useSelector } from "react-redux";
import { selectUserName } from "redux/user/userSelectors";

import { ReactComponent as SearchIcon } from "../../../images/search-chat.svg";
import { ReactComponent as PhoneIcon } from "../../../images/phone-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as AddFriendIcon } from "../../../images/add-friend.svg";
import {
  ActionBar,
  ChatContainer,
  StyledHeader,
  UserBar,
} from "./Profile.styled";

export default function Profile() {
  const username = useSelector(selectUserName);

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBar>
          <img src="#" width="50" alt="avatar" />
          <div className="user">
            <p className="username">{username}</p>
            <p className="user-status">online</p>
          </div>
        </UserBar>
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
