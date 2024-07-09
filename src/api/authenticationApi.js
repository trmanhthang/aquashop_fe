import axiosClient from "~/utils/axios/axiosClient";

const authenticationApi = {
    login: (body) => {
        const url = "/api/auth/login";
        return axiosClient.post(url, body, {
            headers: {
                Authorization: ""
            }
        })
    },

    signup: (body) => {
        const url = '/api/auth/register';
        return axiosClient.post(url, body)
    },

    refresh: (body) => {
      const url = "/api/auth/refresh_token";
      return axiosClient.post(url, body)
    }

}

export default authenticationApi;