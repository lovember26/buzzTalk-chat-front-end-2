import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "redux/auth/authThunk";
import { selectUserName } from "redux/user/userSelectors";
import {
  UserMenuWrapper,
  UserMenuText,
  UserMenuButton,
  FaUserCircleIcon,
} from "./UserMenu.styled";

export function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);

  const handlelogOut = () => {
    dispatch(logOutThunk());
    navigate("/login", { replace: true });
  };

  return (
    <UserMenuWrapper>
      <FaUserCircleIcon size={30} />
      <UserMenuText>{username}</UserMenuText>
      <UserMenuButton type="button" onClick={handlelogOut}>
        Log out
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
