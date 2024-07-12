import * as CryptoJS from "crypto-js";

const EncryptionService = {
    encodedData: (data) => {
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(data)));
    },

    decodedData: (data) => {
        return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
    }
}

export default EncryptionService;