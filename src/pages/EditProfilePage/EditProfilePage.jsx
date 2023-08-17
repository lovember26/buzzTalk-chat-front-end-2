// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { inputEditUserSchema } from "middlewares";
// import {
//   updateUserInfoThunk,
//   generateGravatarUserInfoThunk,
// } from "redux/user/userThunk";
// // import { Link, useNavigate } from "react-router-dom";
// import {
//   selectUserName,
//   selectImage,
//   selectDescription,
// } from "redux/user/userSelectors";
// import avatar from "images/avatar.jpg";

// import { InputNotification } from "components/common/InputNotification/InputNotification";

// import {
//   EditProfilePageWrapper,
//   EditProfilePageUserInfoWrapper,
//   EditProfilePageUserButtonBack,
//   EditProfilePageUserButtonBackIconArrow,
//   EditProfilePageUserButtonBackText,
//   EditProfilePageUserButtonSave,
//   EditProfilePageUserAvatarWrapper,
//   EditProfilePageUserAvatar,
//   EditProfilePageUserInfoTextWrapper,
//   EditProfilePageUserInfoNickname,
//   EditProfilePageForm,
//   EditProfilePageFormInputWrapper,
//   EditProfilePageFormLableText,
//   EditProfilePageFormInput,
//   EditProfilePageFormInputAbout,
// } from "./EditProfilePage.styled";

// export const EditProfilePage = () => {
// const [newAvatar, setNewAvatar] = useState(null);

// const username = useSelector(selectUserName);
// const description = useSelector(selectDescription);
// const image = useSelector(selectImage);

//   // const filePicker = useRef(null);
//   const dispatch = useDispatch();

//   // console.log("file", file);

//   console.log("username", username);
//   console.log("image", image);
//   console.log("description", description);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isValid },
//   } = useForm({
//     mode: "onChange",
//     resolver: joiResolver(inputEditUserSchema),
//     defaultValues: {
//       name: username,
//       aboutMe: description,
//       // avatar: "",
//     },
//   });

//   // console.log("errors", errors);

// const handleClick = async () => {
//   // filePicker.current.click();
//   const data = await dispatch(generateGravatarUserInfoThunk());
//   console.log("data generateGravatar", data.payload.gravatar);

//   setNewAvatar(data.payload.gravatar);
// };

//   // const handleChangeAvatar = (event) => {
//   //   console.log("event.target.files", event.target.files);
//   //   setFile(event.target.files[0]);
//   // };

//   const onSubmit = async ({ name, aboutMe }) => {
//     // console.log(" name, aboutMe, avatar", name, aboutMe);

//     try {
//       // const updatedUserData = {
//       //   username: name,
//       //   image: newAvatar,
//       //   description: aboutMe,
//       // };

//       // const data = await dispatch(updateUserInfoThunk(updatedUserData));

//       const formData = new FormData();

//       formData.append("image", newAvatar);
//       formData.append("username", name);
//       formData.append("description", aboutMe);

//       // console.log("formData", formData);
//       const data = await dispatch(updateUserInfoThunk(formData));

//       // ================================
//       // const data = await dispatch(
//       //   updateUserInfoThunk({
//       // username: name,
//       // image: file,
//       // description: aboutMe,
//       //   })
//       // );

//       console.log("data updateUserInfo", data);

//       // reset();
//     } catch (error) {
//       console.log("error updateUserInfo", error);
//     }
//   };

//   return (
//     <EditProfilePageWrapper>
//       <EditProfilePageUserInfoWrapper>
//         <EditProfilePageUserAvatarWrapper>
//           {/* <EditProfilePageUserAvatar src={avatar} /> */}
//           <EditProfilePageUserAvatar src={image} />
//         </EditProfilePageUserAvatarWrapper>
//         <EditProfilePageUserInfoTextWrapper>
//           <EditProfilePageUserInfoNickname>
//             {username}
//           </EditProfilePageUserInfoNickname>
//         </EditProfilePageUserInfoTextWrapper>

//         <EditProfilePageUserButtonBack to="/profile">
//           <EditProfilePageUserButtonBackIconArrow size={30} />

//           <EditProfilePageUserButtonBackText>
//             Back
//           </EditProfilePageUserButtonBackText>
//         </EditProfilePageUserButtonBack>
//       </EditProfilePageUserInfoWrapper>

//       <EditProfilePageForm onSubmit={handleSubmit(onSubmit)}>
//         <EditProfilePageFormInputWrapper>
//           <EditProfilePageFormLableText>Username</EditProfilePageFormLableText>
//           <EditProfilePageFormInput {...register("name")} />
//         </EditProfilePageFormInputWrapper>

//         <EditProfilePageFormInputWrapper>
//           <EditProfilePageFormLableText>About me</EditProfilePageFormLableText>
//           <EditProfilePageFormInputAbout {...register("aboutMe")} />
//           <InputNotification text="You can use maximum 60 characters" />
//         </EditProfilePageFormInputWrapper>

//         <EditProfilePageFormInputWrapper>
//           <EditProfilePageFormLableText>
//             Change avatar
//           </EditProfilePageFormLableText>

// <button type="button" onClick={handleClick}>
//   Set photo for Name
// </button>

//           {/* <EditProfilePageFormInputAbout
//             className="hide"
//             type="file"
//             {...register("avatar")}
//             ref={filePicker}
//             // accept="image/*,.png,.jpg,.gif,.web,.webp"
//             onChange={handleChangeAvatar}
//           /> */}
//         </EditProfilePageFormInputWrapper>

//         <EditProfilePageUserButtonSave type="submit">
//           Done
//         </EditProfilePageUserButtonSave>
//       </EditProfilePageForm>
//     </EditProfilePageWrapper>
//   );
// };

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputEditUserSchema } from "middlewares";
import {
  updateUserInfoThunk,
  generateGravatarUserInfoThunk,
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

export const EditProfilePage = () => {
  const [file, setFile] = useState("");
  // console.log("file", file);
  const username = useSelector(selectUserName);
  const description = useSelector(selectDescription);
  const image = useSelector(selectImage);

  const filePicker = useRef(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(inputEditUserSchema),
    defaultValues: {
      name: username,
      aboutMe: description,
      // avatar: "",
    },
  });

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleSetGravatar = async () => {
    await dispatch(generateGravatarUserInfoThunk());
  };

  const handleChangeAvatar = async (event) => {
    setFile(event.target.files[0]);

    // const formData = new FormData();
    // console.log("file перед відправкою", file);
    // formData.append("image", file);
    // await dispatch(updateUserInfoThunk(formData));
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

        <EditProfilePageUserButtonBack to="/profile">
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
        </EditProfilePageFormInputWrapper>
      </EditProfilePageForm>
    </EditProfilePageWrapper>
  );
};
