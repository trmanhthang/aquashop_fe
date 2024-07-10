import {getPathHistory} from "~/services/path";
import {authenticationApi} from "~/api";
import TokenService from "~/services/token";

class AuthenticationService {
    login = async (values, navigate) => {
        try {
            const response = await authenticationApi.login(values);
            console.log(response);
            navigate(getPathHistory());
            return false;
        } catch (error) {
            console.log(error);
        }
    };

    signup = async (values, navigate) => {
        try {
            await authenticationApi.signup(values);
            return false;
        } catch (error) {

        }
    };

    refresh = async (navigate) => {
        const rft = {
            token: TokenService.getRefreshToken(),
        };
        const act = await authenticationApi.refresh(rft);
        TokenService.setAccessToken(act);
    };
}

export default new AuthenticationService();