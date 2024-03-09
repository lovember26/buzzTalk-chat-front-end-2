import { WEBSOCKET_URL } from "constants";

const connectWebSocketChat = (chatSlug, accessToken) => {
    const path = `${WEBSOCKET_URL}/chat/${chatSlug}/?token=${accessToken}`;
    const client = new WebSocket(path);

    client.onopen = () => {
        console.log("Chat WebSocket connected!");
        client.send(JSON.stringify({ command: "fetch_messages" }));
        
    };

    client.onmessage = (event) => {
        console.log("Received Chat message:", event.data);
    };

    client.onclose = () => {
        console.log("Chat WebSocket closed!");
    };

    client.onerror = (error) => {
        console.error("Chat WebSocket error:", error);
    };

    return client;
};

const sendMessageWebSocketChat = (socket, message, isReply, replyMessageId,isEdit, selectedMessage) => {
    if (socket.readyState === WebSocket.OPEN) {
        const messageData = isReply ?
        {
            command: "new_message",
            text: message,
            parent:replyMessageId
        } : isEdit ? { 
            command: "edit_message",
            message_id:selectedMessage.id,
            text: message
        } : { 
            command: "new_message",
            text: message
        } 
        
        socket.send(JSON.stringify(messageData));
    } else {
        console.error("WebSocket is not open. Cannot send message.");
    }
};

const deleteMessageWebSocketChat=(socket, id)=>{
    if (socket.readyState === WebSocket.OPEN) {
        const messageData =
        {
            command: "delete_message",
           message_id:id
        } ;
        
        socket.send(JSON.stringify(messageData));
        
    } 
    
    else {
        console.error("WebSocket is not open. Cannot delete message.");
    }
}

const disconnectWebSocketChat = (socket) => {
    if (socket) {
        socket.close();
    }
};

export { connectWebSocketChat, disconnectWebSocketChat, sendMessageWebSocketChat,deleteMessageWebSocketChat };