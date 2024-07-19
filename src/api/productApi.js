import axiosClient from "~/utils/axios/axiosClient";
import TokenService from "~/services/token";

const productApi = {
    searchPublic: ( data ) => {
        const act = TokenService.getAccessToken();
        const url = `/api/product/search/public?key=${data.key}&size=${data.size}`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${act}`
            }
        });
    },

    getAllPublic: () => {
        const url = '/api/product/public';
        return axiosClient.get(url);
    },

    findById: ( id ) => {
        const url = `/api/product/detail?id=${id}`;
        return axiosClient.get(url);
    },
}

export default productApi;