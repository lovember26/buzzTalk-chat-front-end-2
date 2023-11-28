import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { ChatList, PublicChatItem } from "./PublicChatsList.styled";
import { fetchAllPublicChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

export const PublicChatsList = () => {
  const chats = useSelector(selectFetchAllPublicChats);

  const dispatch = useDispatch();

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPublicChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  return (
    <>
      {chats && chats.length > 0 ? (
        <ChatList>
          {chats?.map((chat) => (
            <PublicChatItem to={`chats/${chat?.slug}`} key={chat?.id}>
              {chat?.id}
            </PublicChatItem>
          ))}
        </ChatList>
      ) : (
        <NoFriends />
      )}
    </>
  );
};
