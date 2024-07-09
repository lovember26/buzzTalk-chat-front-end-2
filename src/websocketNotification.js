import { WEBSOCKET_URL } from "constants";

const connectWebSocketNotification = (accessToken) => {
    if (!accessToken) {
        console.error("Access token is missing");
        return null;
    }

    const path = `${WEBSOCKET_URL}/notifications/?token=${accessToken}`;
    console.log("Connecting to WebSocket at ", path);

    try {
        const client = new WebSocket(path);

        client.onopen = () => {
            console.log("Notification WebSocket connected!", path);
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
    } catch (error) {
        console.error("WebSocket connection failed:", error);
        return null;
    }
};

const disconnectWebSocketNotification = (socket) => {
    if (socket && socket.readyState === 1) {
        socket.close();
    }
};

export { connectWebSocketNotification, disconnectWebSocketNotification };