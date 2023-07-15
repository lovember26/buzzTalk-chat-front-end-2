import styled from "@emotion/styled";
import { AiFillEye } from "react-icons/ai";

export const LoginWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(247, 242, 242, 0.2);
  border: 2px solid gray;
  border-radius: 5px;
  padding: 20px;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
  color: gray;
  font-size: 36px;
  font-family: cursive;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const LoginLable = styled.label`
  font-family: cursive;
  font-size: 18px;
  color: gray;
  text-decoration: none;
  margin-bottom: 4px;
`;

export const LoginInput = styled.input`
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 350px;
  color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${(props) => props.theme.colors.input};

  margin-bottom: 10px;
  padding: 6px 10px;
  margin-bottom: 16px;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

export const LoginInputPassword = styled.input`
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 350px;
  color: ${(props) => props.theme.colors.mainText};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${(props) => props.theme.colors.input};
  padding: 6px 10px;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
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

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;

  padding: 8px 18px;
  margin-bottom: 15px;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: rgba(247, 242, 242, 0.6);

  font-family: cursive;
  font-size: 18px;
  color: gray;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;

export const LoginInputPasswordWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
`;

export const LoginButtonIconWrapper = styled.div`
  &.active {
    &::after {
      opacity: 0;
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 21px;
    right: 10px;
    width: 28px;
    height: 2px;
    background-color: lightgray;
    transform: rotate(45deg);
    transition: 0.3s all ease;
    opacity: 1;
  }
`;

export const LoginButtonIcon = styled(AiFillEye)`
  position: absolute;
  top: 10px;
  right: 12px;
  color: lightgray;
  cursor: pointer;
`;

export const LoginAuthLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginAuthLinkText = styled.p`
  color: gray;
  margin-right: 8px;

  font-family: cursive;
  font-size: 18px;
`;

export const LoginAuthLink = styled.p`
  color: gray;
  font-family: cursive;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;
