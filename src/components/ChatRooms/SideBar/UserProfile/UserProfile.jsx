import { useDispatch, useSelector } from "react-redux";
import { selectUserDescription, selectUserImage, selectUserName } from "redux/user/userSelectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserCard, UserProfileWrapper } from "./UserProfile.styled";
import { ReactComponent as Status } from "../../../../images/status.svg";
import { ReactComponent as EditProfile } from "../../../../images/edit-profile.svg";
import { ReactComponent as EditProfileSmall } from "../../../../images/edit-btn-small.svg";
import { ReactComponent as HideUser } from "../../../../images/hide-user.svg";
import { ReactComponent as ArrowRight } from "../../../../images/user-arrow-right.svg";
import { ReactComponent as UserIcon } from "../../../../images/user-logo.svg";
import { ReactComponent as NotificationIcon } from "../../../../images/user-notification.svg";
import { ReactComponent as SecurityIcon } from "../../../../images/user-security.svg";
import { ReactComponent as LanguageIcon } from "../../../../images/user-language.svg";
import { ReactComponent as ArrowLeft } from "../../../../images/arrow-left.svg";
import { ReactComponent as Camera } from "../../../../images/camera.svg";

import { useState } from "react";
import { logOutThunk } from "redux/auth/authThunk";
import EditPhotoPopUp from "./EditPhotoPopUp/EditPhotoPopUp";
import DefaultAvatar from "../../../../images/default-avatar.svg"
import { useForm } from "react-hook-form";
import { inputEditUserSchema } from "middlewares";
import { updateUserInfoThunk } from "redux/user/userThunk";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import { editPageRules } from "constants";
export default function UserProfile() {

  const dispatch=useDispatch();
  
  const username = useSelector(selectUserName);
  const description = useSelector(selectUserDescription);
  const image = useSelector(selectUserImage);
  const [file, setFile] = useState("");
  
  const [isProfileOpen, setIsProfileOpen]=useState(false);
  const [isEditOpen,setIsEditOpen]=useState(false);
const [isPopUpOpen, setIsPopUpOpen]=useState(false)

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
const onSubmit = async ({ name, aboutMe }) => {
  console.log("hello");
  try {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("username", name);
    formData.append("description", aboutMe);

    await dispatch(updateUserInfoThunk(formData));
    setIsEditOpen(false);
  } catch (error) {
    console.log("error updateUserInfo", error);
  }
};

const usernameError = selectInputNotification(errors["name"]);
const aboutError = selectInputNotification(errors["aboutMe"]);

  const openProfile=()=>{
    
    setIsProfileOpen(true);
  };
  const closeProfile=()=>{
    setIsProfileOpen(false);
    setIsEditOpen(false);
  }
  const toggleEdit=()=>{
    
    setIsEditOpen((prevState) => !prevState);
  }
  const handlelogOut = () => {
    dispatch(logOutThunk());
  };

  const togglePopUp=()=>{
    setIsPopUpOpen((prevState) => !prevState);
  }
 
  return (
    <UserProfileWrapper>
      <button className="showUserCard" onClick={openProfile}>
        <img className="smallAvatar" src={image ? image : DefaultAvatar} alt="avatar" />
      </button>
      {isProfileOpen && <UserCard>
        {!isEditOpen &&<button className="hideUser" onClick={closeProfile}>
          <HideUser />
        </button>}
        {!isEditOpen ? (
            <div>
              <div className="header-wrapper">
        <div className="userInfo">
          <button className="userAvatar">
            <img src={image ? image : DefaultAvatar} alt="avatar" />
          </button>
          </div>
         
          <div className="container">
            <div className="nameAndStatusWrapper">
              <p className="userName">{username}</p>
              <Status />
            </div>
            <p className="text">Link to your profile to chat with you</p>
            <p className="chat-link">https://bz.me/mari@gmail.com</p>
          </div>
        <button className="editBtn" onClick={toggleEdit}>
            <EditProfileSmall className="edit-small" />
            <EditProfile className="edit"/>
          </button>
          </div>
        
        <div className="editOptions">
        <ul>
          <li className="set-status-item">
            <UserIcon />
            <p>Set status</p>
            <div className="userStatus"><Status />
            <p>online</p></div>
            <button>
              <ArrowRight className="arrow-right"/>
            </button>
          </li>
          <li className="list-item notification-item">
            <NotificationIcon />
            <div className="border-bottom">
            <p>Notifications and sounds</p>
            <button>
              <ArrowRight />
            </button>
            </div>
          </li>
          <li className="list-item security-item">
            <SecurityIcon />
            <div className="border-bottom">
            <p>Privacy and security</p>
            <button>
              <ArrowRight />
            </button>
            </div>
          </li>
          <li className="list-item language-item">
            <LanguageIcon />
            <div className="border-bottom">
            <p>Language</p>
            <button>
              <ArrowRight />
            </button>
            </div>
          </li>
        </ul>
        <button className="deleteBtn">Delete account</button>
        <button className="logOutBtn" onClick={handlelogOut}>Log out</button></div></div>):(
          <div className="edit-container">
             {isPopUpOpen && <EditPhotoPopUp setFile={setFile} setIsPopUpOpen={setIsPopUpOpen}/>}
            <button className="hideUser" onClick={closeProfile}>
          <HideUser />
        </button>
            <div className="navigation">
            <button type="button" className="button-back" onClick={toggleEdit}>
              <ArrowLeft/>Back</button>
              <button type="submit"
          form="edit"
          disabled={!isValid} className="button-done">Done</button>
              </div>
              <div className="edit-avatar-container">
              <button className="userAvatar">
            <img src={image ? image : DefaultAvatar} alt="avatar" />
          </button>
          <button type="button" className="button-new-photo" onClick={togglePopUp}>New Photo</button>
          
          </div>
          <div className="header-wrapper">
            
        <div className="userInfo">
          <button className="userAvatar" onClick={togglePopUp}>
          <div className="image-container">
          <img src={image ? image : DefaultAvatar} alt="avatar" />
          <Camera/>
      <div className="overlay">
       
      </div>
  
    </div>
          </button>
         
          </div>
          <div className="container">
            <div className="nameAndStatusWrapper">
              <p className="userName">{username}</p>
              <Status />
            </div>
            <p className="text">Link to your profile to chat with you</p>
            <p className="chat-link">https://bz.me/mari@gmail.com</p>
            
          </div>
          <button  type="submit"
          form="edit"
          disabled={!isValid} className="button-done">Done</button>
          </div>
         
            <form className="editInputs" onSubmit={handleSubmit(onSubmit)} id="edit">
              <div>
                <label error={usernameError}>Username</label>
                <input type="text"  {...register("name")}
            value={watch("name")}
            error={usernameError}></input>
               {usernameError ? (
            <InputNotification
              text={usernameError}
              error={usernameError}
              color={"red"}
            />
          ) : (
            <InputNotification text={editPageRules.USERNAME} />
          )}
                </div>
                <div>
                <label error={aboutError}>About me</label>
                <textarea type="text" {...register("aboutMe")}
            value={watch("aboutMe")}
            error={aboutError} ></textarea>
            {aboutError ? (
            <InputNotification
              text={aboutError}
              error={aboutError}
              color={"red"}
            />
          ) : (
            <InputNotification text={editPageRules.ABOUT} />
          )}
                <p>You can use maximum 60 characters</p>
              </div>
            </form>
          </div>
        )}
      </UserCard>}
    </UserProfileWrapper>
  );
}
