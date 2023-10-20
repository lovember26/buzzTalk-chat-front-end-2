class WebSocketService {
  static instance = null;
  callbacks = {};

  componentDidMount() {
    console.log("callbacks", this.callbacks);
  }

  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect() {
    const path = "wss://buzz-talk-api.onrender.com/ws/chat/1/";
    this.socketRef = new WebSocket(path);

    this.socketRef.onopen = () => {
      console.log("WebSocket open");
    };
    this.socketNewMessage(
      JSON.stringify({
        command: "fetch_messages",
      })
    );
    this.socketRef.onmessage = (e) => {
      this.socketNewMessage(e.data);
    };
    this.socketRef.onerror = (e) => {
      console.log(e.message);
    };
    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect();
    };
  }
  //Only to read the data as JSON
  socketNewMessage(data) {
    const parsedData = JSON.parse(data);
    console.log("parsedData", parsedData);

    const command = parsedData.command;
    if (Object.keys(this.callbacks).length === 0) {
      return;
    }
    if (command === "messages") {
      this.callbacks[command](parsedData.messages);
    }
    if (command === "new_message") {
      this.callbacks[command](parsedData.message);
    }
  }
  //   fetchMessages(username, chatId)  ?? In video without chatId
  fetchMessages(username) {
    this.sendMessage({
      command: "fetch_messages",
      username: username,
      //   chat_id: chatId,
    });
  }
  //   In video without chat_id
  newChatMessage(message) {
    this.sendMessage({
      command: "new_message",
      from: message.from,
      message: message.content,
      //   chat_id: message.chatId,
    });
  }

  addCallbacks(messagesCallback, newMessageCallback) {
    this.callbacks["messages"] = messagesCallback;
    this.callbacks["new_message"] = newMessageCallback;
  }

  sendMessage(data) {
    try {
      this.socketRef.send(JSON.stringify({ ...data }));
    } catch (err) {
      console.log(err.message);
    }
  }

  state() {
    return this.socketRef.readyState;
  }

  WaitForSocketConnection(callback) {
    const soket = this.socketRef;
    const recursion = this.WaitForSocketConnection;

    setTimeout(function () {
      if (soket.readyState() === 1) {
        console.log("Connection is secure");
        if (callback != null) {
          callback();
        }
        return;
      } else {
        console.log("wait for connection...");
        recursion(callback);
      }
    }, 1);
  }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;

// ============================================================

// class WebSocketService {
//   static instance = null;
//   callbacks = {};

//   static getInstance() {
//     if (!WebSocketService.instance) {
//       WebSocketService.instance = new WebSocketService();
//     }
//     return WebSocketService.instance;
//   }

//   constructor() {
//     this.socketRef = null;
//   }

//   connect(chatUrl) {
//     const path = `ws://127.0.0.1:8000/ws/chat/${chatUrl}/`;
//     console.log(path)
//     this.socketRef = new WebSocket(path);
//     this.socketRef.onopen = () => {
//       console.log('WebSocket open');
//     };
//     // this.socketNewMessage(JSON.stringify({
//     //   command: 'fetch_messages'
//     // }));
//     this.socketRef.onmessage = e => {
//       this.socketNewMessage(e.data);
//     };
//     this.socketRef.onerror = e => {
//       console.log(e.message);
//     };
//     this.socketRef.onclose = () => {
//       console.log("WebSocket closed let's reopen");
//       this.connect();
//     };
//   }

//   disconnect() {
//     this.socketRef.close();
//   }

//   socketNewMessage(data) {
//     const parsedData = JSON.parse(data);
//     const command = parsedData.command;
// if (Object.keys(this.callbacks).length === 0) {
//   return;
// }
// if (command === 'messages') {
//   this.callbacks[command](parsedData.messages);
// }
// if (command === 'new_message') {
//   this.callbacks[command](parsedData.message);
// }
//   }

//   fetchMessages(username, chatId) {
//     this.sendMessage({
//       command: 'fetch_messages',
//       username: username,
//       chat_id: chatId
//     });
//   }

//   newChatMessage(message) {
//     this.sendMessage({
//       command: 'new_message',
//       from: message.from,
//       message: message.content,
//       chat_id: message.chatId
//     });
//   }

//   addCallbacks(messagesCallback, newMessageCallback) {
//     this.callbacks['messages'] = messagesCallback;
//     this.callbacks['new_message'] = newMessageCallback;
//   }

//   sendMessage(data) {
//     try {
//       this.socketRef.send(JSON.stringify({ ...data }));
//     }
//     catch(err) {
//       console.log(err.message);
//     }
//   }

//   state() {
//     return this.socketRef.readyState;
//   }

// }

// const WebSocketInstance = WebSocketService.getInstance();

// export default WebSocketInstance;
