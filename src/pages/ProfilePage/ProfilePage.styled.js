import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { RiNotification2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

export const ProfilePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 20px 20px;
`;

export const ProfilePageUserInfoWrapper = styled.div`
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
  font-family: cursive;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
  text-decoration: none;
`;

export const EditProfilePageUserButtonBackIconArrow = styled(
  MdOutlineKeyboardArrowLeft
)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.blue[100]};
`;

export const ProfilePageUserButtonEditButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  right: 20px;

  width: 60px;
  height: 60px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ProfilePageUserButtonEdit = styled(GrEdit)``;

export const ProfilePageUserAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
`;

export const ProfilePageUserAvatar = styled.img`
  width: auto;
  height: 100%;
`;

export const ProfilePageUserInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const ProfilePageUserInfoNickname = styled.p`
  font-family: cursive;
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

export const ProfilePageUserInfoTextLink = styled.p`
  font-family: cursive;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  text-decoration: none;

  margin-bottom: 8px;
`;

export const ProfilePageUserInfoLink = styled.p`
  font-family: cursive;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
  text-decoration: none;
`;

export const ProfilePageUserStatusBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;

  margin-bottom: 40px;
  padding: 10px 20px;
`;

export const ProfilePageUserStatusBlockIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePageUserStatusBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePageUserStatusText = styled.p`
  font-family: cursive;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;

  margin-right: 8px;

  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: green;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const ProfilePageUserStatusBlockIconText = styled.p`
  font-family: cursive;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;
`;

export const ProfilePageUserStatusIcon = styled(IoIosTimer)`
  margin-right: 8px;
`;

export const ProfilePageUserSettingsWrapper = styled.ul`
  width: 600px;
  margin-bottom: 20px;
`;

export const ProfilePageUserSettingsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 10px 0;
  border-bottom: 1px solid dray;
`;

export const ProfilePageUserSettingsItemNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePageUserSettingsItemText = styled.p`
  font-family: cursive;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;
`;

export const ProfilePageUserSettingsIcon = styled(RiNotification2Fill)`
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-right: 8px;
`;

export const ProfilePageUserSettingsIconArrow = styled(
  MdOutlineKeyboardArrowRight
)`
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const ProfilePageUserArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePageUserButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const ProfilePageUserDeleteAccount = styled.button`
  font-family: cursive;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;

  padding: 0;
  margin-bottom: 10px;
`;

export const ProfilePageUserLogout = styled.button`
  font-family: cursive;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black[100]};
  text-decoration: none;
`;
