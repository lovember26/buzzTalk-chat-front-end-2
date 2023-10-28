import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const FriendsContainer = styled.div`
  flex: 1;
`;

export const StyledFriendsNav = styled.nav`
  background-color: #451952;

  height: 80px;
  padding-left: 26px;

  display: flex;
  align-items: center;
  gap: 68px;
  background: ${({ theme }) => theme.colors.purple};
  color: #696969;
  font-size: 14px;
  font-weight: 700;
  div {
    display: flex;
    gap: 8px;
  }
  ul {
    display: flex;
    gap: 16px;
  }
`;
export const StyledLink = styled(NavLink)`
  color: #696969;
  &.active {
    color: #0dc841;
  }
`;
