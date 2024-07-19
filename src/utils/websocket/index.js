import client from "~/utils/websocket/websocket";

const WebsocketService = {
    connect: () => {
        client.onConnect = (frame) => {
            console.log('Connected: ' + frame);

        };

        client.activate();
    },

    disconnect: () => {
        if(client) {
            client.deactivate().then();
        }
    },

    sendMessage: (destination, message) => {
        client.publish({
            destination: destination,
            body: JSON.stringify(message),
        })
    },

    subscribe: (destination, callback) => {
        return client.subscribe(destination, callback);
    },

    subscribeToUserQueue: (callback) => {
        return client.subscribe('/user/queue/notification', callback);
    },
 }

 export default WebsocketService;