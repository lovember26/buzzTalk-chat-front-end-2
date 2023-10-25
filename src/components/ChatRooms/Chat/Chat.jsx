import React from "react";
import withRouter from "helpers/withRouter";
import WebSocketInstance from "websocket";
import { MessageInput } from "components/MessageInput/MessageInput";
import Hoc from "hoc/hoc";

import {
  MessageList,
  MessageListItem,
  MessageListItemUsernameWrapper,
  MessageListItemUsernameImage,
  MessageListItemUsername,
  MessageListItemMessage,
  Timestamp,
} from "./Chat.styled";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this)
      );
      WebSocketInstance.fetchMessages(
        this.props.username,
        this.props.params.chatId
      );
    });
    WebSocketInstance.connect(this.props.params.chatId);
  }
  //Functionality of scrolling scrolling to the latest messages
  componentDidMount() {
    WebSocketInstance.connect();
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  waitForSocketConnection(callback) {
    const component = this;

    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is secure");
        callback();
        return;
      } else {
        console.log("wait for connection...");
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  addMessage(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  setMessages(messages) {
    this.setState({ messages: messages.reverse() });
  }

  messageChangeHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessageHandler = (event) => {
    event.preventDefault();

    const messageObject = {
      from: this.props.username,
      content: this.state.message,
      chatId: this.props.params.chatId,
    };

    WebSocketInstance.newChatMessage(messageObject);

    this.setState({
      message: "",
    });
  };

  renderTimestamp = (timestamp) => {
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

  renderMessages = (messages) => {
    console.log("messages", messages);
    const currentUser = this.props.username;

    return messages.map((message, i, arr) => (
      <MessageListItem
        key={message.id}
        className={message.author === currentUser ? "sent" : "replies"}
      >
        <MessageListItemUsernameWrapper>
          <MessageListItemUsername>{message.author}:</MessageListItemUsername>
          <MessageListItemUsernameImage alt="avatar" />
        </MessageListItemUsernameWrapper>
        <MessageListItemMessage>{message.content}</MessageListItemMessage>
        <Timestamp>{this.renderTimestamp(message.timestamp)}</Timestamp>
      </MessageListItem>
    ));
  };

  render() {
    const messages = this.state.messages;
    const chat = this.props.params.chatId;

    return (
      <Hoc>
        <div
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            marginLeft: "16px",
          }}
        >
          CHAT number <span style={{ fontWeight: 800 }}>{chat}</span>
        </div>

        <MessageList>
          {messages && this.renderMessages(messages)}
          {/* Functionality of scrolling scrolling to the latest messages */}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          ></div>
        </MessageList>
        <MessageInput
          onSubmit={this.sendMessageHandler}
          onChange={this.messageChangeHandler}
          value={this.state.message}
        />
      </Hoc>
    );
  }
}

export default withRouter(Chat);
