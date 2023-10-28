import { ReactComponent as DefaultIcon } from "../../../images/default.svg";
import {
  ActiveChatWrapper,
  ActiveChatInfo,
  ActiveChatName,
} from "./Contact.styled";

const Contact = ({ chat }) => {
  return (
    <ActiveChatWrapper key={chat.id}>
      <ActiveChatInfo to={`chats/${chat.slug}`}>
        {chat.receiver.image ? (
          <img src={chat.receiver.image} alt="avatar" />
        ) : (
          <DefaultIcon />
        )}
        <ActiveChatName>{chat.receiver.username}</ActiveChatName>
      </ActiveChatInfo>
    </ActiveChatWrapper>
  );
};

export default Contact;
