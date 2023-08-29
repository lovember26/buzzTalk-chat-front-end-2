import styled from "@emotion/styled";
import { AiFillExclamationCircle } from "react-icons/ai";

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

export const Lable = styled.label`
  color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : theme.colors.black[100]};
  font-family: cursive;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.gray[100]};

  padding: 6px 10px;

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 2px;
  }

  &::placeholder {
    font-family: cursive;
    font-size: 18px;
    color: gray;
  }

  &[value] {
    font-family: cursive;
    font-size: 24px;
    color: gray;
  }
`;

export const Icon = styled(AiFillExclamationCircle)`
  position: absolute;
  top: 13px;
  right: 12px;
  cursor: pointer;

  color: ${({ error }) => (error ? "red" : "transparent")};
`;
