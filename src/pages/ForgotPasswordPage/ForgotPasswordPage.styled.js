import styled from "@emotion/styled";
import { AiFillExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ForgotPassTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 40px;
  }
`;

export const ForgotPassText = styled.p`
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 14px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: #777;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;

  // input {
  //   margin-bottom: 16px;
  //   padding-left: 16px;
  //   width: 343px;
  //   height: 56px;
  //   border: none;
  //   border-radius: 15px;
  //   background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  //   color: ${({ theme }) => theme.colors.white[100]};
  //   @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  //     background: ${({ theme }) => theme.colors.gray[100]};
  //     color: ${({ theme }) => theme.colors.black[100]};
  //   }
  // }
  button {
    width: fit-content;
    align-self: center;
    padding: 12px 60px;
    font-size: 16px;
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.BTN_COLOR};
    color: #fff;
    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
    }
  }
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
    error ? theme.colors.red[200] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.white[200]};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background: ${({ error, theme }) =>
    error ? theme.colors.ERROR_BACKGROUND : theme.colors.BTN_COLOR_HOVER};

  padding: 6px 10px;

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
    font-size: 24px;
    color: gray;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    background: ${({ error, theme }) =>
      error ? theme.colors.ERROR_BACKGROUND : theme.colors.gray[100]};
    color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.black[200]};
  }
`;

export const Icon = styled(AiFillExclamationCircle)`
  position: absolute;
  top: 13px;
  right: 12px;
  cursor: pointer;

  color: ${({ error }) => (error ? "#BD2816" : "transparent")};
`;

export const SignUpLink = styled(Link)`
  margin-top: 219px;
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
    & + svg {
      stroke: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
    }
  }
  + svg {
    stroke: ${({ theme }) => theme.colors.white[100]};
    width: 130px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
    + svg {
      stroke: ${({ theme }) => theme.colors.black[100]};
    }
  }
`;
