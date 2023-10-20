import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "redux/auth/authSelectors";
import { fetchUsers } from "services/itemsApi";
import { FriendItem } from "./FriendItem";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { StyledFriendsList } from "./FriendsList.styled";

export const FriendsList = () => {
  const accessToken = useSelector(selectAccessToken);
  const [usersList, setUsersList] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers(accessToken);
        if (data) {
          setUsersList(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [accessToken]);

  return (
    <StyledFriendsList>
      {usersList && usersList.length > 0 ? (
        <ul>
          {usersList.map((user) => (
            <FriendItem key={user.username} user={user} />
          ))}
        </ul>
      ) : (
        <NoFriends />
      )}
    </StyledFriendsList>
  );
};
