import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

import Modal from "components/common/Modal/Modal";
import ChatModal from "components/ChatRooms/Modal/ChatModal/ChatModal";

import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";
import { PrivateChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList";

import UserProfile from "../UserProfile/UserProfile";

import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

import { connectWebSocketNotification, disconnectWebSocketNotification } from "../../../../websocketNotification.js"

import {
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
  SearchInput,
  FriendsLink,
  ContactIcon,
  AddChatButtonWrapper,
  Title,
  Form,
  FriendsLinkWrapper,
} from "./SidePanel.styled";

// import { ChatProvider } from "contexts/ChatContext";
import { useChat } from "contexts/ChatContext";
import { SearchChatList } from "components/SearchChatList/SearchChatList";
import { selectAccessToken } from "redux/auth/authSelectors";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const { results } = useSelector(selectAllUsers);
const accessToken=useSelector(selectAccessToken);
  const { isPrivateChat } = useChat();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleSearchValue = ({ target }) => {
    setValue(target.value);
  };

  const [socket, setSocket] = useState(null);

  useEffect(() => {
      const socket = connectWebSocketNotification(accessToken);

      setSocket(socket);

      return () => {
          disconnectWebSocketNotification(socket);
      };
  }, []);

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button" to={"chats"}>
            <ChatsBtn />
          </StyledChatsBtn>

          <AddChatButtonWrapper
            type="button"
            onClick={() => setModalActive(true)}
          >
            <AddChatButton />
          </AddChatButtonWrapper>

          <PublicChatsList />
          <UserProfile />
        </StyledNav>

        <SearchBar>
          <Title>
            {isPrivateChat ? "Private messages" : "Public messages"}
          </Title>

          <Form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
              value={value}
              onChange={handleSearchValue}
            />
          </Form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends/all"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

         {value==="" ? <PrivateChatList  /> : <SearchChatList searchQuery={value}/>}
        </SearchBar>
      </StyledSideBar>

      <Modal active={modalActive} setActive={setModalActive}>
        <ChatModal users={results} setActive={setModalActive} />
      </Modal>
      <Outlet />
    </>
  );
}
