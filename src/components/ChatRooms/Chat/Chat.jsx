import { ReactComponent as SearchIcon } from "../../../images/search-chat.svg";
import { ReactComponent as PhoneIcon } from "../../../images/phone-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as AddFriendIcon } from "../../../images/add-friend.svg";
// import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import { ActionBar, ChatContainer, StyledHeader, UserBar } from "./Chat.styled";
import NoFriends from "../NoFriends";
import { MessageInput } from "components/MessageInput/MessageInput";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function Chat() {
  // const { objectParam } = useParams();
  // const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   console.log(objectParam);

  //   if (objectParam) {
  //     const info = JSON.parse(decodeURIComponent(objectParam));
  //     setUserInfo(info);
  //   }
  // }, [objectParam]);
  return (
    <ChatContainer>
      <StyledHeader>
        <UserBar>
          <img src="#" width="50" alt="avatar" />
          <div className="user">
            <p className="username">@username</p>
            <p className="user-status">offline</p>
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
      <NoFriends text={"You havent got any messages yet"} />
      <MessageInput />
    </ChatContainer>
  );
}
