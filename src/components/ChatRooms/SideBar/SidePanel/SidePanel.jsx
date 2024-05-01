import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

import Modal from "components/common/Modal/Modal";
import ChatModal from "components/ChatRooms/Modal/ChatModal/ChatModal";

import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";
import { PrivateChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList";

import UserProfile from "../UserProfile/UserProfile";

import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

import { connectWebSocketNotification, disconnectWebSocketNotification } from "../../../../websocketNotification.js"

import {
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
  SearchInput,
  FriendsLink,
  ContactIcon,
  AddChatButtonWrapper,
  Title,
  Form,
  FriendsLinkWrapper,
} from "./SidePanel.styled";

// import { ChatProvider } from "contexts/ChatContext";
import { useChat } from "contexts/ChatContext";
import { SearchChatList } from "components/SearchChatList/SearchChatList";
import { selectAccessToken } from "redux/auth/authSelectors";
import NewMessageNotification from "components/common/NewMessageNotification/NewMessageNotification";

import { fetchAllPrivateChatsThunk } from "redux/chat/chatThunk";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const results  = useSelector(selectAllUsers);
const accessToken=useSelector(selectAccessToken);
  const { isPrivateChat } = useChat();
const [notification, setNotification]=useState(null);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
// const [unreaded, setUnreaded]=useState(null);
const [onlineUsers, setOnlineUsers]=useState(null);
  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleSearchValue = ({ target }) => {
    setValue(target.value);
  };

  const [socket, setSocket] = useState(null);

  useEffect(() => {
      const socket = connectWebSocketNotification(accessToken);

      setSocket(socket);

      return () => {
          disconnectWebSocketNotification(socket);
          
      };
  }, [accessToken]);
  // const unreadMessageCounter=(messageData)=>{
  //  console.log("counter");
  //               const updatedState = [...unreaded]; 
               
  //               const existingItemIndex = updatedState.findIndex(item => item.slug === messageData.chat_slug);
            
  //               if (existingItemIndex !== -1) {
                    
  //                   updatedState[existingItemIndex].count++;
  //               } else {
                   
  //                   updatedState.push({ slug: messageData.chat_slug, count: 1 });
  //               }
            
  //               setUnreaded( updatedState);
  //           };
  
  useEffect(() => {

    if (socket) {
        socket.onmessage = (event) => {
          
            const messageData = JSON.parse(event.data);
        
            if (messageData.type === "new_message") {
             
              setIsVisible(true);

              setNotification(messageData.message)
              dispatch(fetchAllPrivateChatsThunk());
              console.log("notification", messageData)
// unreadMessageCounter(messageData);
           
            } else if (messageData.type==="users_online_updates"){

setOnlineUsers(messageData.users_online);
console.log("online", messageData.users_online);
            }
            else{
            console.log("notification", messageData)
            }
          
          }}
   
          },[socket, dispatch])
        

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          <StyledChatsBtn type="button" to={"chats"}>
            <ChatsBtn />
          </StyledChatsBtn>

          <AddChatButtonWrapper
            type="button"
            onClick={() => setModalActive(true)}
          >
            <AddChatButton />
          </AddChatButtonWrapper>

          <PublicChatsList />
          <UserProfile />
        </StyledNav>

        <SearchBar>
          <Title>
            {isPrivateChat ? "Private messages" : "Public messages"}
          </Title>
         
          <Form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
              value={value}
              onChange={handleSearchValue}
            />
          </Form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends/all"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

         {value==="" ? <PrivateChatList onlineUsers={onlineUsers}/> : <SearchChatList searchQuery={value}/>}
        </SearchBar>
       
      </StyledSideBar>
     {isVisible && <NewMessageNotification setIsVisible={setIsVisible} notification={notification}/>}
      <Modal active={modalActive} setActive={setModalActive}>
        <ChatModal users={results} setActive={setModalActive} />
      </Modal>
      <Outlet />
     
    </>
  );
}
