import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "redux/auth/authThunk";
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
  const { email } = useSelector(selectUser);

  const handlelogOut = () => {
    dispatch(logOut());
    navigate("/login", { replace: true });
  };

  return (
    <UserMenuWrapper>
      <FaUserCircleIcon size={30} />
      <UserMenuText>{email}</UserMenuText>
      <UserMenuButton type="button" onClick={handlelogOut}>
        Вийти
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
