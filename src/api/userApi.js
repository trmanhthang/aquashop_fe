import TokenService from "~/services/token";
import axiosClient from "~/utils/axios/axiosClient";

const userApi = {
    info: () => {
        const act = TokenService.getAccessToken();
        const url = `/api/user`;
        return axiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${act}`,
            },
        })
    }
}

export default userApi;