import * as CryptoJS from "crypto-js";

const encodedData = (data) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(data)));
}

const decodedData = (token) => {
    return CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
}

export { encodedData, decodedData };