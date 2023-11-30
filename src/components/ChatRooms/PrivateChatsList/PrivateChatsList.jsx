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
  const dispatch = useDispatch();

  const { setChatId } = useChat();

  const chats = useSelector(selectFetchAllPrivateChats);

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPrivateChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  return (
    <>
      {chats && chats.length > 0 ? (
        <ChatList>
          {chats.map((chat) => (
            <ChatItem key={chat.id}>
              <ChatItemInfo
                onClick={() => setChatId(chat.id)}
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
