import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { AiFillExclamationCircle } from "react-icons/ai";
import { TEXT_COLOR } from "constants";

export const LoginPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  margin-top: 40px;
  color: ${TEXT_COLOR};
  font-size: 32px;
`;

export const LoginPageLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginPageLinkForgotPassword = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  color: black;

  font-size: 18px;
  text-decoration: underline;
`;

export const LoginPageRedirectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LoginPageRedirectText = styled.p`
  margin-right: 5px;
  color: black;

  font-size: 18px;
`;

export const LoginPageRedirectLink = styled.p`
  color: black;

  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
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

export const Lable = styled.label`
  color: ${({ error, theme, wrong }) => {
    if (error && wrong < 3) {
      return theme.colors.red[100];
    }

    if (wrong >= 3) {
      return theme.colors.gray[200];
    }

    return theme.colors.black[100];
  }};

  font-size: 16px;
  font-weight: 400;

  margin-bottom: 2px;
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
      return theme.colors.red[200];
    }

    if (wrong >= 3) {
      return theme.colors.gray[100];
    }

    return theme.colors.gray[100];
  }};

  padding: 6px 50px 6px 10px;

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 2px;
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

      return theme.colors.black;
    }};
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
