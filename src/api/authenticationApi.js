import axiosClient from "~/utils/axios/axiosClient";

const authenticationApi = {
  login: (params) => {
      const url = "";
      return axiosClient.post(url, { params })
  }
}

export default authenticationApi;