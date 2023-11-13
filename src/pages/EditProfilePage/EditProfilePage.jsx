import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputEditUserSchema } from "middlewares";
import { editPageRules } from "constants";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import {
  updateUserInfoThunk,
  generateGravatarUserInfoThunk,
  removeUserAvatarInfoThunk,
} from "redux/user/userThunk";
import {
  selectUserName,
  selectUserImage,
  selectUserDescription,
} from "redux/user/userSelectors";

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
  EditProfilePageImageButton,
  Icon,
} from "./EditProfilePage.styled";
import { useNavigate } from "react-router";

export default function EditProfilePage() {
  const [file, setFile] = useState("");
  const username = useSelector(selectUserName);
  const description = useSelector(selectUserDescription);
  const image = useSelector(selectUserImage);

  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(inputEditUserSchema),
    defaultValues: {
      name: username,
      aboutMe: description,
    },
  });

  const goBack = () => navigate(-1);

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleSetGravatar = async () => {
    await dispatch(generateGravatarUserInfoThunk());
  };

  const handleChangeAvatar = async (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveAvatar = async () => {
    await dispatch(removeUserAvatarInfoThunk());
  };

  const onSubmit = async ({ name, aboutMe }) => {
    try {
      const formData = new FormData();

      formData.append("image", file);
      formData.append("username", name);
      formData.append("description", aboutMe);

      await dispatch(updateUserInfoThunk(formData));
    } catch (error) {
      console.log("error updateUserInfo", error);
    }
  };

  const usernameError = selectInputNotification(errors["name"]);
  const aboutError = selectInputNotification(errors["aboutMe"]);

  return (
    <EditProfilePageWrapper>
      <EditProfilePageUserInfoWrapper>
        <EditProfilePageUserAvatarWrapper>
          <EditProfilePageUserAvatar src={image} />
        </EditProfilePageUserAvatarWrapper>
        <EditProfilePageUserInfoTextWrapper>
          <EditProfilePageUserInfoNickname>
            {username}
          </EditProfilePageUserInfoNickname>
        </EditProfilePageUserInfoTextWrapper>

        <EditProfilePageUserButtonBack onClick={goBack}>
          <EditProfilePageUserButtonBackIconArrow size={30} />

          <EditProfilePageUserButtonBackText>
            Back
          </EditProfilePageUserButtonBackText>
        </EditProfilePageUserButtonBack>

        <EditProfilePageUserButtonSave
          type="submit"
          form="edit"
          disabled={!isValid}
        >
          Done
        </EditProfilePageUserButtonSave>
      </EditProfilePageUserInfoWrapper>

      <EditProfilePageForm onSubmit={handleSubmit(onSubmit)} id="edit">
        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText error={usernameError}>
            Username
          </EditProfilePageFormLableText>
          <EditProfilePageFormInput
            {...register("name")}
            value={watch("name")}
            error={usernameError}
          />
          <Icon size={28} error={usernameError} />
          {usernameError ? (
            <InputNotification
              text={usernameError}
              error={usernameError}
              color={"red"}
            />
          ) : (
            <InputNotification text={editPageRules.USERNAME} />
          )}
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText error={aboutError}>
            About me
          </EditProfilePageFormLableText>
          <EditProfilePageFormInputAbout
            {...register("aboutMe")}
            value={watch("aboutMe")}
            error={aboutError}
          />
          <Icon size={28} error={aboutError} />
          {aboutError ? (
            <InputNotification
              text={aboutError}
              error={aboutError}
              color={"red"}
            />
          ) : (
            <InputNotification text={editPageRules.ABOUT} />
          )}
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>
            Change avatar
          </EditProfilePageFormLableText>
          <EditProfilePageImageButton type="button" onClick={handleClick}>
            Pick File
          </EditProfilePageImageButton>

          <EditProfilePageImageButton type="button" onClick={handleSetGravatar}>
            Set photo for Name
          </EditProfilePageImageButton>
          <EditProfilePageFormInputAbout
            className="hide"
            type="file"
            {...register("avatar")}
            ref={filePicker}
            accept="image/*,.png,.jpg,.gif,.web,.webp"
            onChange={handleChangeAvatar}
          />

          <EditProfilePageImageButton
            type="button"
            onClick={handleRemoveAvatar}
          >
            Delete avatar
          </EditProfilePageImageButton>
        </EditProfilePageFormInputWrapper>
      </EditProfilePageForm>
    </EditProfilePageWrapper>
  );
}
