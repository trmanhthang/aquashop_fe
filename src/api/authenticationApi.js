import axiosClient from "~/utils/axios/axiosClient";

const authenticationApi = {
  login: (params) => {
      const url = "/api/auth/login";
      return axiosClient.post(url, params )
  }
}

export default authenticationApi;