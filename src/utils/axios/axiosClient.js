// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import {getAccessToken} from "~/services/token";
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

axiosClient.interceptors.request.use(async (config) => {
// Handle token here ...
    const act = getAccessToken();

    if (act) {
        config.headers.Authorization = `Bearer ${act}`
    }

    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
// Handle errors
    throw error;
});
export default axiosClient;