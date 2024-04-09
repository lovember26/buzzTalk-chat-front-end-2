import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPrivateChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPrivateChats } from "redux/chat/chatSelectors";
import NoPrivateChats from "../NoPrivateChats/NoPrivateChats";

import {
  ChatList,
  ChatItem,
  ChatItemImageWrapper,
  ChatItemImage,
  ChatItemInfo,
  ChatItemText,
  UnreadCounter,
} from "./PrivateChatsList.styled";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import { useChat } from "contexts/ChatContext";

export const PrivateChatList = ({onlineUsers}) => {
  const {
    setChatSlug,
    setIsPrivateChat,
    setPrivateChatName,
    setPrivateChatImage,
    setIsFriend,

  } = useChat();
  const chats = useSelector(selectFetchAllPrivateChats);
  const dispatch = useDispatch();

  // console.log("chats PrivateChatList", chats);

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPrivateChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  // console.log("tutka", unreaded)
  }, [getUserChats]);

  const onClickChatHandler = (slug, isPrivateChat, receiver, image,is_friend) => {
    setChatSlug(slug);
    setIsPrivateChat(isPrivateChat);
    setPrivateChatName(receiver);
    setPrivateChatImage(image);
    setIsFriend(is_friend);
    dispatch(fetchAllPrivateChatsThunk());
  };

  return (
    <>
      {chats && chats.length > 0 ? (
        <ChatList>
          {chats.map((chat) => (
            
            <ChatItem key={chat.id}>
              <ChatItemInfo
                onClick={() =>
                  onClickChatHandler(
                    chat.slug,
                    chat.is_private,
                    chat.receiver.username,
                    chat.receiver.image,
                    chat.receiver.is_friend,
                
                  )
                }
                to={`chats/${chat.slug}`}
              >
                {chat.receiver.image ? (
                  <ChatItemImageWrapper>
                    <ChatItemImage src={chat.receiver.image} alt="avatar" />
                  </ChatItemImageWrapper>
                ) : (
                  <DefaultIcon />
                )}
                <ChatItemText>{chat.receiver.username}</ChatItemText>
                {/* {unreaded?.map(item => {
    if (item.slug === chat.slug) { */}
      {chat.unread_messages > 0 &&   <UnreadCounter >{chat.unread_messages}</UnreadCounter>}
    {/* } */}
    {/* return null; // Додано явне повернення для випадку, коли умова не виконується */}

              </ChatItemInfo>
            </ChatItem>
          ))}
        </ChatList>
      ) : (
        <NoPrivateChats />
      )}
    </>
  );
};
