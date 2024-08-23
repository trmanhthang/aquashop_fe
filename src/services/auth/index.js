import PathHistoryService from "~/services/path";
import {authenticationApi} from "~/api";
import TokenService from "~/services/token";

const AuthenticationService = {
    login: async (values, navigate) => {
        try {
            const res = await authenticationApi.login(values);
            TokenService.setAccessToken(res.data?.act);
            TokenService.setRefreshToken(res.data?.rft);
            localStorage.setItem("id", res.data?.id);
            localStorage.setItem("info", JSON.stringify(res.data?.userInfo));

            navigate(PathHistoryService.getPathHistory());
            return false;
        } catch (error) {
            console.log(error);
        }
    },

    signup: async (values) => {
        delete values?.confirm_password
        await authenticationApi.signup(values);
    },

    refresh: async () => {
        try {
            const rft = {
                token: TokenService.getRefreshToken(),
            };
            const act = await authenticationApi.refresh(rft);
            TokenService.setAccessToken(act);
        } catch (e) {
            console.log(e.message);
        }
    },
}

export default AuthenticationService;