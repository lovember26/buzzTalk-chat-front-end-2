import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

import Modal from "components/common/Modal/Modal";
import ChatModal from "components/ChatRooms/Modal/ChatModal/ChatModal";

// import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";
import { PrivateChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList";

import UserProfile from "../UserProfile/UserProfile";

import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

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

import { ChatProvider } from "contexts/ChatContext";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);

  const { results } = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllUsersThunk());
  // }, [dispatch]);

  return (
    <ChatProvider>
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

          {/* <PublicChatsList /> */}
          <UserProfile />
        </StyledNav>

        <SearchBar>
          <Title>Private messages</Title>

          <Form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
            />
          </Form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends/all"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

          <PrivateChatList />
        </SearchBar>
      </StyledSideBar>

      <Modal active={modalActive} setActive={setModalActive}>
        <ChatModal users={results} setActive={setModalActive} />
        {/* <ChatModal setActive={setModalActive} /> */}
      </Modal>
      <Outlet />
    </ChatProvider>
  );
}
