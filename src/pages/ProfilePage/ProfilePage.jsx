import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName } from "redux/user/userSelectors";
import { MainButton } from "components/common/MainButton/MainButton";
import avatar from "images/avatar.jpg";

import {
  ProfilePageWrapper,
  ProfilePageUserInfoWrapper,
  ProfilePageUserSettingsWrapper,
  ProfilePageUserAvatarWrapper,
  ProfilePageUserAvatar,
  ProfilePageUserInfoTextWrapper,
  ProfilePageUserInfoNickname,
} from "./ProfilePage.styled";

export const ProfilePage = () => {
  const username = useSelector(selectUserName);

  return (
    <ProfilePageWrapper>
      <ProfilePageUserInfoWrapper>
        <ProfilePageUserAvatarWrapper>
          <ProfilePageUserAvatar src={avatar} />
        </ProfilePageUserAvatarWrapper>
        <ProfilePageUserInfoTextWrapper>
          <ProfilePageUserInfoNickname>{username}</ProfilePageUserInfoNickname>
        </ProfilePageUserInfoTextWrapper>
      </ProfilePageUserInfoWrapper>
      <ProfilePageUserSettingsWrapper></ProfilePageUserSettingsWrapper>
      {/* <MainButton type="button" text="Log out" /> */}
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
