import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client"

const socket = new SockJS(process.env.REACT_APP_API_URL + "/ws");
const client = new Client({
    webSocketFactory: () => socket,
    debug: (str) => {
        console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
});

export default client;
