import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import withRouter from "helpers/withRouter";
import WebSocketInstance from "websocket";

import { MessageInput } from "components/MessageInput/MessageInput";
import NoMessagesSvg from "images/svg/NoMessages/NoMessages";
import ReadMark from "images/svg/ReadMark/ReadMark";

import NoFriends from "components/ChatRooms/NoFriends/NoFriends";

import { selectFetchAllPrivateChats } from "redux/chat/chatSelectors";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

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
  ReplyIconsReply,
  WrapperSecond,
  LineReply,
  WhoReply,
  TextReply,
  DownloadMoreButton,
  ReadMarkWrapper,
} from "./Chat.styled";
import FriendInfo from "../FriendInfo/FriendInfo";

const Chat = (props) => {
  // State for usual messages
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [page, setPage] = useState(1);
  const pageSize = 2;

  // const [fetching, setFetching] = useState(true);

  console.log("page:", page);

  // State for reply messages
  const [isReply, setIsReply] = useState(false);
  const [replyMessageId, setReplyMessageId] = useState(null);
  const [replyTo, setReplyTo] = useState(null);

  const privateChats = useSelector(selectFetchAllPrivateChats);
  const publicChats = useSelector(selectFetchAllPublicChats);

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
    WebSocketInstance.connect(props.params.chatSlug, props.accessToken);

    waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(setMessages, addMessage);
      WebSocketInstance.fetchMessages();
    });
  }, [waitForSocketConnection, props.params.chatSlug, props.accessToken]);

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
  const addMessage = (message) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    WebSocketInstance.newChatMessage(message, isReply, replyMessageId);
    setMessage("");
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

  const onReplyHandler = async (messageId, messageAuthorName) => {
    setIsReply(true);
    setReplyMessageId(messageId);
    setReplyTo(messageAuthorName);
  };

  const renderMessages = (messages) => {
    const reversedMessages = [...messages].reverse();

    return reversedMessages.map((message, i, arr) => {
      return !message.reply_to ? (
        <MessageListItem key={`${message.id}_${i}`}>
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
            <ReplyButton
              onClick={() =>
                onReplyHandler(message.id, message.author[0].username)
              }
            >
              <ReplyIcons />
            </ReplyButton>
          </TimestampWrapper>
        </MessageListItem>
      ) : (
        // When reply
        <MessageListItemReply key={`${message.id}_${i}`}>
          <WrapperSecond>
            <MessageListItemUsernameImageWrapperReply>
              <MessageListItemUsernameImageReply
                src={message.reply_to.author[0].image}
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
              {renderTimestamp(message.reply_to.timestamp)}
            </TimestampReply>
            <ReplyButton
              onClick={() =>
                onReplyHandler(message.id, message.author[0].username)
              }
            >
              <ReplyIconsReply />
            </ReplyButton>
          </TimestampWrapperReply>
        </MessageListItemReply>
      );
    });
  };

  // const onLoadMore = () => {
  //   setPage((prevState) => prevState + 1);
  // };

  const onLoadMore = () => {
    const nextPage = page + 1;
    WebSocketInstance.fetchMessages(nextPage, pageSize);
    setPage(nextPage);
  };

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
          <ChatBlockWrapper className="messages-wrapper">
            {!messages?.length ? (
              <NoMessagesSvg />
            ) : (
              <>
                <DateNowText>Today</DateNowText>
                {/* <MessageList className="messages" onScroll={handleScroll}> */}
                <MessageList className="messages">
                  {messages && renderMessages(messages)}
                </MessageList>
                <DownloadMoreButton onClick={onLoadMore}>
                  More messages
                </DownloadMoreButton>
              </>
            )}
            <MessageInputWrapper>
              {isReply && (
                <ReplyInputWrapper>
                  <ReplyToText>I am replying to {replyTo}</ReplyToText>
                  <button onClick={() => setIsReply(false)}>Close</button>
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
        </div>
      )}
    </>
  );
};

export default withRouter(Chat);
