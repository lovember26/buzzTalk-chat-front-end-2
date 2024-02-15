import NoPrivateChats from "components/ChatRooms/NoPrivateChats/NoPrivateChats";
import { ChatItem, ChatItemImage, ChatItemImageWrapper, ChatItemInfo, ChatItemText, ChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList.styled";
import { useChat } from "contexts/ChatContext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFetchAllPrivateChats, selectFetchAllPublicChats } from "redux/chat/chatSelectors";
import { ReactComponent as DefaultIcon } from "../../images/default.svg";


export const SearchChatList = ({searchQuery}) => {
  const {
    setChatSlug,
    setIsPrivateChat,
    setPrivateChatName,
    setPrivateChatImage,
    
    setPublicChatName,
   
    setPublicChatImage,
  } = useChat();

  const onClickChatHandler = (slug, isPrivateChat, receiver, image,title) => {
    setChatSlug(slug);
    setIsPrivateChat(isPrivateChat);
    setPrivateChatName(receiver);
    setPrivateChatImage(image);

    setPublicChatName(title);
    setPublicChatImage(image);
  };

    const publicChats = useSelector(selectFetchAllPublicChats);
    const privateChats = useSelector(selectFetchAllPrivateChats);
    const [searchedPrivateChats, setSearchedPrivateChats]=useState([]);
    const [searchedPublicChats, setSearchedPublicChats]=useState([]);
    useEffect(() => {
        const filteredPublicChats = publicChats.filter((chat) => {
          return (
            chat.title?.toLowerCase().startsWith(searchQuery) ||
            chat.participants.some((user) =>
              user.username.toLowerCase().startsWith(searchQuery)
            )
          );
        });
      const filteredPrivateChats=privateChats.filter(chat=>{
return chat.receiver.username.toLowerCase().startsWith(searchQuery);
      })
      setSearchedPrivateChats([...filteredPrivateChats]);
      setSearchedPublicChats([...filteredPublicChats]);
    
     
      }, [searchQuery, publicChats,privateChats]);

    return (
     <>
     {(!searchedPrivateChats || searchedPrivateChats.length === 0) && (!searchedPublicChats || searchedPublicChats.length === 0) && (
  <NoPrivateChats />
)}
      {searchedPrivateChats && searchedPrivateChats.length > 0 && (
        <ChatList>
          {searchedPrivateChats.map((chat) => (
            <ChatItem key={chat.id}>
              <ChatItemInfo
                onClick={() =>
                  onClickChatHandler(
                    chat.slug,
                    chat.is_private,
                    chat.receiver.username,
                    chat.receiver.image
                  )
                }
                to={`chats/${chat.slug}`}
              >
                {chat.receiver.image ? (
                  <ChatItemImageWrapper>
                    <ChatItemImage src={chat.receiver.image} alt="avatar" />
                  </ChatItemImageWrapper>
                ) : (
                  <DefaultIcon />
                )}
                <ChatItemText>{chat.receiver.username}</ChatItemText>
              </ChatItemInfo>
            </ChatItem>
          ))}
        </ChatList> 

      )}
       
       {searchedPublicChats && searchedPublicChats.length > 0 && (
  <ChatList>
    {searchedPublicChats?.map((chat) => {
      const userList = chat.participants.map(user => user.username);
      const participantsString = userList.join(", ").slice(0, 20);;

      return (
        <ChatItem  key={chat?.id}>
          <ChatItemInfo
          onClick={() =>
            onClickChatHandler(
              chat.slug,
              chat.is_private,
              chat.title,
              chat.image || chat.gravatar
            )
          }
          to={`chats/${chat?.slug}`}
         
        >
          {chat.image || chat.gravatar ? (
            <ChatItemImageWrapper>
              <ChatItemImage
                src={chat.image || chat.gravatar}
                alt="avatar"
              />
            </ChatItemImageWrapper>
          ) : (
            <DefaultIcon width="38px" style={{ borderRadius: "50%", marginRight:"10px" }} />
          )}
          <ChatItemText>{chat.title ? chat.title : `${participantsString}...`}</ChatItemText>
          </ChatItemInfo>
        </ChatItem>
      );
    })}
  </ChatList>
)}

    </>
    )
}