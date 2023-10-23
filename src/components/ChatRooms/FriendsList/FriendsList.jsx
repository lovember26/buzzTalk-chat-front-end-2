// Old code without storing userList in the Redux state
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersThunk } from "redux/user/userThunk";
import { selectAllUsers } from "redux/user/userSelectors";
import Contact from "../Contact/Contact";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { StyledFriendsList } from "./FriendsList.styled";

export const FriendsList = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = () => {
      try {
        dispatch(fetchAllUsersThunk());
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [dispatch]);

  return (
    <StyledFriendsList>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <Contact key={user.username} user={user} />
          ))}
        </ul>
      ) : (
        <NoFriends />
      )}
    </StyledFriendsList>
  );
};

// New code with storing userList in the Redux state
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { fetchAllUsersThunk } from "redux/user/userThunk";
// import Contact from "../Contact/Contact";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
// import { StyledFriendsList } from "./FriendsList.styled";

// export const FriendsList = () => {
// const accessToken = useSelector(selectAccessToken);
// const [usersList, setUsersList] = useState(null);
//   const dispatch = useDispatch();

// useEffect(() => {
//   const getUsers = async () => {
//     try {
//       if (accessToken) {
//         const users = await dispatch(fetchAllUsersThunk(accessToken));

//         if (users) {
//           setUsersList(users.payload);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getUsers();
// }, [dispatch, accessToken]);

//   return (
//     <StyledFriendsList>
//       {usersList && usersList.length > 0 ? (
//         <ul>
//           {usersList.map((user) => (
//             <Contact key={user.username} user={user} />
//           ))}
//         </ul>
//       ) : (
//         <NoFriends />
//       )}
//     </StyledFriendsList>
//   );
// };
