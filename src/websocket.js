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

  connect(chatSlug, accessToken) {
    const path = `wss://backend/ws/chat/${chatSlug}/?token=${accessToken}`;
    // const path = `ws://127.0.0.1:8000/ws/chat/${chatSlug}/?token=${accessToken}`;

    this.socketRef = new WebSocket(path);

    this.socketRef.onopen = () => {
      console.log("WebSocket open");
    };
    this.socketNewMessage(
      JSON.stringify({
        command: "fetch_messages",
      })
    );
    // sending new message
    this.socketRef.onmessage = (e) => {
      this.socketNewMessage(e.data);
      console.log("WebSocket onmessage");
    };
    this.socketRef.onerror = (e) => {
      console.log("WebSocket with error (onerror):", e.message);
    };
    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect();
    };
  }

  //Only to read the data as JSON
  socketNewMessage(data) {
    const parsedData = JSON.parse(data);
    console.log("parsedData socketNewMessage", parsedData);
    console.log("parsedData.command", parsedData.command);
    const command = parsedData.command;

    if (Object.keys(this.callbacks).length === 0) {
      return;
    }

    // Here, the array with the all messages is passed to the setMessages function
    if (command === "messages") {
      console.log("parsedData.messages", parsedData.messages);
      this.callbacks[command](parsedData.messages);
    }

    // Here, the object with the new message is passed to the addMessage function and calls it
    if (command === "new_message") {
      // console.log("parsedData.new_message", parsedData.message);
      this.callbacks[command](parsedData.message);
    }
  }

  fetchMessages(page, pageSize) {
    this.sendMessage({
      command: "fetch_messages",
      page,
      page_size: pageSize,
    });
  }

  newChatMessage(message, isReply, replyMessageId) {
    // console.log("newChatMessage:", message);
    // console.log("newChatMessage isReply:", isReply);
    // console.log("newChatMessage replyMessageId:", replyMessageId);

    if (!isReply) {
      console.log("not isReply message");
      this.sendMessage({
        command: "new_message",
        text: message,
      });
    } else {
      console.log("isReply message");
      this.sendMessage({
        command: "new_message",
        text: message,
        parent: replyMessageId,
      });
    }
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

// {
//   "send_unread_count": send_unread_count,
//    "new_message": new_message,
//     "fetch_messages": fetch_messages
// }
