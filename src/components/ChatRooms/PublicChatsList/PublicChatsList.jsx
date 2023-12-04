import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
import { ChatList, PublicChatItem } from "./PublicChatsList.styled";
import { fetchAllPublicChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

import { useChat } from "contexts/ChatContext";
import { selectUserName } from "redux/user/userSelectors";

export const PublicChatsList = () => {
  const chats = useSelector(selectFetchAllPublicChats);
  const username = useSelector(selectUserName);

  const { setChatSlug } = useChat();

  const dispatch = useDispatch();

  // const getUserChats = useCallback(async () => {
  //   await dispatch(fetchAllPublicChatsThunk());
  // }, [dispatch]);

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPublicChatsThunk(username));
  }, [dispatch, username]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  return (
    <>
      {/* {chats && chats.length > 0 ? (
        <ChatList>
          {chats?.map((chat) => (
            <PublicChatItem to={`chats/${chat?.slug}`} key={chat?.id}>
              {chat?.id}
            </PublicChatItem>
          ))}
        </ChatList>
      ) : (
        <NoFriends />
      )} */}
      {/* Without NoChatBlock*/}
      {chats && chats.length > 0 && (
        <ChatList>
          {chats?.map((chat) => (
            <PublicChatItem
              onClick={() => setChatSlug(chat.slug)}
              to={`chats/${chat?.slug}`}
              key={chat?.id}
            >
              {chat?.id}
            </PublicChatItem>
          ))}
        </ChatList>
      )}
    </>
  );
};
