import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "redux/auth/authSelectors";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { PublicChatItem } from "./PublicChatsList.styled";
// import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import { selectUserName } from "redux/user/userSelectors";
import { fetchAllPublicChatsThunk } from "redux/chat/chatThunk";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

export const PublicChatsList = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  // const [activeChats, setActiveChats] = useState([]);

  const chats = useSelector(selectFetchAllPublicChats);

  const dispatch = useDispatch();

  const getUserChats = useCallback(async () => {
    await dispatch(fetchAllPublicChatsThunk());
  }, [dispatch]);

  useEffect(() => {
    getUserChats();
  }, [getUserChats]);

  // useEffect(() => {
  //   if (accessToken !== null && username !== null) {
  //     getUserChats(accessToken, username);
  //   }
  // }, [accessToken, username]);

  // const getUserChats = async (token, username) => {
  //   const { data } = await axios.get(
  //     `https://buzz-talk-api.onrender.com/chat/public-chat/`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       username,
  //     }
  //   );
  //   console.log("Active public Chats", data);
  //   setActiveChats(data);
  // };

  return (
    <>
      {chats && chats.length > 0 ? (
        <ul>
          {chats?.map((chat) => (
            <PublicChatItem to={`chats/${chat?.slug}`} key={chat?.id}>
              {chat?.id}
            </PublicChatItem>
          ))}
        </ul>
      ) : (
        <NoFriends />
      )}
      {/* <ul>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
        <li>
          <PublicChatItem>
            <DefaultIcon />
          </PublicChatItem>
        </li>
      </ul> */}
    </>
  );
};
