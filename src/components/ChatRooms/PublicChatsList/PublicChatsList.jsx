// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
import { PublicChatItem } from "./PublicChatsList.styled";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

export const PublicChatsList = () => {
  // const accessToken = useSelector(selectAccessToken);
  // const username = useSelector(selectUserName);
  // const [activeChats, setActiveChats] = useState([]);

  // console.log("activeChats", activeChats);

  // useEffect(() => {
  //   if (accessToken !== null && username !== null) {
  //     getUserChats(accessToken, username);
  //   }
  // }, [accessToken, username]);

  // const getUserChats = async (token, username) => {
  //   const { data } = await axios.get(
  //     `https://buzz-talk-api.onrender.com/api/chat/?username=${username}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   setActiveChats(data);
  // };

  return (
    <>
      {/* {activeChats && activeChats.length > 0 ? (
        <ul>
          {activeChats?.map((chat) => (
            <PublicChatItem to={`chats/${chat?.id}`} key={chat?.id}>
              {chat?.id}
            </PublicChatItem>
          ))}
        </ul>
      ) : (
        <NoFriends />
      )} */}
      <ul>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
      </ul>
    </>
  );
};
