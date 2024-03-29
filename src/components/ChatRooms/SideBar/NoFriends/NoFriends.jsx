import { ReactComponent as DefaultIcon } from "../../../../images/default.svg";
import { NoFriendsWrap } from "./NoFriends.styled";
export default function NoFriends() {
  return (
    <NoFriendsWrap>
      <DefaultIcon />
      <p>No friends yet</p>
      <button type="button>">Find a friend</button>
    </NoFriendsWrap>
  );
}
