import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "redux/auth/authSelectors";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import {
  ChatList,
  ChatItem,
  ChatItemImageWrapper,
  ChatItemImage,
  ChatItemInfo,
  ChatItemText,
} from "./PrivateChatsList.styled";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import { selectUserName } from "redux/user/userSelectors";

export const PrivateChatList = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (accessToken !== null && username !== null) {
      getUserChats(accessToken);
    }
  }, [accessToken, username]);

  const getUserChats = async (token) => {
    const { data } = await axios.get(
      "https://buzz-talk-api.onrender.com/api/chat/private-chat/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setChats(data);
  };

  return (
    <>
      {chats && chats.length > 0 ? (
        <ChatList>
          {chats.map((chat) => (
            <ChatItem key={chat.id}>
              <ChatItemInfo to={`chats/${chat.slug}`}>
                {chat.receiver.image ? (
                  <ChatItemImageWrapper>
                    <ChatItemImage src={chat.receiver.image} alt="avatar" />
                  </ChatItemImageWrapper>
                ) : (
                  <DefaultIcon />
                )}
                <ChatItemText>{chat.receiver.username}</ChatItemText>
              </ChatItemInfo>
            </ChatItem>
          ))}
        </ChatList>
      ) : (
        <NoFriends />
      )}
    </>
  );
};
