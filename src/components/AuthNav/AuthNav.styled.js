import styled from "@emotion/styled";
import { TITLE_COLOR } from "constants";
import { BTN_COLOR } from "constants";
import { NavLink } from "react-router-dom";

export const AuthList = styled.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
`;

export const AuthListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 150px;

  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.black[100]};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white[100]};

  &:nth-of-type(even) {
    background-color: ${BTN_COLOR};
    border: 1px solid ${BTN_COLOR};
  }

  &:hover,
  &:focus {
    background-color: ${TITLE_COLOR};
  }
`;

export const AuthNavSignUpLink = styled(NavLink)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;
`;

export const AuthNavSignInLink = styled(NavLink)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white[100]};
  text-decoration: none;
`;
