// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { selectUserName } from "redux/user/userSelectors";
// import { fetchAllPrivateChatsThunk } from "redux/chat/chatThunk";

import SidePanel from "components/ChatRooms/SideBar/SidePanel/SidePanel";
import { RoomsWrapper } from "./ChatRooms.styled";

export default function ChatRoomsPage() {
  // const token = useSelector(selectAccessToken);
  // const username = useSelector(selectUserName);
  // const [chats, setChats] = useState([]);

  // console.log("chats in ChatRoomsPage Component", chats);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token !== null && username !== null) {
  //     getUserChats(token);
  //   }
  // }, [token, username]);

  // const getUserChats = async () => {
  //   const chats = await dispatch(fetchAllPrivateChatsThunk());
  //   setChats(chats);
  // };

  return (
    <RoomsWrapper>
      <SidePanel />
    </RoomsWrapper>
  );
}
