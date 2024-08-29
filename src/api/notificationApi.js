import TokenService from "~/services/token";
import axiosClient from "~/utils/axios/axiosClient";

const act = TokenService.getAccessToken();
const authorization = `Bearer ${act}`;

const notificationApi = {
    getAll: () => {
        const url = "/api/notification";
        return axiosClient.get(url, {
            headers: {
                Authorization: authorization,
            },
        })
    },

    setStatus: (id) => {
       const url = `/api/notification?id=${id}`;
        return axiosClient.put(url, {
            headers: {
                Authorization: authorization,
            }
        })
    },

    delete: (id) => {
        const url = `/api/notification?id=${id}`;
        return axiosClient.delete(url, {
            headers: {
                Authorization: authorization,
            }
        });
    }
};

export default notificationApi;