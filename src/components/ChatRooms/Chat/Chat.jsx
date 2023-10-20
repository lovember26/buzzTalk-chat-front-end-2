import React from "react";
import withRouter from "helpers/withRouter";
import WebSocketInstance from "websocket";
import {
  MessageList,
  MessageListItem,
  MessageListItemUsername,
  MessageListItemMessage,
  StyledForm,
} from "./Chat.styled";

class Chat extends React.Component {
  state = { message: "" };

  constructor(props) {
    super(props);

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(
        this.setMessages.bind(this),
        this.addMessage.bind(this)
      );
      // In video this.props.currentUser and without this.props.match.params.chatID
      WebSocketInstance.fetchMessages(
        this.props.username,
        // this.props.match.params.chatID
        1
      );
    });
  }

  componentDidMount() {
    WebSocketInstance.connect();
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

    console.log("this.state.message in sendMessageHandler", this.state.message);

    const messageObject = {
      from: this.props.params.username,
      content: this.state.message,
      chatId: 1,
      // chatId: this.props.match.params.chatID,
    };

    // I added it myself and the code started working
    // this.addMessage(this.state.message);

    WebSocketInstance.newChatMessage(messageObject);

    this.setState({
      message: "",
    });
  };

  renderMessages = (messages) => {
    console.log("messages in renderMessages", messages);
    const currentUser = this.props.params.username;

    return messages.map((message, i, arr) => (
      <MessageListItem key={Date.now()}>
        <MessageListItemUsername>{currentUser}:</MessageListItemUsername>
        {/* From video but it is not work */}
        <MessageListItemMessage>{message.content}</MessageListItemMessage>
      </MessageListItem>
    ));
  };

  render() {
    const messages = this.state.messages;
    const { username } = this.props.params;

    console.log("this.state", this.state);

    return (
      <>
        <h3>Chat Page</h3>
        <div style={{ marginBottom: "20px" }}>
          CHAT with <span style={{ fontWeight: 800 }}>{username}</span>
        </div>

        <MessageList>{messages && this.renderMessages(messages)}</MessageList>
        <StyledForm onSubmit={this.sendMessageHandler}>
          <input
            onChange={this.messageChangeHandler}
            value={this.state.message}
          />
          <button>Send</button>
        </StyledForm>
      </>
    );
  }
}

export default withRouter(Chat);
// ===============================================================
// The same code in React Component
// import { useState } from "react";
// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   console.log("messages", messages);

//   return <div>CHAT with username</div>;
// }

// ================================================================
// Code from Dima's repo

// import React from 'react';
// import { connect } from 'react-redux';
// import WebSocketInstance from '../websocket';
// import Hoc from '../hoc/hoc';

// class Chat extends React.Component {

//   state = { message: '' }

//     initializeChat() {
//         this.waitForSocketConnection(() => {
//           WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this))
//           WebSocketInstance.fetchMessages(
//               this.props.username,
//               this.props.match.params.chatID
//           );
//         });
//         WebSocketInstance.connect(this.props.match.params.chatID);
//     }

// constructor(props) {
//     super(props);
//     this.initializeChat();
// }

//     componentWillReceiveProps(newProps) {
//         if (this.props.match.params.chatID !== newProps.match.params.chatID) {
//             WebSocketInstance.disconnect();
//             this.waitForSocketConnection(() => {
//               WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this))
//               WebSocketInstance.fetchMessages(
//                   this.props.username,
//                   newProps.match.params.chatID
//               );
//             });
//             WebSocketInstance.connect(newProps.match.params.chatID);
//         }
//     }

//     waitForSocketConnection(callback) {
//         const component = this;
//         setTimeout(
//             function () {
//             if (WebSocketInstance.state() === 1) {
//                 console.log("Connection is made");
//                 callback();
//                 return;
//             } else {
//                 console.log("wait for connection...");
//                 component.waitForSocketConnection(callback);
//             }
//         }, 100);
//     }

// addMessage(message) {
//     this.setState({ messages: [...this.state.messages, message] });
// }

// setMessages(messages) {
//     this.setState({ messages: messages.reverse()});
// }

// messageChangeHandler = (event) =>  {
//     this.setState({
//         message: event.target.value
//     })
// }

// sendMessageHandler = (e) => {
//     e.preventDefault();
//     const messageObject = {
//         from: this.props.username,
//         content: this.state.message,
//         chatId: this.props.match.params.chatID
//     };
//     WebSocketInstance.newChatMessage(messageObject);
//     this.setState({
//         message: ''
//     });
// }

//     renderTimestamp = timestamp => {
//         let prefix = '';
//         const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime())/60000);
//         if (timeDiff < 1) { // less than one minute ago
//             prefix = 'just now...';
//         } else if (timeDiff < 60 && timeDiff > 1) { // less than sixty minutes ago
//             prefix = `${timeDiff} minutes ago`;
//         } else if (timeDiff < 24*60 && timeDiff > 60) { // less than 24 hours ago
//             prefix = `${Math.round(timeDiff/60)} hours ago`;
//         } else if (timeDiff < 31*24*60 && timeDiff > 24*60) { // less than 7 days ago
//             prefix = `${Math.round(timeDiff/(60*24))} days ago`;
//         } else {
//             prefix = `${new Date(timestamp)}`;
//         }
//         return prefix
//     }

// renderMessages = (messages) => {
//     const currentUser = this.props.username;
//     return messages.map((message, i, arr) => (
//         <li
//             key={message.id}
//             style={{marginBottom: arr.length - 1 === i ? '300px' : '15px'}}
//             className={message.author === currentUser ? 'sent' : 'replies'}>
//             <img src="http://emilcarlsson.se/assets/mikeross.png" />
//             <p>{message.content}
//                 <br />
//                 <small>
//                     {this.renderTimestamp(message.timestamp)}
//                 </small>
//             </p>
//         </li>
//     ));
// }

//     scrollToBottom = () => {
//         this.messagesEnd.scrollIntoView({ behavior: "smooth" });
//     }

//     componentDidMount() {
//         this.scrollToBottom();
//     }

//     componentDidUpdate() {
//         this.scrollToBottom();
//     }

//     render() {

//         const messages = this.state.messages;
//         return (
//             <Hoc>
//                 <div className="messages">
//                     <ul id="chat-log">
//                     {
//                         messages &&
//                         this.renderMessages(messages)
//                     }
//                     <div style={{ float:"left", clear: "both" }}
//                         ref={(el) => { this.messagesEnd = el; }}>
//                     </div>
//                     </ul>
//                 </div>
//                 <div className="message-input">
//                     <form onSubmit={this.sendMessageHandler}>
//                         <div className="wrap">
//                             <input
// onChange={this.messageChangeHandler}
// value={this.state.message}
//                                 required
//                                 id="chat-message-input"
//                                 type="text"
//                                 placeholder="Write your message..." />
//                             <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
//                             <button id="chat-message-submit" className="submit">
//                                 <i className="fa fa-paper-plane" aria-hidden="true"></i>
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </Hoc>
//         );
//     };
// }

// const mapStateToProps = state => {
//     return {
//         username: state.username
//     }
// }

// export default connect(mapStateToProps)(Chat);
