import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "redux/auth/authSelectors";
import { fetchAllPrivateChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPrivateChats } from "redux/chat/chatSelectors";
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
import { async } from "q";

export const PrivateChatList = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  // const [chats, setChats] = useState(null);
  const dispatch = useDispatch();

  const chats = useSelector(selectFetchAllPrivateChats);

  console.log("chats PrivateChatList !!!!!!!!!!!!", chats);

  // const getUserChats = async () => {
  //   const { data } = await dispatch(fetchAllPrivateChatsThunk());
  //   setChats(data);
  // };

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPrivateChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  // const getUserChats = useCallback(async () => {
  //   const { data } = await dispatch(fetchAllPrivateChatsThunk());
  //   setChats(data);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (accessToken !== null && username !== null) {
  //     getUserChats(accessToken);
  //   }
  // }, [accessToken, username]);

  // useEffect(() => {
  //   getUserChats(accessToken);
  // }, [accessToken]);

  // const getUserChats = async (token) => {
  //   const { data } = await axios.get(
  //     "https://buzz-talk-api.onrender.com//chat/private-chat/",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   setChats(data);
  // };

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
