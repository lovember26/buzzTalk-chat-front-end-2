import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { AiFillExclamationCircle } from "react-icons/ai";

export const LoginPageLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  & svg {
    stroke: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 24px;
    & svg {
      stroke: ${({ theme }) => theme.colors.black[100]};
    }
  }
`;

export const LoginPageLinkForgotPassword = styled(Link)`
  margin-left: auto;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.white[100]};

  font-size: 16px;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
    text-decoration: underline;
  }
`;

export const LoginPageRedirectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LoginPageRedirectText = styled.p`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.white[100]};

  font-size: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
  }
`;

export const LoginPageRedirectLink = styled.p`
  color: ${({ theme }) => theme.colors.white[100]};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  font-size: 16px;

  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
    text-decoration: underline;
  }
`;

export const LoginPageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;

  margin-left: auto;
  margin-right: auto;
  width: 343px;
`;

export const BlockInputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : "transparent"};

  border-color: ${({ error, theme, wrong }) => {
    if (error && wrong < 3) {
      return theme.colors.red[100];
    }

    if (wrong >= 3) {
      return theme.colors.gray[200];
    }

    return "transparent";
  }};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme, wrong }) => {
    if (error && wrong < 3) {
      return theme.colors.ERROR_BACKGROUND;
    }

    if (wrong >= 3) {
      return theme.colors.gray[100];
    }

    return theme.colors.BTN_COLOR_HOVER;
  }};

  padding: 6px 50px 6px 10px;

  &:hover {
    border-width: 1px;
  }
  &:focus {
    border-width: 1px;
  }

  &::placeholder {
    font-size: 18px;
    color: gray;
  }

  &[value] {
    font-size: 14px;
    color: ${({ error, theme, wrong }) => {
      if (error && wrong < 3) {
        return theme.colors.red[100];
      }

      if (wrong >= 3) {
        return theme.colors.gray[200];
      }

      return theme.colors.white[100];
    }};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    background-color: ${({ error, theme, wrong }) => {
      if (error && wrong < 3) {
        return theme.colors.ERROR_BACKGROUND;
      }

      if (wrong >= 3) {
        return theme.colors.gray[100];
      }

      return theme.colors.gray[100];
    }};
    &[value] {
      color: ${(props) => props.theme.colors.black[100]};
    }
  }
`;

export const Icon = styled(AiFillExclamationCircle)`
  position: absolute;
  top: 13px;
  right: 12px;
  cursor: pointer;

  color: ${({ error, theme, wrong }) => {
    if (error && wrong < 3) {
      return theme.colors.red[100];
    }

    if (wrong >= 3) {
      return theme.colors.gray[200];
    }

    return "transparent";
  }};
`;

export const TextAttemptError = styled.p`
  font-size: 12px;
  text-decoration: none;
  color: ${({ theme, wrong }) =>
    wrong < 3 ? theme.colors.red[100] : theme.colors.gray[200]};
`;
