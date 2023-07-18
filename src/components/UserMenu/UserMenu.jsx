import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutThunk } from "redux/auth/authThunk";
import { selectUser } from "redux/auth/authSelectors";
import {
  UserMenuWrapper,
  UserMenuText,
  UserMenuButton,
  FaUserCircleIcon,
} from "./UserMenu.styled";

export function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector(selectUser);

  const handlelogOut = () => {
    dispatch(logOutThunk());
    navigate("/login", { replace: true });
  };

  return (
    <UserMenuWrapper>
      <FaUserCircleIcon size={30} />
      <UserMenuText>{login}</UserMenuText>
      <UserMenuButton type="button" onClick={handlelogOut}>
        Log out
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
