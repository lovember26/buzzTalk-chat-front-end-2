import { createContext, useContext, useState } from "react";

// Create context
const ChatContext = createContext();

// Return context value
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatId, setChatId] = useState(null);
  const [chatSlug, setChatSlug] = useState(null);
  const [chatName, setChatName] = useState(null);
  const [isPrivateChat, setIsPrivateChat] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        chatId,
        setChatId,
        chatSlug,
        chatName,
        setChatName,
        setChatSlug,
        isPrivateChat,
        setIsPrivateChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
