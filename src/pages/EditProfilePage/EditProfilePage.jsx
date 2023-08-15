import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUserName } from "redux/user/userSelectors";
import avatar from "images/avatar.jpg";

import { InputNotification } from "components/common/InputNotification/InputNotification";

import {
  EditProfilePageWrapper,
  EditProfilePageUserInfoWrapper,
  EditProfilePageUserButtonBack,
  EditProfilePageUserButtonBackIconArrow,
  EditProfilePageUserButtonBackText,
  EditProfilePageUserButtonSave,
  EditProfilePageUserAvatarWrapper,
  EditProfilePageUserAvatar,
  EditProfilePageUserInfoTextWrapper,
  EditProfilePageUserInfoNickname,
  EditProfilePageForm,
  EditProfilePageFormInputWrapper,
  EditProfilePageFormLableText,
  EditProfilePageFormInput,
  EditProfilePageFormInputAbout,
} from "./EditProfilePage.styled";

export const EditProfilePage = () => {
  const username = useSelector(selectUserName);

  return (
    <EditProfilePageWrapper>
      <EditProfilePageUserInfoWrapper>
        <EditProfilePageUserAvatarWrapper>
          <EditProfilePageUserAvatar src={avatar} />
        </EditProfilePageUserAvatarWrapper>
        <EditProfilePageUserInfoTextWrapper>
          <EditProfilePageUserInfoNickname>
            {username}
          </EditProfilePageUserInfoNickname>
        </EditProfilePageUserInfoTextWrapper>

        <EditProfilePageUserButtonSave type="submit">
          Ready
        </EditProfilePageUserButtonSave>

        <EditProfilePageUserButtonBack to="/profile">
          <EditProfilePageUserButtonBackIconArrow size={30} />

          <EditProfilePageUserButtonBackText>
            Back
          </EditProfilePageUserButtonBackText>
        </EditProfilePageUserButtonBack>
      </EditProfilePageUserInfoWrapper>

      <EditProfilePageForm>
        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>
            Display name
          </EditProfilePageFormLableText>
          <EditProfilePageFormInput />
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>Username</EditProfilePageFormLableText>
          <EditProfilePageFormInput />
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>About me</EditProfilePageFormLableText>
          <EditProfilePageFormInputAbout />
          <InputNotification text="You can use maximum 60 characters" />
        </EditProfilePageFormInputWrapper>
      </EditProfilePageForm>
    </EditProfilePageWrapper>
  );
};
