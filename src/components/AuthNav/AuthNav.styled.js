import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AuthList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const AuthListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: rgba(247, 242, 242, 0.6);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;

export const AuthNavLink = styled(NavLink)`
  font-family: cursive;
  font-size: 18px;
  color: gray;
  text-decoration: none;
`;
