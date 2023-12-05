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
  const { setChatSlug, setPublicChatName, setIsPrivateChat } = useChat();

  const dispatch = useDispatch();

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPublicChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  // const getUserChats = useCallback(async () => {
  //   await dispatch(fetchAllPublicChatsThunk(username));
  // }, [dispatch, username]);

  const onClickChatHandler = (slug, isPrivateChat, title) => {
    console.log(title);
    setChatSlug(slug);
    setIsPrivateChat(isPrivateChat);
    setPublicChatName(title);
  };

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
              // onClick={() => setChatSlug(chat.slug)}
              onClick={() =>
                onClickChatHandler(chat.slug, chat.is_private, chat.title)
              }
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
