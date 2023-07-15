import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authSlice";
import { selectLogin } from "../../redux/auth/authSelectors";
import {
  UserMenuWrapper,
  UserMenuText,
  UserMenuButton,
  FaUserCircleIcon,
} from "./UserMenu.styled";

export function UserMenu() {
  const dispatch = useDispatch();
  const { email } = useSelector(selectLogin);

  return (
    <UserMenuWrapper>
      <FaUserCircleIcon size={30} />
      <UserMenuText>{email}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
