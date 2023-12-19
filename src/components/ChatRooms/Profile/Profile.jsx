// import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { selectUserName } from "redux/user/userSelectors";
// import { selectUserImage } from "redux/user/userSelectors";

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
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { fetchUserByUsername } from "services/userApi";

export default function Profile() {
  // const username = useSelector(selectUserName);
  // const image = useSelector(selectUserImage);

  // const { chatSlug } = useParams();
  // console.log("chatSlug Profile", chatSlug);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const username = params.get("username");
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUserByUsername(username);
      setUserInfo(data);
    };
    getUser();
  }, [username]);

  return (
    <ChatContainer>
      <StyledHeader>
        <UserBarWrapper>
          <UserBarImageWrapper>
            <UserBarImage src={userInfo?.image} width="50" alt="avatar" />
          </UserBarImageWrapper>
          <UserBarInfoWrapper className="user">
            <UserBarUserName className="username">
              {userInfo?.username}
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
