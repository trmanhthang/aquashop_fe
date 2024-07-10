import {useEffect} from "react";
import {savePathHistory} from "~/services/path";

function Search() {
    useEffect(() => {
        savePathHistory();
    }, [])

    return(
        <h1>Search</h1>
    )
}

export default Search;