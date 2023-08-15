import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 20px;
`;

export const AuthListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 150px;

  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.black[100]};
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white[100]};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.black[200]};
    border: 1px solid ${({ theme }) => theme.colors.black[200]};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const AuthNavSignUpLink = styled(NavLink)`
  font-family: cursive;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;
`;

export const AuthNavSignInLink = styled(NavLink)`
  font-family: cursive;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white[100]};
  text-decoration: none;
`;
