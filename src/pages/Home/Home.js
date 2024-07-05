import {useEffect} from "react";
import {savePathHistory} from "~/services/path";

function Home() {
    useEffect(() => {
        savePathHistory();
    }, [])
    return(
        <h1>Home page</h1>
    )
}

export default Home;