import {useEffect} from "react";
import PathHistoryService from "~/services/path";

function Search() {
    useEffect(() => {
        PathHistoryService.savePathHistory();
    }, [])

    return(
        <h1>Search</h1>
    )
}

export default Search;