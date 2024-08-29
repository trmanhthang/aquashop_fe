import axiosClient from "~/utils/axios/axiosClient";
import TokenService from "~/services/token";

const act = TokenService.getAccessToken();
const authorization = `Bearer ${act}`;

const cartApi = {
    getAll: () => {
        const url = "/api/cart";
        return axiosClient.get(url, {
            headers: {
                Authorization: authorization,
            }
        })
    },
}

export default cartApi;