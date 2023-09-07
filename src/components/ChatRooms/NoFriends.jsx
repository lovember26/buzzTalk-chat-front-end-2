import { ReactComponent as DefaultBig } from "../../images/defaultBig.svg";
import { NoFriendsContainer } from "./NoFriends.styled";
export default function NoFriends() {
  return (
    <NoFriendsContainer>
      <DefaultBig />
      <p>There are no friends yet</p>
    </NoFriendsContainer>
  );
}
