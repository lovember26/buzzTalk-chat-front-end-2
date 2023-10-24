// export default FriendsList;
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "redux/auth/authSelectors";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { StyledFriendsList } from "./FriendsList.styled";
import Contact from "../Contact/Contact";
import { selectUserName } from "redux/user/userSelectors";

export const FriendsList = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (accessToken !== null && username !== null) {
      // Change after fix bag
      getUserChats(accessToken, "suchok_olya");
    }
  }, [accessToken, username]);

  const getUserChats = async (token, username) => {
    const { data } = await axios.get(
      `https://buzz-talk-api.onrender.com/api/chat/?username=${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setChats(data);
  };

  return (
    <StyledFriendsList>
      {chats && chats.length > 0 ? (
        <ul>
          {chats.map((chat) => (
            <Contact
              key={chat.id}
              chat={chat}
              name="Some active chat number -"
            />
          ))}
        </ul>
      ) : (
        <NoFriends />
      )}
    </StyledFriendsList>
  );
};

// Old code which works with redux state
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllUsersThunk } from "redux/user/userThunk";
// import { selectAllUsers } from "redux/user/userSelectors";
// import Contact from "../Contact/Contact";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
// import { StyledFriendsList } from "./FriendsList.styled";

// export const FriendsList = () => {
//   const users = useSelector(selectAllUsers);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getUsers = () => {
//       try {
//         dispatch(fetchAllUsersThunk());
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUsers();
//   }, [dispatch]);

//   return (
//     <StyledFriendsList>
//       {users && users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <Contact key={user.username} user={user} />
//           ))}
//         </ul>
//       ) : (
//         <NoFriends />
//       )}
//     </StyledFriendsList>
//   );
// };

// Old code without redux state
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { fetchUsers } from "services/itemsApi";
// import { FriendItem } from "./FriendItem";
// import NoFriends from "../SideBar/NoFriends/NoFriends";
// import { StyledFriendsList } from "./FriendsList.styled";

// export const FriendsList = () => {
// const accessToken = useSelector(selectAccessToken);
// const [usersList, setUsersList] = useState(null);

// useEffect(() => {
//   const getUsers = async () => {
//     try {
//       const data = await fetchUsers(accessToken);
//       console.log(data);
//       if (data) {
//         setUsersList(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getUsers();
// }, [accessToken]);

//   return (
//     <StyledFriendsList>
//       {usersList && usersList.length > 0 ? (
//         <ul>
//           {usersList.map((user) => (
//             <FriendItem key={user.username} user={user} />
//           ))}
//         </ul>
//       ) : (
//         <NoFriends />
//       )}
//     </StyledFriendsList>
//   );
// };
