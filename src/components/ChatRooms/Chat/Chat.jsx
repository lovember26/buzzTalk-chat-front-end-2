import React, { useEffect, useRef, useState,  } from "react";
import { useSelector } from "react-redux";
import withRouter from "helpers/withRouter";
// import WebSocketInstance from "websocket";

import { MessageInput } from "components/MessageInput/MessageInput";
import NoMessagesSvg from "images/svg/NoMessages/NoMessages";
import ReadMark from "images/svg/ReadMark/ReadMark";

import NoFriends from "components/ChatRooms/NoFriends/NoFriends";
import {ReactComponent as EditIconBig} from "../../../images/edit-big.svg";
import {ReactComponent as ReplyIconBig} from "../../../images/reply-big.svg";
import {ReactComponent as CloseIcon} from "../../../images/close-reply-window.svg"
import {ReactComponent as PurpleLineIcon} from "../../../images/purple-line-reply-window.svg"
import { selectFetchAllPrivateChats } from "redux/chat/chatSelectors";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

import {
  // DateNowText,
  ReplyToText,
  MessageInputWrapper,
  ChatBlockWrapper,
  MessageList,
  MessageListItem,
  MessageListItemUsernameWrapper,
  MessageListItemUsernameImage,
  MessageListItemUsername,
  MessageListItemMessage,
  MessageListItemUsernameImageWrapper,
  WrapperUsername,
  Timestamp,
  Wrp,
  ReplyInputWrapper,
  TimestampWrapper,

  MessageListItemReply,
  TimestampReply,
  WrpReply,
  MessageListItemMessageReply,
  MessageListItemUsernameImageReply,
  MessageListItemUsernameImageWrapperReply,
  MessageListItemUsernameWrapperReply,
  WrapperUsernameReply,
  MessageListItemUsernameReply,
  TimestampWrapperReply,
  
  WrapperSecond,
  LineReply,
  WhoReply,
  TextReply,
  // DownloadMoreButton,
  ReadMarkWrapper,
  SelectedMessageText,
} from "./Chat.styled";
import FriendInfo from "../FriendInfo/FriendInfo";
import AddFriendRequest from "../AddFriendRequest/AddFriendRequest";
import { connectWebSocketChat, disconnectWebSocketChat, sendMessageWebSocketChat } from "websocketChat";
import { selectAccessToken } from "redux/auth/authSelectors";
import MessageActionMenu from "./MessageActionMenu/MessageActionMenu";
import { errorNotification } from "helpers/notification";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
// import { useParams } from "react-router";

const Chat = (props) => {
  // State for usual messages
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  
  const [page, setPage] = useState(1);
  // const pageSize = 2;
const [selectedMessage, setSelectedMessage]=useState(null);
  // const [fetching, setFetching] = useState(true);
const [isOpenMessageMenu, setIsOpenMessageMenu]=useState(false);
  console.log("page:", page);

  // State for reply messages
  const [isReply, setIsReply] = useState(false);
  const [replyMessageId, setReplyMessageId] = useState(null);
  const [replyTo, setReplyTo] = useState(null);

const [isEdit, setIsEdit]=useState(false);

  const privateChats = useSelector(selectFetchAllPrivateChats);
  const publicChats = useSelector(selectFetchAllPublicChats);
  const accessToken=useSelector(selectAccessToken);
const chatSlug=props.params.chatSlug;

  const [socket, setSocket] = useState(null);

  const bottomRef = useRef(null);

  const [position, setPosition] = useState({ x: null, y: null });
  const handleWheel = (event) => {
    // const deltaY = event.deltaY; // Визначаємо напрямок прокрутки (вгору або вниз)
    // const scrollTop = event.currentTarget.scrollTop; // Поточна прокрутка
    // const newScrollTop = scrollTop + deltaY; // Нова прокрутка
 
    // setWindowPosition(scrollTop);
  };
  const handleMouseClick = ( event,message) => {
    setIsOpenMessageMenu(prevState=>!prevState)
  
   setSelectedMessage(message);
  
    const boundingRect = event.target.getBoundingClientRect(); // Отримати координати і розміри батьківського елемента
   
  //  console.log("windowPos",windowPosition);
  //  console.log(boundingRect)
  //  console.log("eventY",event.clientY)
   const windowScroll=window.scrollY;
    const x = event.clientX - boundingRect.left; // Визначити позицію ікс відносно батьківського елемента
    const y = boundingRect.top + windowScroll; // Визначити позицію ігрик відносно батьківського елемента
    // console.log(windowScroll);
    setPosition({ x, y });
 
    // const x = event.clientX; // Координата x відносно документу
    // const y = event.clientY; // Координата y відносно документу
    // setPosition({ x, y });
  };

  useEffect(() => {
  setIsEdit(false);
  setIsReply(false);
      const socket = connectWebSocketChat(chatSlug, accessToken);

      setSocket(socket);

      return () => {
          disconnectWebSocketChat(socket);
      };
  }, [chatSlug,accessToken]);

  useEffect(() => {

    if (socket) {
        socket.onmessage = (event) => {
          
            const messageData = JSON.parse(event.data);
           console.log(messageData);
            if (messageData.command === "messages") {
                setMessages(messageData.messages);
               
            } if (messageData.command === "new_message") {
              setMessages(prevState=>[messageData.message,...prevState]);
              if (bottomRef.current) {
                bottomRef.current.scrollIntoView({ behavior: "smooth" });
              }
          } if(messageData.command==="deleted_message"){
          
            setMessages(prevState=>prevState.filter(message=>{
             return messageData.deleted !== message.id;}))
            }
      if(messageData.command==="edited_message"){
       
        setMessages(prevState =>
          prevState.map(message => {
              if (messageData.edited.id === message.id) {
                  return { ...message, content: messageData.edited.content };
              } else {
                  return message;
              }
          }))
      } if(messageData.message==="not_creator"){
        console.log("not_creator")
        errorNotification("Not creator!");
      };}
    
      }
}, [socket, messages]);

// const scrollToBottom = () => {
//   if (bottomRef.current) {
//     bottomRef.current.scrollIntoView({ behavior: "smooth" });
//   }
// };
// useEffect(() => {
//   scrollToBottom();
// }, [messages]);
//це старі вебсокети
  // const waitForSocketConnection = useCallback((callback) => {
  //   setTimeout(function () {
  //     if (WebSocketInstance.state() === 1) {
  //       console.log("Connection is secure");
  //       callback();
  //     } else {
  //       console.log("Waiting for connection...");
  //       waitForSocketConnection(callback);
  //     }
  //   }, 100);
  // }, []);

  // useEffect(() => {
    
  //   WebSocketInstance.connect(props.params.chatSlug, props.accessToken);

  //   waitForSocketConnection(() => {
  //     WebSocketInstance.addCallbacks(setMessages, addMessage);
  //     WebSocketInstance.fetchMessages();
      
  //   });
  // }, [waitForSocketConnection, props.params.chatSlug, props.accessToken]);
  //тут кінець старих вебсокетів

  useEffect(() => {
    onResetPage();
  }, [props.params.chatSlug]);

  // const handleScroll = (event) => {
  //   if (
  //     event.target.scrollHeight -
  //       (event.target.scrollTop + window.innerHeight) <
  //     0
  //   ) {
  //     console.log("onScroll");
  //     setFetching(true);
  //   }

  //   // The height of the entire page with scrolling in mind
  //   console.log("event.target.scrollHeight", event.target.scrollHeight);
  //   // The sum of these two parameters is equal to event.target.scrollHeight
  //   console.log("event.target.scrollTop", event.target.scrollTop);
  //   console.log("window.innerHeight", window.innerHeight);
  //   console.log(
  //     "event.target.scrollHeight - (event.target.scrollTop + window.innerHeight)",
  //     event.target.scrollHeight - (event.target.scrollTop + window.innerHeight)
  //   );
  // };

  //   In order to avoid replaying messages, but it needs to be fixed
  // const setMessagesNew = (messages) => {
  //   setMessages((prevMessages) => {
  //     const uniqueMessages = messages.filter(
  //       (message) =>
  //         !prevMessages.some((prevMessage) => prevMessage.id === message.id)
  //     );
  //     return [...prevMessages, ...uniqueMessages];
  //   });
  // };

  // Instead
  // const addMessages = (newMessages) => {
  //   setMessages((prevMessages) => [...prevMessages, ...newMessages]);
  // };

  // The new message object returned from the backend is written into the message variable
  // const addMessage = (message) => {
  //   setMessages((prevMessages) => [message, ...prevMessages]);
  // };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    sendMessageWebSocketChat(socket,message, isReply, replyMessageId, isEdit,selectedMessage);
    // WebSocketInstance.newChatMessage(message, isReply, replyMessageId);
    setMessage("");
    setIsReply(false);
   setIsEdit(false);
    
  };

  const renderTimestamp = (timestamp) => {
    const currentTimestamp = new Date().getTime();
    const messageDateTime = new Date(timestamp);
    const timeDiff = Math.round(
      (currentTimestamp - messageDateTime.getTime()) / 60000
    );

    if (timeDiff < 24 * 60) {
      const options = { hour: "numeric", minute: "numeric" };
      const time = messageDateTime.toLocaleTimeString("en-US", options);
      return time;
    } else {
      const options = { hour: "numeric", minute: "numeric", hour12: false };
      const time = messageDateTime.toLocaleDateString("en-US", options);
      return time;
    }
  };

  // const onReplyHandler = async (messageId, messageAuthorName) => {
  //   setIsReply(true);
  //   setReplyMessageId(messageId);
  //   setReplyTo(messageAuthorName);
  // };

  const renderMessages = (messages) => {
    const reversedMessages = [...messages].reverse();

    return reversedMessages.map((message, i, arr) => {
      return !message.reply_to ? (
        <MessageListItem key={`${message.id}_${i}`} onClick={(event)=>handleMouseClick(event, message)}>
          {message===selectedMessage && isOpenMessageMenu && <MessageActionMenu position={position} message={message} socket={socket} setIsReply={setIsReply} setReplyMessageId={setReplyMessageId} setReplyTo={setReplyTo}  setIsEdit={setIsEdit} setMessage={setMessage}/>}
          <MessageListItemUsernameWrapper>
            <Wrp>
              <MessageListItemUsernameImageWrapper>
                <MessageListItemUsernameImage
                  src={message.author[0].image}
                  alt="avatar"
                />
              </MessageListItemUsernameImageWrapper>
              <WrapperUsername>
                <MessageListItemUsername>
                  {message.author[0].username}
                </MessageListItemUsername>
                <MessageListItemMessage>
                  {message.content}
                </MessageListItemMessage>
              </WrapperUsername>
            </Wrp>
          </MessageListItemUsernameWrapper>
          <TimestampWrapper>
            <ReadMarkWrapper>
              <ReadMark read={message.read} />
            </ReadMarkWrapper>
            <Timestamp>{renderTimestamp(message.timestamp)}</Timestamp>
            {/* <ReplyButton
              onClick={() =>
                onReplyHandler(message.id, message.author[0].username)
              }
            >
              <ReplyIcons />
            </ReplyButton> */}
          </TimestampWrapper>
        </MessageListItem>
      ) : (
        // When reply
        <MessageListItemReply key={`${message.id}_${i}`} onClick={(event)=>handleMouseClick(event, message)}>
           {message===selectedMessage && isOpenMessageMenu && <MessageActionMenu position={position} message={message} socket={socket} setIsReply={setIsReply} setReplyMessageId={setReplyMessageId} setReplyTo={setReplyTo}  setIsEdit={setIsEdit} setMessage={setMessage}/>}
          <WrapperSecond>
            <MessageListItemUsernameImageWrapperReply>
              <MessageListItemUsernameImageReply
                src={message.author[0].image}
                alt="avatar"
              />
            </MessageListItemUsernameImageWrapperReply>
            <MessageListItemUsernameWrapperReply>
              <WhoReply>{message.author[0].username}</WhoReply>
              <WrpReply>
                <LineReply></LineReply>
                <WrapperUsernameReply>
                  <MessageListItemUsernameReply>
                    {message.reply_to.author[0].username}
                  </MessageListItemUsernameReply>
                  <MessageListItemMessageReply>
                    {message.reply_to.content}
                  </MessageListItemMessageReply>
                </WrapperUsernameReply>
              </WrpReply>
              <TextReply>{message.content}</TextReply>
            </MessageListItemUsernameWrapperReply>
          </WrapperSecond>
          <TimestampWrapperReply>
            <ReadMarkWrapper>
              <ReadMark read={message.read} />
            </ReadMarkWrapper>
            <TimestampReply>
              {renderTimestamp(message.timestamp)}
            </TimestampReply>
            {/* <ReplyButton
              onClick={() =>
                onReplyHandler(message.id, message.author[0].username)
              }
            >
              <ReplyIconsReply />
            </ReplyButton> */}
          </TimestampWrapperReply>
        </MessageListItemReply>
      );
    });
  };

  // const onLoadMore = () => {
  //   setPage((prevState) => prevState + 1);
  // };

  // const onLoadMore = () => {
  //   const nextPage = page + 1;
  //   WebSocketInstance.fetchMessages(nextPage, pageSize);
  //   setPage(nextPage);
  // };

  const onResetPage = () => {
    setPage(1);
  };

  return (
    <>
      {!privateChats?.length && !publicChats?.length ? (
        <NoFriends text={"You haven't any chats yet :("} />
      ) : (
        <div style={{
          display: "flex",
        
          height: "calc(100% - 80px)",
         
        }}>
          <ChatBlockWrapper className="messages-wrapper" >
            {!messages?.length ? (
              <NoMessagesSvg />
            ) : (
              <><AddFriendRequest/>
                {/* <DateNowText>Today</DateNowText> */}
                {/* <MessageList className="messages" onScroll={handleScroll}> */}
                <MessageList className="messages" onScroll={handleWheel}>
                  {messages && renderMessages(messages)}
                
                 <div ref={bottomRef}></div>
                </MessageList>
                {/* <DownloadMoreButton onClick={onLoadMore}>
                  More messages
                </DownloadMoreButton> */}
              </>
            )}
            <MessageInputWrapper >
              {isReply  && (
                <ReplyInputWrapper>
                  <div className="container">
                  <ReplyIconBig style={{marginRight:"18px"}}/>
                  <PurpleLineIcon/>
                  <div className="small-container">
                  <ReplyToText>Reply to @{replyTo}</ReplyToText>
                  <SelectedMessageText>{selectedMessage.content}</SelectedMessageText>
                  </div>
                  </div>
                  <button onClick={() => setIsReply(false)}><CloseIcon/></button>
                </ReplyInputWrapper>
              )}
              {isEdit && (
                <ReplyInputWrapper>
                  <div className="container">
                  <EditIconBig style={{marginRight:"18px"}}/>
                  <PurpleLineIcon/>
                  <div className="small-container">
                  <ReplyToText>Edit Message</ReplyToText>
                  <SelectedMessageText>{selectedMessage.content}</SelectedMessageText>
                  </div>
                  </div>
                  <button onClick={() => setIsEdit(false)}><CloseIcon/></button>
                </ReplyInputWrapper>
              )}
              <MessageInput
                onSubmit={sendMessageHandler}
                onChange={messageChangeHandler}
                value={message}
              />
            </MessageInputWrapper>
          </ChatBlockWrapper>
          <FriendInfo />
          <AppToastContainer />
        </div>
      )}
    </>
  );
};

export default withRouter(Chat);
