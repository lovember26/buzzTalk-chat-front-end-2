import { ReactComponent as DefaultBig } from "../../images/defaultBig.svg";
import { NoFriendsContainer } from "./NoFriends.styled";
export const NoFriends = () => {
  return (
    <NoFriendsContainer>
      <DefaultBig />
      <p>There are no friends yet</p>
    </NoFriendsContainer>
  );
};
