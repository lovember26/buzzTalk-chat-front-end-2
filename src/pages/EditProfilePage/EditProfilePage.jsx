import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputEditUserSchema } from "middlewares";
import {
  updateUserInfoThunk,
  generateGravatarUserInfoThunk,
  removeUserAvatarInfoThunk,
} from "redux/user/userThunk";
import {
  selectUserName,
  selectImage,
  selectDescription,
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
} from "./EditProfilePage.styled";
import { useNavigate } from "react-router";

export default function EditProfilePage() {
  const [file, setFile] = useState("");
  const username = useSelector(selectUserName);
  const description = useSelector(selectDescription);
  const image = useSelector(selectImage);

  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
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

        <EditProfilePageUserButtonSave type="submit" form="edit">
          Done
        </EditProfilePageUserButtonSave>
      </EditProfilePageUserInfoWrapper>

      <EditProfilePageForm onSubmit={handleSubmit(onSubmit)} id="edit">
        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>Username</EditProfilePageFormLableText>
          <EditProfilePageFormInput {...register("name")} />
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>About me</EditProfilePageFormLableText>
          <EditProfilePageFormInputAbout {...register("aboutMe")} />
          <InputNotification text="You can use maximum 60 characters" />
        </EditProfilePageFormInputWrapper>

        <EditProfilePageFormInputWrapper>
          <EditProfilePageFormLableText>
            Change avatar
          </EditProfilePageFormLableText>
          <button type="button" onClick={handleClick}>
            Pick File
          </button>

          <button type="button" onClick={handleSetGravatar}>
            Set photo for Name
          </button>
          <EditProfilePageFormInputAbout
            className="hide"
            type="file"
            {...register("avatar")}
            ref={filePicker}
            accept="image/*,.png,.jpg,.gif,.web,.webp"
            onChange={handleChangeAvatar}
          />

          <button type="button" onClick={handleRemoveAvatar}>
            Delete avatar
          </button>
        </EditProfilePageFormInputWrapper>
      </EditProfilePageForm>
    </EditProfilePageWrapper>
  );
}
