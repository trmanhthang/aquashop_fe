import {useEffect, useMemo, useState} from "react";
import Button from "~/components/component/Button";
import WebSocketClient from "~/utils/websocket";
import UserService from "~/services/user";


function Test() {
    const userId = UserService.getId();
    const [notifications, setNotifications] = useState([]);

    const ws = useMemo(() => new WebSocketClient(`/notification/${userId}`, (message) => {
        setNotifications((prevState) => [...prevState, message]);
    }), []);

    useEffect(() => {
        ws.connect();
    }, [ws]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>

            <Button
                onClick={() => {
                    ws.send("abc");
                }}
            >
                test
            </Button>
        </div>
    );
}

export default Test;