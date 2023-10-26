import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import {
  ActiveChatWrapper,
  ActiveChatInfo,
  ActiveChatName,
} from "./Contact.styled";

const Contact = ({ user }) => (
  <ActiveChatWrapper key={user.username}>
    {/* <ActiveChatInfo to={`chats/${user.id}`}> */}
    <ActiveChatInfo to={`chats/${user.id}`}>
      {user.image ? <img src={user.image} alt="avatar" /> : <DefaultIcon />}
      <ActiveChatName>{user.username}</ActiveChatName>
    </ActiveChatInfo>
  </ActiveChatWrapper>
);

export default Contact;
