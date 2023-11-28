import { Outlet } from "react-router-dom";
import { ReactComponent as PersonIcon } from "../../../images/man.svg";

import {
  FriendsContainer,
  StyledFriendsNav,
  StyledLink,
} from "./FriendsBar.styled";

export default function FriendsBar() {
  return (
    <FriendsContainer>
      <StyledFriendsNav>
        <div>
          <PersonIcon />
          <p>Friends</p>
        </div>
        <ul>
          <li>
            <StyledLink to="/chat-rooms/friends" end>All</StyledLink>
          </li>
          <li>
            <StyledLink to="online">Online</StyledLink>
          </li>
          <li>
            <StyledLink to="blocked">Blocked</StyledLink>
          </li>
          <li>
            <StyledLink to="add-friend">Add friend</StyledLink>
          </li>
        </ul>
        <StyledLink to="/profile">Profile</StyledLink>
      </StyledFriendsNav>
      <Outlet />
    </FriendsContainer>
  );
}
