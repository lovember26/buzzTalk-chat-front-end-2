import { createContext, useContext, useState } from "react";

// Create context
const ChatContext = createContext();

// Return context value
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatId, setChatId] = useState(null);
  const [chatSlug, setChatSlug] = useState(null);
  const [privateChatName, setPrivateChatName] = useState(null);
  const [publicChatName, setPublicChatName] = useState(null);

  const [privateChatImage, setPrivateChatImage] = useState(null);
  const [publicChatImage, setPublicChatImage] = useState(null);

  const [isPrivateChat, setIsPrivateChat] = useState(null);
  const [publicChatParticipants, setPublicChatParticipants]=useState(null);
  const [isFriend,setIsFriend]=useState(null);

  return (
    <ChatContext.Provider
      value={{
        chatId,
        setChatId,
        chatSlug,
        privateChatName,
        setPrivateChatName,
        publicChatName,
        setPublicChatName,
        setChatSlug,
        isPrivateChat,
        setIsPrivateChat,
        privateChatImage,
        setPrivateChatImage,
        publicChatImage,
        setPublicChatImage,
        publicChatParticipants, setPublicChatParticipants,
        isFriend, setIsFriend,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

