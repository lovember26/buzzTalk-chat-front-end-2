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
