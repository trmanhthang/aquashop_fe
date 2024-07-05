import Cookies from "js-cookie";
import {decodedData} from "~/services/encryption";

const getAccessToken = () => {
    const data = Cookies.get('token');
    if(data) {
        const decrypt = decodedData(data);
        return JSON.parse(decrypt)?.accessToken;
    }
    return ''
}

const getRefreshToken = () => {
    const data = Cookies.get('token');
    if (data) {
        const decrypt = decodedData(data);
        return JSON.parse(decrypt)?.refreshToken;
    }
    return ''
}

export { getAccessToken, getRefreshToken };