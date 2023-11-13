import { useSelector } from "react-redux";
import { selectUserImage, selectUserName } from "redux/user/userSelectors";

import { UserCard, UserProfileWrapper } from "./UserProfile.styled";
import { ReactComponent as Status } from "../../../../images/status.svg";
import { ReactComponent as EditProfile } from "../../../../images/edit-profile.svg";
import { ReactComponent as HideUser } from "../../../../images/hide-user.svg";
import { ReactComponent as ArrowRight } from "../../../../images/user-arrow-right.svg";
import { ReactComponent as UserIcon } from "../../../../images/user-logo.svg";
import { ReactComponent as NotificationIcon } from "../../../../images/user-notification.svg";
import { ReactComponent as SecurityIcon } from "../../../../images/user-security.svg";
import { ReactComponent as LanguageIcon } from "../../../../images/user-language.svg";
export default function UserProfile() {
  const username = useSelector(selectUserName);
  //   const description = useSelector(selectDescription);
  const image = useSelector(selectUserImage);
  return (
    <UserProfileWrapper>
      <button className="showUserCard">
        <img className="smallAvatar" src={image} alt="avatar" />
      </button>
      <UserCard>
        <button className="hideUser">
          <HideUser />
        </button>
        <div className="userInfo">
          <button className="userAvatar">
            <img src={image} alt="avatar" />
          </button>

          <div className="container">
            <div className="nameAndStatusWrapper">
              <p className="userName">{username}</p>
              <Status />
            </div>
            <p className="text">Link to your profile to chat with you</p>
            <p>https://bz.me/mari@gmail.com</p>
          </div>
          <button className="editBtn">
            <EditProfile />
          </button>
        </div>
        <ul>
          <li>
            <UserIcon />
            <p>Set status</p>
            <button>
              <ArrowRight />
            </button>
          </li>
          <li>
            <NotificationIcon />
            <p>Notifications and sounds</p>
            <button>
              <ArrowRight />
            </button>
          </li>
          <li>
            <SecurityIcon />
            <p>Privacy and security</p>
            <button>
              <ArrowRight />
            </button>
          </li>
          <li>
            <LanguageIcon />
            <p>Language</p>
            <button>
              <ArrowRight />
            </button>
          </li>
        </ul>
        <button className="deleteBtn">Delete account</button>
        <button className="logOutBtn">Log out</button>
      </UserCard>
    </UserProfileWrapper>
  );
}
