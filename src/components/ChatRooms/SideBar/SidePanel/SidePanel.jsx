import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";
import Modal from "components/common/Modal/Modal";
import CreateChatForm from "components/ChatRooms/CreateChatForm/CreateChatForm";
import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";

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

import { PrivateChatList } from "../../PrivateChatsList/PrivateChatsList";
import { useDispatch, useSelector } from "react-redux";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllUsersThunk());
  // }, [dispatch]);

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

          {/* <PublicChatsList /> */}
          {/* <UserProfile /> */}
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
        <CreateChatForm users={users} />
      </Modal>
      <Outlet />
    </>
  );
}
