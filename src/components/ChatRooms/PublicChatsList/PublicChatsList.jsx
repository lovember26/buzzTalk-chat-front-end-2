import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
import {
  ChatList,
  PublicChatItem,
  ChatItemImageWrapper,
  ChatItemImage,
} from "./PublicChatsList.styled";
import { fetchAllPublicChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

import { useChat } from "contexts/ChatContext";
import { selectUserName } from "redux/user/userSelectors";

export const PublicChatsList = () => {
  const chats = useSelector(selectFetchAllPublicChats);
  const username = useSelector(selectUserName);
  const {
    setChatSlug,
    setPublicChatName,
    setIsPrivateChat,
    setPublicChatImage,
  } = useChat();

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

  const onClickChatHandler = (slug, isPrivateChat, title, image) => {
    console.log(title);
    setChatSlug(slug);
    setIsPrivateChat(isPrivateChat);
    setPublicChatName(title);
    setPublicChatImage(image);
  };

  return (
    <>
      {chats && chats.length > 0 && (
        <ChatList>
          {chats?.map((chat) => (
            <PublicChatItem
              onClick={() =>
                onClickChatHandler(
                  chat.slug,
                  chat.is_private,
                  chat.title,
                  chat.image || chat.gravatar
                )
              }
              to={`chats/${chat?.slug}`}
              key={chat?.id}
            >
              {chat.image || chat.gravatar ? (
                <ChatItemImageWrapper>
                  <ChatItemImage
                    src={chat.image || chat.gravatar}
                    alt="avatar"
                  />
                </ChatItemImageWrapper>
              ) : (
                <DefaultIcon />
              )}
            </PublicChatItem>
          ))}
        </ChatList>
      )}
    </>
  );
};
