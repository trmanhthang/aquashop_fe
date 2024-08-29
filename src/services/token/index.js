import Cookies from "js-cookie";
import EncryptionService from "~/services/encryption";

const TokenService = {
    getAccessToken: () => {
        const data = Cookies.get("act");
        if(data) {
            return JSON.parse(EncryptionService.decodedData(data));
        }
        return ''
    },

    getRefreshToken: () => {
        const data = Cookies.get("rft");
        if (data) {
            return JSON.parse(EncryptionService.decodedData(data));
        } else {
            window.location.href = "/login";
        }
    },

    setAccessToken: (act) => {
        const actEncoded = EncryptionService.encodedData(act);
        Cookies.set("act", actEncoded);
    },

    setRefreshToken: (rft) => {
        const rftEncoded = EncryptionService.encodedData(rft);
        Cookies.set("rft", rftEncoded);
    }
}

export default TokenService;