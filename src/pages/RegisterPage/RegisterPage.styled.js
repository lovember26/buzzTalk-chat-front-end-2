import styled from "@emotion/styled";
import { AiFillExclamationCircle } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const AuthTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  text-transform: capitalize;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 32px;
    margin-top: 40px;
  }
`;

export const RegisterPageRedirectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterPageRedirectLink = styled.p`
  color: rgba(255, 255, 255, 0.5);

  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: #777;
  }
`;

export const RegisterPageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

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

export const Label = styled.label`
  color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.white[100]};
  text-decoration: none;
  margin-bottom: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.black[100]};
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  // color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme }) =>
    error ? theme.colors.ERROR_BACKGROUND : theme.colors.BTN_COLOR_HOVER};

  padding: 6px 50px 6px 10px;

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 2px;
  }

  &[value] {
    font-size: 14px;
    color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.white[100]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    background-color: ${({ error, theme }) =>
      error ? theme.colors.ERROR_BACKGROUND : theme.colors.gray[100]};
    &[value] {
      color: ${({ error, theme }) =>
        error ? theme.colors.red[200] : theme.colors.black[100]};
    }
  }
`;

export const Icon = styled(AiFillExclamationCircle)`
  position: absolute;
  top: 13px;
  right: 12px;
  cursor: pointer;

  color: ${({ error }) => (error ? "#BD2816" : "transparent")};
`;
