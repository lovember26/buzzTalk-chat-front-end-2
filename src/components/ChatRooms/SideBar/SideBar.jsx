import { ReactComponent as AddChatButton } from "../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";
import NoFriends from "./NoFriends/NoFriends";
import {
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
} from "./SideBar.styled";

export default function SideBar() {
  return (
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
        <form>
          <SearchIcon />
          <input type="text" placeholder="Find or start a conversation" />
        </form>
        <NoFriends />
      </SearchBar>
    </StyledSideBar>
  );
}
