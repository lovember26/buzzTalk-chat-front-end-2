import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";

export const EditProfilePageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 20px 20px;
`;

export const EditProfilePageUserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 600px;
`;

export const EditProfilePageUserButtonBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  left: 20px;
`;

export const EditProfilePageUserButtonBackText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
  text-decoration: none;
`;

export const EditProfilePageUserButtonSave = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
  text-decoration: none;

  &:disabled {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const EditProfilePageUserButtonBackIconArrow = styled(
  MdOutlineKeyboardArrowLeft
)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.blue[100]};
`;

export const EditProfilePageUserAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;

export const EditProfilePageUserAvatar = styled.img`
  width: auto;
  height: 100%;
`;

export const EditProfilePageUserInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const EditProfilePageUserInfoNickname = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.black[100]};
  font-weight: 600;
  text-decoration: none;

  margin-bottom: 8px;

  &::after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: green;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const EditProfilePageForm = styled.form``;

export const EditProfilePageFormInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

export const EditProfilePageFormLableText = styled.label`
  color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : theme.colors.black[100]};

  font-size: 18px;
  text-decoration: none;
  margin-bottom: 8px;
`;

export const EditProfilePageFormInput = styled.input`
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.gray[100]};

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
    font-size: 20px;
    color: ${({ theme, error }) =>
      error ? theme.colors.red[100] : theme.colors.gray[200]};
  }
`;

export const EditProfilePageFormInputAbout = styled.input`
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.gray[100]};

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
    font-size: 20px;

    color: ${({ theme, error }) =>
      error ? theme.colors.red[100] : theme.colors.gray[200]};
  }
`;

export const EditProfilePageImageButton = styled.button`
  color: ${({ error, theme }) =>
    error ? theme.colors.red[100] : theme.colors.black[100]};

  font-size: 18px;
  text-decoration: none;

  margin-bottom: 10px;
`;

export const Icon = styled(AiFillExclamationCircle)`
  position: absolute;
  top: 42px;
  right: 12px;
  cursor: pointer;

  color: ${({ error, theme }) => {
    if (error) {
      return theme.colors.red[100];
    }
    return "transparent";
  }};
`;
