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
  // ProfilePageUserInfoTextLink,
  // ProfilePageUserInfoLink,
  ProfilePageUserStatusBlockWrapper,
  ProfilePageUserStatusBlockIcon,
  ProfilePageUserStatusIcon,
  ProfilePageUserStatusBlockIconText,
  ProfilePageUserStatusBlock,
  ProfilePageUserStatusText,
  // ProfilePageUserSettingsWrapper,
  // ProfilePageUserSettingsItem,
  // ProfilePageUserSettingsItemNotification,
  // ProfilePageUserSettingsItemText,
  // ProfilePageUserSettingsIcon,
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

  const handlelogOut = () => {
    dispatch(logOutThunk());
    navigate("/login", { replace: true });
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
          {/* <ProfilePageUserInfoTextLink>
            Link to your profile to chat with you
          </ProfilePageUserInfoTextLink> */}
          {/* <ProfilePageUserInfoLink>
            https://bz.me/mari@gmail.com
          </ProfilePageUserInfoLink> */}
        </ProfilePageUserInfoTextWrapper>
        <EditProfilePageUserButtonBack to="/home">
          <EditProfilePageUserButtonBackIconArrow size={30} />

          <EditProfilePageUserButtonBackText>
            Back
          </EditProfilePageUserButtonBackText>
        </EditProfilePageUserButtonBack>
        <ProfilePageUserButtonEditButton to="/edit">
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
      {/* <ProfilePageUserSettingsWrapper>
        <ProfilePageUserSettingsItem>
          <ProfilePageUserSettingsItemNotification>
            <ProfilePageUserSettingsIcon size={30} />
            <ProfilePageUserSettingsItemText>
              Privacy and security
            </ProfilePageUserSettingsItemText>
          </ProfilePageUserSettingsItemNotification>
          <ProfilePageUserArrowButton>
            <ProfilePageUserSettingsIconArrow size={35} />
          </ProfilePageUserArrowButton>
        </ProfilePageUserSettingsItem>
        <ProfilePageUserSettingsItem>
          <ProfilePageUserSettingsItemNotification>
            <ProfilePageUserSettingsIcon size={30} />
            <ProfilePageUserSettingsItemText>
              Notifications and sounds
            </ProfilePageUserSettingsItemText>
          </ProfilePageUserSettingsItemNotification>
          <ProfilePageUserArrowButton>
            <ProfilePageUserSettingsIconArrow size={35} />
          </ProfilePageUserArrowButton>
        </ProfilePageUserSettingsItem>
        <ProfilePageUserSettingsItem>
          <ProfilePageUserSettingsItemNotification>
            <ProfilePageUserSettingsIcon size={30} />
            <ProfilePageUserSettingsItemText>
              Language
            </ProfilePageUserSettingsItemText>
          </ProfilePageUserSettingsItemNotification>
          <ProfilePageUserArrowButton>
            <ProfilePageUserSettingsIconArrow size={35} />
          </ProfilePageUserArrowButton>
        </ProfilePageUserSettingsItem>
      </ProfilePageUserSettingsWrapper> */}
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

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { itemsOperations, itemsSelectors } from "redux/items";
// import Title from "components/common/Title/Title";
// import {
//   ItemsPageList,
//   ItemsPageItem,
//   ItemsPageText,
//   ItemsPageIconDelete,
// } from "./ItemsPage.styled";

// export const ItemsPage = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(itemsSelectors.selectItems);

//   useEffect(() => {
//     dispatch(itemsOperations.fetchItems());
//   }, [dispatch]);

//   const handleDeleteItem = (id) => {
//     console.log("id", id);
//     dispatch(itemsOperations.deleteItem(id));
//   };

//   return (
//     <>
//       <Title title="Items Page" />
//       <ItemsPageList>
//         {items.map(({ id, title }) => (
//           <ItemsPageItem key={id}>
//             <ItemsPageText>{title}</ItemsPageText>
//             <button onClick={() => handleDeleteItem(id)}>
//               <ItemsPageIconDelete size={30} />
//             </button>
//           </ItemsPageItem>
//         ))}
//       </ItemsPageList>
//     </>
//   );
// };
