// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import TokenService from "~/services/token";
import {authenticationApi} from "~/api";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
    withCredentials: true,
    paramsSerializer: params => queryString.stringify(params),
});

const onRequestSuccess = (config) => {
        return config;
}

const onResponseSuccess = (response) => {
    return response;
};

const onResponseError = async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/api/auth/login" && err.response) {
        // Access Token was expired
        if ((err.response.status === 401 || err.response.status === 403) && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
                const response = await authenticationApi.refresh({rft: TokenService.getRefreshToken()});
                const act = response?.data?.act;

                TokenService.setAccessToken(act);

                return axiosClient(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }

    // if (err.message === "Network Error") {
    //    window.location.href = '/ErrorServer';
    // }

    return Promise.reject(err);
};

axiosClient.interceptors.request.use(onRequestSuccess)

axiosClient.interceptors.response.use(onResponseSuccess, onResponseError);

export default axiosClient;