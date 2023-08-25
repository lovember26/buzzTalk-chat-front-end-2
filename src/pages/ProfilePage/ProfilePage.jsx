import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "redux/auth/authThunk";
import {
  selectUserName,
  selectImage,
  selectDescription,
} from "redux/user/userSelectors";

import {
  ProfilePageWrapper,
  ProfilePageUserInfoWrapper,
  EditProfilePageUserButtonBackText,
  EditProfilePageUserButtonBack,
  ProfilePageUserButtonEditButton,
  EditProfilePageUserButtonBackIconArrow,
  ProfilePageUserButtonEdit,
  ProfilePageUserAvatarWrapper,
  ProfilePageUserAvatar,
  ProfilePageUserInfoTextWrapper,
  ProfilePageUserInfoNickname,
  ProfilePageUserStatusBlockWrapper,
  ProfilePageUserStatusBlockIcon,
  ProfilePageUserStatusIcon,
  ProfilePageUserStatusBlockIconText,
  ProfilePageUserStatusBlock,
  ProfilePageUserStatusText,
  ProfilePageUserArrowButton,
  ProfilePageUserSettingsIconArrow,
  ProfilePageUserButtonsWrapper,
  ProfilePageUserLogout,
  ProfilePageUserDeleteAccount,
} from "./ProfilePage.styled";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const description = useSelector(selectDescription);
  const image = useSelector(selectImage);

  const goBack = () => navigate(-1);

  const handlelogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <ProfilePageWrapper>
      <ProfilePageUserInfoWrapper>
        <ProfilePageUserAvatarWrapper>
          <ProfilePageUserAvatar src={image} />
        </ProfilePageUserAvatarWrapper>
        <ProfilePageUserInfoTextWrapper>
          <ProfilePageUserInfoNickname>{username}</ProfilePageUserInfoNickname>
          <p>{description}</p>
        </ProfilePageUserInfoTextWrapper>
        <EditProfilePageUserButtonBack onClick={goBack}>
          <EditProfilePageUserButtonBackIconArrow size={30} />
          <EditProfilePageUserButtonBackText>
            Back
          </EditProfilePageUserButtonBackText>
        </EditProfilePageUserButtonBack>
        <ProfilePageUserButtonEditButton to="edit">
          <ProfilePageUserButtonEdit size={30} />
        </ProfilePageUserButtonEditButton>
      </ProfilePageUserInfoWrapper>
      <ProfilePageUserStatusBlockWrapper>
        <ProfilePageUserStatusBlockIcon>
          <ProfilePageUserStatusIcon size={30} />
          <ProfilePageUserStatusBlockIconText>
            Set status
          </ProfilePageUserStatusBlockIconText>
        </ProfilePageUserStatusBlockIcon>
        <ProfilePageUserStatusBlock>
          <ProfilePageUserStatusText>Online</ProfilePageUserStatusText>
          <ProfilePageUserArrowButton>
            <ProfilePageUserSettingsIconArrow size={35} />
          </ProfilePageUserArrowButton>
        </ProfilePageUserStatusBlock>
      </ProfilePageUserStatusBlockWrapper>
      <ProfilePageUserButtonsWrapper>
        <ProfilePageUserDeleteAccount>
          Delete account
        </ProfilePageUserDeleteAccount>
        <ProfilePageUserLogout onClick={handlelogOut}>
          Log out
        </ProfilePageUserLogout>
      </ProfilePageUserButtonsWrapper>
    </ProfilePageWrapper>
  );
};
