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

const disconnectWebSocketChat = (socket) => {
    if (socket) {
        socket.close();
    }
};

export { connectWebSocketChat, disconnectWebSocketChat };