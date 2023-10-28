import { useState } from "react";
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
  FriendsLinkWrapper,
} from "./SidePanel.styled";
import { FriendsList } from "../../PrivateChatsList/PrivateChatsList";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button" to={"chats"}>
            <ChatsBtn />
          </StyledChatsBtn>

          <button type="button" onClick={() => setModalActive(true)}>
            <AddChatButton />
          </button>
          <PublicChatsList />
        </StyledNav>

        <SearchBar>
          <p>Private messages</p>

          <form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
            />
          </form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

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
