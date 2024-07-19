import {useEffect, useState} from "react";
import {Button} from "reactstrap";
import WebsocketService from "~/utils/websocket";

function Test() {
    const [response, setResponse] = useState('');

    useEffect(() => {
        WebsocketService.connect();

        return () => {
            WebsocketService.disconnect();
        }
    }, [])

    const handleMessage = () => {
        WebsocketService.sendMessage('/app/user/123', 'abc')
    }

    return (
        <>
            <Button
                onClick={handleMessage}
            >
                Test
            </Button>
            {response}
        </>
    )
}

export default Test;