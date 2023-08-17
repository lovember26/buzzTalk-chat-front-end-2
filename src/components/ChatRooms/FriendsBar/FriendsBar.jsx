import { Outlet } from "react-router-dom";
import { ReactComponent as PersonIcon } from "../../../images/man.svg";
import { StyledFriendsNav, StyledLink } from "./FriendsBar.styled";

export const FriendsBar = () => {
  return (
    <div>
      <StyledFriendsNav>
        <div>
          <PersonIcon />
          <p>Friends</p>
        </div>
        <ul>
          <li>
            <StyledLink to="/chat-rooms/friends/all">All</StyledLink>
          </li>
          <li>
            <StyledLink to="/chat-rooms/friends/online">Online</StyledLink>
          </li>
          <li>
            <StyledLink to="/chat-rooms/friends/blocked">Blocked</StyledLink>
          </li>
          <li>
            <StyledLink to="/chat-rooms/friends/add-friend">
              Add friend
            </StyledLink>
          </li>
        </ul>
      </StyledFriendsNav>
      <Outlet />
    </div>
  );
};
