import { createContext, useContext, useState } from "react";

// Create context
const ChatContext = createContext();

// Return context value
export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatId, setChatId] = useState(null);

  //   const setId = (id) => {
  //     console.log(`Chang id to ${id}`);
  //     setChatId(id);
  //   };

  return (
    <ChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};

// import { createContext, useContext } from "react";

// const ChatContext = createContext({});

// export function useSearchContext() {
//   const data = useContext(ChatContext);
//   return data;
// }

// export default function SearchContextProvider({ children, value }) {
//   return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
// }
