import axiosClient from "~/utils/axios/axiosClient";
import {getAccessToken} from "~/services/token";

const searchApi = {
    searchPublic: ( data ) => {
        const act = getAccessToken();
        const url = `/api/product/search/public?key=${data.key}&size=${data.size}`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${act}`
            }
        })
    }
}

export default searchApi;