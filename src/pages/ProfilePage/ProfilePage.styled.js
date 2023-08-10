import styled from "@emotion/styled";

export const ProfilePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  margin-top: 20px;
  /* margin: 0 auto; */
`;

export const ProfilePageUserInfoWrapper = styled.div``;

export const ProfilePageUserSettingsWrapper = styled.div``;

export const ProfilePageUserAvatarWrapper = styled.div`
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
`;

export const ProfilePageUserInfoNickname = styled.p`
  font-family: cursive;
  font-size: 24px;
  color: gray;
  font-weight: 700;
  text-decoration: none;

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

// import styled from "@emotion/styled";
// import { AiFillDelete } from "react-icons/ai";

// export const ItemsPageList = styled.ul`
//   display: flex;
//   padding: 0 20px;
//   flex-direction: column;
//   list-style: none;
// `;

// export const ItemsPageItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   margin-bottom: 10px;
//   border: 1px solid gray;
// `;

// export const ItemsPageText = styled.p`
//   margin-top: 0;
//   margin-bottom: 0;
//   margin-right: 40px;
//   font-family: cursive;
//   font-size: 18px;
//   color: gray;
// `;

// export const ItemsPageIconDelete = styled(AiFillDelete)`
//   color: gray;

//   &:hover,
//   &:focus {
//     color: lightgreen;
//   }
// `;
