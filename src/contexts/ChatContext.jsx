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
  const [isPrivateChat, setIsPrivateChat] = useState(null);

  console.log("publicChatName", publicChatName);

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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
