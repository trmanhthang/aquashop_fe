class WebSocketClient {
    constructor(destination, onMessageCallback) {
        this.destination = destination;
        this.onMessageCallback = onMessageCallback;
        this.socket = null;
    }

    // Kết nối đến WebSocket server
    connect() {
        if (this.socket) {
            console.warn('WebSocket already connected');
            return;
        }

        this.socket = new WebSocket(process.env["REACT_APP_SOCKET_URL"] + "/ws" + this.destination);

        this.socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        this.socket.onmessage = (event) => {
            if (this.onMessageCallback) {
                this.onMessageCallback(event.data);
            }
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
            this.socket = null;
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }

    // Gửi tin nhắn đến WebSocket server
    send(data) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(data));
        } else {
            console.error('WebSocket is not open');
        }
    }

    // Ngắt kết nối WebSocket
    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default WebSocketClient;