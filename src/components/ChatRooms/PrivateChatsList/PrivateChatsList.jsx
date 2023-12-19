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

export const PrivateChatList = ({ searchValue }) => {
  const dispatch = useDispatch();

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
          {chats
            .filter((chat) => {
              return (
                searchValue === "" ||
                chat.receiver.username.toLowerCase().startsWith(searchValue)
              );
            })
            .map((chat) => (
              <ChatItem key={chat.id}>
                <ChatItemInfo
                  to={`chats/${chat.slug}?username=${chat.receiver.username}`}
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
