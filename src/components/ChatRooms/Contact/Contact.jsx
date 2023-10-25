import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import {
  ActiveChatWrapper,
  ActiveChatInfo,
  ActiveChatName,
} from "./Contact.styled";

const Contact = ({ chat, name }) => (
  <ActiveChatWrapper key={chat.id}>
    <ActiveChatInfo to={`chats/${chat.id}`}>
      {chat.image ? <img src={chat.image} alt="avatar" /> : <DefaultIcon />}
      <ActiveChatName>{name}</ActiveChatName>
    </ActiveChatInfo>
  </ActiveChatWrapper>
);

export default Contact;
