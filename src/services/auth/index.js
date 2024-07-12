import PathHistoryService from "~/services/path";
import {authenticationApi} from "~/api";
import TokenService from "~/services/token";

const AuthenticationService = {
    login: async (values, navigate) => {
        try {
            const response = await authenticationApi.login(values);
            TokenService.setAccessToken(response.data.act);
            TokenService.setRefreshToken(response.data?.rft)
            navigate(PathHistoryService.getPathHistory());
            return false;
        } catch (error) {
            console.log(error);
        }
    },

    signup: async (values) => {
        try {
            await authenticationApi.signup(values);
            return false;
        } catch (error) {

        }
    },

    refresh: async () => {
        const rft = {
            token: TokenService.getRefreshToken(),
        };
        const act = await authenticationApi.refresh(rft);
        TokenService.setAccessToken(act);
    },
}

export default AuthenticationService;