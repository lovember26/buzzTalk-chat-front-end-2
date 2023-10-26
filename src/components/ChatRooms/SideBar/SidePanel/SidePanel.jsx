import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";
import Modal from "components/common/Modal/Modal";
import CreateChatForm from "components/ChatRooms/CreateChatForm/CreateChatForm";
import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";

import {
  NavButtons,
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
} from "./SidePanel.styled";
import { StyledLink } from "../../FriendsBar/FriendsBar.styled";
import { FriendsList } from "../../FriendsList/FriendsList";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button">
            <ChatsBtn />
          </StyledChatsBtn>

          <button type="button" onClick={() => setModalActive(true)}>
            <AddChatButton />
          </button>
          <PublicChatsList />
        </StyledNav>

        <SearchBar>
          <p>Private messages</p>
          <NavButtons>
            <StyledLink to="friends">FriendsBar</StyledLink>
            <StyledLink to="chats">Chats</StyledLink>
            {/* <StyledLink to="chat-rooms/public">Chats</StyledLink> */}
          </NavButtons>
          <form>
            <SearchIcon />
            <input type="text" placeholder="Find or start a conversation" />
          </form>
          <FriendsList />
        </SearchBar>
      </StyledSideBar>

      <Modal active={modalActive} setActive={setModalActive}>
        <CreateChatForm />
      </Modal>
      <Outlet />
    </>
  );
}
