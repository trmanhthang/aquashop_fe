import axiosClient from "~/utils/axios/axiosClient";
import TokenService from "~/services/token";

const searchApi = {
    searchPublic: ( data ) => {
        const act = TokenService.getAccessToken();
        const url = `/api/product/search/public?key=${data.key}&size=${data.size}`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${act}`
            }
        })
    }
}

export default searchApi;