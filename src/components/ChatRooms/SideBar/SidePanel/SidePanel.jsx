import { Outlet } from "react-router-dom";
import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

import {
  NavButtons,
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
} from "./SidePanel.styled";
import { StyledLink } from "../../FriendsBar/FriendsBar.styled";
import { FriendsList } from "../../FriendsList/FriendsList";
// import FriendsList from "../../FriendsList/FriendsList";

export default function SidePanel() {
  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button">
            <ChatsBtn />
          </StyledChatsBtn>
          <button type="button">
            <AddChatButton />
          </button>
        </StyledNav>
        <SearchBar>
          <p>Private messages</p>
          <NavButtons>
            <StyledLink to="friends">FriendsBar</StyledLink>
            <StyledLink to="chats">Chats</StyledLink>
          </NavButtons>
          <form>
            <SearchIcon />
            <input type="text" placeholder="Find or start a conversation" />
          </form>
          <FriendsList />
        </SearchBar>
      </StyledSideBar>
      <Outlet />
    </>
  );
}
