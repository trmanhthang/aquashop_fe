import axiosClient from "~/utils/axios/axiosClient";
import TokenService from "~/services/token";

const cartApi = {
    getAll: () => {
        const act = TokenService.getAccessToken();
        const url = "/api/cart";
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${act}`
            }
        })
    },
}

export default cartApi;