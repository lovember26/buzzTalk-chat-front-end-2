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
} from "./PrivateChatsList.styled";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

import { useChat } from "contexts/ChatContext";

export const PrivateChatList = () => {
  const {
    setChatSlug,
    setIsPrivateChat,
    setPrivateChatName,
    setPrivateChatImage,
  } = useChat();
  const chats = useSelector(selectFetchAllPrivateChats);

  const dispatch = useDispatch();

  // console.log("chats PrivateChatList", chats);

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPrivateChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  const onClickChatHandler = (slug, isPrivateChat, receiver, image) => {
    setChatSlug(slug);
    setIsPrivateChat(isPrivateChat);
    setPrivateChatName(receiver);
    setPrivateChatImage(image);
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
                    chat.receiver.image
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
