import React, { useEffect, useState, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
import withRouter from "helpers/withRouter";
import WebSocketInstance from "websocket";
import { MessageInput } from "components/MessageInput/MessageInput";
import NoMessagesSvg from "images/svg/NoMessages/NoMessages";

// import { replyMessageThunk } from "redux/chat/chatThunk";

// import { useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";

import {
  DateNowText,
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
  ReplyButton,
  ReplyIcons,
  // MessageListItemReply,
  // TimestampReply,
  // WrpReply,
  // MessageListItemMessageReply,
  // MessageListItemUsernameImageReply,
  // MessageListItemUsernameImageWrapperReply,
  // MessageListItemUsernameWrapperReply,
  // WrapperUsernameReply,
  // MessageListItemUsernameReply,
  // TimestampWrapperReply,
  // ReplyIconsReply,
  // WrapperSecond,
  // LineReply,
  // WhoReply,
  // TextReply,
} from "./Chat.styled";

// import { useChat } from "contexts/ChatContext";
import FriendInfo from "../FriendInfo/FriendInfo";

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // console.log("all messages", messages);

  // const [value, setValue] = useState("");

  const [isReply, setIsReply] = useState(false);
  // const [replyTo, setReplyTo] = useState(null);

  // const [replyMessage, setReplyMessage] = useState(null);
  // const [replyContent, setReplyContent] = useState("");
  // const [selectedMessageId, setSelectedMessageId] = useState(null);

  // const { chatId } = useChat();
  // const dispatch = useDispatch();

  // console.log("all messages", messages);
  // console.log("isReply", isReply);

  const waitForSocketConnection = useCallback((callback) => {
    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is secure");
        callback();
      } else {
        console.log("Waiting for connection...");
        waitForSocketConnection(callback);
      }
    }, 100);
  }, []);

  useEffect(() => {
    WebSocketInstance.connect(props.params.chatSlug);

    waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(setMessages, addMessage);
      WebSocketInstance.fetchMessages(props.username, props.params.chatSlug);
    });
  }, [waitForSocketConnection, props.username, props.params.chatSlug]);

  // Scrolling and fetching messages
  // eslint-disable-next-line
  // const [currentPage, setCurrentPage] = useState(1);
  // const accessToken = useSelector(selectAccessToken);

  const handleScroll = () => {
    console.log("handleScroll");
  };

  // useEffect(() => {}, []);

  // const getMessages = async () => {};

  // useEffect(() => {
  //   getMessages(accessToken);
  // }, [accessToken]);

  const addMessage = (message) => {
    // console.log("ONE message", message);
    // message.selected = false;
    // console.log(message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    if (isReply) {
      // console.log("isReply!");
    }

    const messageObject = {
      from: props.username,
      content: message,
      chatSlug: props.params.chatSlug,
    };

    WebSocketInstance.newChatMessage(messageObject);
    setMessage("");
  };

  const renderTimestamp = (timestamp) => {
    let prefix = "";
    const timeDiff = Math.round(
      (new Date().getTime() - new Date(timestamp).getTime()) / 60000
    );
    if (timeDiff < 1) {
      // less than one minute ago
      prefix = "just now...";
    } else if (timeDiff < 60 && timeDiff > 1) {
      // less than sixty minutes ago
      prefix = `${timeDiff} minutes ago`;
    } else if (timeDiff < 24 * 60 && timeDiff > 60) {
      // less than 24 hours ago
      prefix = `${Math.round(timeDiff / 60)} hours ago`;
    } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
      // less than 7 days ago
      prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
    } else {
      prefix = `${new Date(timestamp)}`;
    }
    return prefix;
  };

  const onReplyHandler = async (messageId, messageAuthorName) => {
    // setIsReply(true);
    // setReplyTo(messageAuthorName);
    // const body = {
    //   chat_id: chatId,
    //   message_id: messageId,
    //   content: "I reply!!!",
    // };
    // const { payload } = await dispatch(replyMessageThunk(body));
  };

  const renderMessages = (messages) => {
    const reversedMessages = [...messages].reverse();

    return reversedMessages.map((message, i, arr) => (
      <MessageListItem key={`${message.id}_${i}`}>
        <MessageListItemUsernameWrapper>
          <Wrp>
            <MessageListItemUsernameImageWrapper>
              <MessageListItemUsernameImage
                src={message.author.image}
                alt="avatar"
              />
            </MessageListItemUsernameImageWrapper>
            <WrapperUsername>
              <MessageListItemUsername>
                {message.author.username}
              </MessageListItemUsername>
              <MessageListItemMessage>{message.content}</MessageListItemMessage>
            </WrapperUsername>
          </Wrp>
        </MessageListItemUsernameWrapper>
        <TimestampWrapper>
          <Timestamp>{renderTimestamp(message.timestamp)}</Timestamp>
          <ReplyButton
            onClick={() => onReplyHandler(message.id, message.author.username)}
          >
            <ReplyIcons />
          </ReplyButton>
        </TimestampWrapper>
      </MessageListItem>
    ));
  };

  return (
    <div>
      <ChatBlockWrapper className="messages-wrapper">
        {!messages.length ? (
          <NoMessagesSvg />
        ) : (
          <>
            <DateNowText>Today</DateNowText>
            <MessageList className="messages" onScroll={handleScroll}>
              {messages && renderMessages(messages)}
            </MessageList>
          </>
        )}
        <MessageInput
          onSubmit={sendMessageHandler}
          onChange={messageChangeHandler}
          value={message}
        />
      </ChatBlockWrapper>
      <FriendInfo />
    </div>
  );
};

export default withRouter(Chat);

// For reply messages
//  {
//    !isReply ? (
//      <MessageListItem key={`${message.id}_${i}`}>
//        <MessageListItemUsernameWrapper>
//          <Wrp>
//            <MessageListItemUsernameImageWrapper>
//              <MessageListItemUsernameImage
//                src={message.author.image}
//                alt="avatar"
//              />
//            </MessageListItemUsernameImageWrapper>
//            <WrapperUsername>
//              <MessageListItemUsername>
//                {message.author.username}
//              </MessageListItemUsername>
//              <MessageListItemMessage>
//                {message.content}
//              </MessageListItemMessage>
//            </WrapperUsername>
//          </Wrp>
//        </MessageListItemUsernameWrapper>
//        <TimestampWrapper>
//          <Timestamp>{renderTimestamp(message.timestamp)}</Timestamp>
//          <ReplyButton
//            onClick={() =>
//              onReplyHandler(message.id, message.author.username)
//            }
//          >
//            <ReplyIcons />
//          </ReplyButton>
//        </TimestampWrapper>
//      </MessageListItem>
//    ) : (
//      <MessageListItemReply key={`${message.id}_${i}`}>
//        <WrapperSecond>
//          <MessageListItemUsernameImageWrapperReply>
//            <MessageListItemUsernameImageReply
//              src={message.author.image}
//              alt="avatar"
//            />
//          </MessageListItemUsernameImageWrapperReply>
//          <MessageListItemUsernameWrapperReply>
//            <WhoReply>Name who reply</WhoReply>
//            <WrpReply>
//              <LineReply></LineReply>
//              <WrapperUsernameReply>
//                <MessageListItemUsernameReply>
//                  {message.author.username}
//                </MessageListItemUsernameReply>
//                <MessageListItemMessageReply>
//                  {message.content}
//                </MessageListItemMessageReply>
//              </WrapperUsernameReply>
//            </WrpReply>
//            <TextReply>Text reply</TextReply>
//          </MessageListItemUsernameWrapperReply>
//        </WrapperSecond>
//        <TimestampWrapperReply>
//          <TimestampReply>
//            {renderTimestamp(message.timestamp)}
//          </TimestampReply>
//          <ReplyButton
//            onClick={() =>
//              onReplyHandler(message.id, message.author.username)
//            }
//          >
//            <ReplyIconsReply />
//          </ReplyButton>
//        </TimestampWrapperReply>
//      </MessageListItemReply>
//    );
//  }

// import React, { useEffect, useState, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import withRouter from "helpers/withRouter";
// import WebSocketInstance from "websocket";
// import { MessageInput } from "components/MessageInput/MessageInput";
// import NoMessagesSvg from "images/svg/NoMessages/NoMessages";

// import { replyMessageThunk } from "redux/chat/chatThunk";

// import { useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";

// import {
//   DateNowText,
//   ChatBlockWrapper,
//   MessageList,
//   MessageListItem,
//   MessageListItemUsernameWrapper,
//   MessageListItemUsernameImage,
//   MessageListItemUsername,
//   MessageListItemMessage,
//   MessageListItemUsernameImageWrapper,
//   WrapperUsername,
//   Timestamp,
//   Wrp,
//   TimestampWrapper,
//   ReplyButton,
//   ReplyIcons,
// } from "./Chat.styled";

// const Chat = (props) => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   const [selectedMessageId, setSelectedMessageId] = useState(null);
//   const [isReply, setIsReply] = useState(false);
//   const [replyMessages, setReplyMessages] = useState(null);

//   console.log("replyMessages", replyMessages);

//   const dispatch = useDispatch();

//   console.log(messages);

//   const waitForSocketConnection = useCallback((callback) => {
//     setTimeout(function () {
//       if (WebSocketInstance.state() === 1) {
//         console.log("Connection is secure");
//         callback();
//       } else {
//         console.log("Waiting for connection...");
//         waitForSocketConnection(callback);
//       }
//     }, 100);
//   }, []);

//   useEffect(() => {
//     WebSocketInstance.connect(props.params.chatSlug);

//     waitForSocketConnection(() => {
//       WebSocketInstance.addCallbacks(setMessages, addMessage);
//       WebSocketInstance.fetchMessages(props.username, props.params.chatSlug);
//     });
//   }, [waitForSocketConnection, props.username, props.params.chatSlug]);

//   // Scrolling and fetching messages
//   // eslint-disable-next-line
//   // const [currentPage, setCurrentPage] = useState(1);
//   const accessToken = useSelector(selectAccessToken);

//   const handleScroll = () => {
//     console.log("handleScroll");
//   };

//   useEffect(() => {}, []);

//   // eslint-disable-next-line
//   const getMessages = async () => {
//     // eslint-disable-next-line
//     // const chat_id = 22;
//     // const options = {
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //   },
//     //   chat_id,
//     // };
//     // const { data } = await axios.get(
//     //   "http://buzz-talk-api.onrender.com/chat/scrole-page?page=1",
//     //   {
//     //     headers: {
//     //       Authorization: `Bearer ${token}`,
//     //     },
//     //     // data: {
//     //     //   chat_id,
//     //     // },
//     //     chat_id,
//     //   }
//     // );
//     // console.log("data getMessages pagination", data);
//     // setMessages(data);
//   };

//   useEffect(() => {
//     getMessages(accessToken);
//   }, [accessToken]);

//   // const messageList = document.querySelector(".messages");
//   // console.log("messageList", messageList);

//   // const [scroll, setScroll] = React.useState(0);

//   // useEffect(() => {
//   //   const scrollContainer = document.getElementById("messages");

//   //   if (scrollContainer) {
//   //     scrollContainer.addEventListener("scroll", handleScroll);

//   //     return () => {
//   //       // Clean up by removing the event listener when the component unmounts
//   //       scrollContainer.removeEventListener("scroll", handleScroll);
//   //     };
//   //   }
//   // }, []);

//   const addMessage = (message) => {
//     setMessages((prevMessages) => [...prevMessages, message]);
//   };

//   const messageChangeHandler = (event) => {
//     setMessage(event.target.value);
//   };

//   const sendMessageHandler = (event) => {
//     event.preventDefault();

//     const messageObject = {
//       from: props.username,
//       content: message,
//       chatSlug: props.params.chatSlug,
//     };

//     WebSocketInstance.newChatMessage(messageObject);
//     setMessage("");
//   };

//   const renderTimestamp = (timestamp) => {
//     let prefix = "";
//     const timeDiff = Math.round(
//       (new Date().getTime() - new Date(timestamp).getTime()) / 60000
//     );
//     if (timeDiff < 1) {
//       // less than one minute ago
//       prefix = "just now...";
//     } else if (timeDiff < 60 && timeDiff > 1) {
//       // less than sixty minutes ago
//       prefix = `${timeDiff} minutes ago`;
//     } else if (timeDiff < 24 * 60 && timeDiff > 60) {
//       // less than 24 hours ago
//       prefix = `${Math.round(timeDiff / 60)} hours ago`;
//     } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
//       // less than 7 days ago
//       prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
//     } else {
//       prefix = `${new Date(timestamp)}`;
//     }
//     return prefix;
//   };

//   const onReplyHandler = async () => {
//     const body = {
//       chat_id: JSON.stringify(19),
//       message_id: JSON.stringify(173),
//       content: JSON.stringify("Reply to message 19"),
//     };

//     // const data = await axios.post(
//     //   "http://buzz-talk-api.onrender.com/chat/reply/",
//     //   {
//     //     headers: {
//     //       "Access-Control-Allow-Origin": "*",
//     //       Authorization: `Bearer ${accessToken}`,
//     //     },
//     //     body,
//     //   }
//     // );

//     const { payload } = await dispatch(replyMessageThunk(body));

//     setReplyMessages(payload);
//   };

//   const renderMessages = (messages) => {
//     // console.log("messages", messages);

//     return messages.map((message, i, arr) => (
//       <MessageListItem
//         key={`${message.id}_${i}`}
//         // To stylize received and sent messages
//         // className={message.author.username === currentUser ? "sent" : "replies"}
//       >
//         <MessageListItemUsernameWrapper>
//           <Wrp>
//             <MessageListItemUsernameImageWrapper>
//               <MessageListItemUsernameImage
//                 src={message.author.image}
//                 alt="avatar"
//               />
//             </MessageListItemUsernameImageWrapper>
//             <WrapperUsername>
//               <MessageListItemUsername>
//                 {message.author.username}
//               </MessageListItemUsername>
//               <MessageListItemMessage>{message.content}</MessageListItemMessage>
//             </WrapperUsername>
//           </Wrp>
//         </MessageListItemUsernameWrapper>
//         <TimestampWrapper>
//           <Timestamp>{renderTimestamp(message.timestamp)}</Timestamp>
//           <ReplyButton onClick={onReplyHandler}>
//             <ReplyIcons />
//           </ReplyButton>
//         </TimestampWrapper>
//       </MessageListItem>
//     ));
//   };

//   return (
//     <ChatBlockWrapper className="messages-wrapper">
//       {!messages.length ? (
//         <NoMessagesSvg />
//       ) : (
//         <>
//           <DateNowText>Today</DateNowText>
//           <MessageList className="messages" onScroll={handleScroll}>
//             {messages && renderMessages(messages)}
//           </MessageList>
//           {/* {!replyMessages ? (
//             <>
//               <DateNowText>Today</DateNowText>
//               <MessageList className="messages" onScroll={handleScroll}>
//                 {messages && renderMessages(messages)}
//               </MessageList>
//             </>
//           ) : (
//             <>
//               <DateNowText>Today</DateNowText>
//               <MessageList className="messages" onScroll={handleScroll}>
//                 {messages && renderMessages(messages)}
//               </MessageList>

//             </>
//           )} */}
//         </>
//       )}
//       <MessageInput
//         onSubmit={sendMessageHandler}
//         onChange={messageChangeHandler}
//         value={message}
//       />
//     </ChatBlockWrapper>
//   );
// };

// export default withRouter(Chat);

// import React from "react";
// import withRouter from "helpers/withRouter";
// import WebSocketInstance from "websocket";
// import { MessageInput } from "components/MessageInput/MessageInput";
// import Hoc from "hoc/hoc";

// import {
//   MessageList,
//   MessageListItem,
//   MessageListItemUsernameWrapper,
//   MessageListItemUsernameImage,
//   MessageListItemUsername,
//   MessageListItemMessage,
//   MessageListItemUsernameImageWrapper,
//   WrapperUsername,
//   Timestamp,
//   Wrp,
// } from "./Chat.styled";

// class Chat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.waitForSocketConnection(() => {
//       WebSocketInstance.addCallbacks(
//         this.setMessages.bind(this),
//         this.addMessage.bind(this)
//       );
//       WebSocketInstance.fetchMessages(
//         this.props.username,
//         this.props.params.chatSlug
//       );
//     });
//     WebSocketInstance.connect(this.props.params.chatSlug);
//   }
//   //Functionality of scrolling scrolling to the latest messages
//   // componentDidMount() {
//   //   WebSocketInstance.connect();
//   //   this.scrollToBottom();
//   // }

//   // scrollToBottom = () => {
//   //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
//   // };

//   // componentDidUpdate() {
//   //   this.scrollToBottom();
//   // }

//   waitForSocketConnection(callback) {
//     const component = this;

//     setTimeout(function () {
//       if (WebSocketInstance.state() === 1) {
//         console.log("Connection is secure");
//         callback();
//         return;
//       } else {
//         console.log("wait for connection...");
//         component.waitForSocketConnection(callback);
//       }
//     }, 100);
//   }

//   addMessage(message) {
//     this.setState({ messages: [...this.state.messages, message] });
//   }

//   setMessages(messages) {
//     this.setState({ messages: messages.reverse() });
//   }

//   messageChangeHandler = (event) => {
//     this.setState({
//       message: event.target.value,
//     });
//   };

//   sendMessageHandler = (event) => {
//     event.preventDefault();

//     const messageObject = {
//       from: this.props.username,
//       content: this.state.message,
//       chatSlug: this.props.params.chatSlug,
//     };

//     WebSocketInstance.newChatMessage(messageObject);

//     this.setState({
//       message: "",
//     });
//   };

// renderTimestamp = (timestamp) => {
//   let prefix = "";
//   const timeDiff = Math.round(
//     (new Date().getTime() - new Date(timestamp).getTime()) / 60000
//   );
//   if (timeDiff < 1) {
//     // less than one minute ago
//     prefix = "just now...";
//   } else if (timeDiff < 60 && timeDiff > 1) {
//     // less than sixty minutes ago
//     prefix = `${timeDiff} minutes ago`;
//   } else if (timeDiff < 24 * 60 && timeDiff > 60) {
//     // less than 24 hours ago
//     prefix = `${Math.round(timeDiff / 60)} hours ago`;
//   } else if (timeDiff < 31 * 24 * 60 && timeDiff > 24 * 60) {
//     // less than 7 days ago
//     prefix = `${Math.round(timeDiff / (60 * 24))} days ago`;
//   } else {
//     prefix = `${new Date(timestamp)}`;
//   }
//   return prefix;
// };

// renderMessages = (messages) => {
//   // const currentUser = this.props.username;

//   return messages.map((message, i, arr) => (
//     <MessageListItem
//       key={message.id}
//       // To stylize received and sent messages
//       // className={message.author.username === currentUser ? "sent" : "replies"}
//     >
//       <MessageListItemUsernameWrapper>
//         <Wrp>
//           <MessageListItemUsernameImageWrapper>
//             <MessageListItemUsernameImage
//               src={message.author.image}
//               alt="avatar"
//             />
//           </MessageListItemUsernameImageWrapper>
//           <WrapperUsername>
//             <MessageListItemUsername>
//               {message.author.username}
//             </MessageListItemUsername>
//             <MessageListItemMessage>{message.content}</MessageListItemMessage>
//           </WrapperUsername>
//         </Wrp>
//       </MessageListItemUsernameWrapper>
//       <Timestamp>{this.renderTimestamp(message.timestamp)}</Timestamp>
//     </MessageListItem>
//   ));
// };

//   render() {
//     const messages = this.state.messages;

//     return (
//       <Hoc>
//         <MessageList>
//           {messages && this.renderMessages(messages)}
//           {/* Functionality of scrolling scrolling to the latest messages */}
//           {/* <div
//             style={{ float: "left", clear: "both" }}
//             ref={(el) => {
//               this.messagesEnd = el;
//             }}
//           ></div> */}
//         </MessageList>
//         <MessageInput
//           onSubmit={this.sendMessageHandler}
//           onChange={this.messageChangeHandler}
//           value={this.state.message}
//         />
//       </Hoc>
//     );
//   }
// }

// export default withRouter(Chat);
