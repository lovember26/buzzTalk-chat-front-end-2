import { ReactComponent as DefaultBig } from "images/defaultBig.svg";
import { NoFriendsContainer } from "./NoFriends.styled";

export default function NoFriends({ text }) {
  return (
    <NoFriendsContainer>
      <DefaultBig />
      <p>{text}</p>
    </NoFriendsContainer>
  );
}
