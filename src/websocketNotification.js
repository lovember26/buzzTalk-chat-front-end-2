import { WEBSOCKET_URL } from "constants";

const connectWebSocketNotification = (accessToken) => {
    const path = `${WEBSOCKET_URL}/notifications/?token=${accessToken}`;
    const client = new WebSocket(path);

    client.onopen = () => {
        console.log("Notification WebSocket connected!");
    };

    client.onmessage = (event) => {
        console.log("Received notification message:", event.data);
    };

    client.onclose = () => {
        console.log("Notification WebSocket closed!");
    };

    client.onerror = (error) => {
        console.error("Notification WebSocket error:", error);
    };

    return client;
};

const disconnectWebSocketNotification = (socket) => {
    if (socket) {
        socket.close();
    }
};

export { connectWebSocketNotification, disconnectWebSocketNotification };