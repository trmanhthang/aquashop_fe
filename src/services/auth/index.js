import Cookies from "js-cookie";
import authenticationApi from "~/api/authenticationApi";
import { encodedData } from "~/services/encryption";
import {useNavigate} from "react-router-dom";
import {getPathHistory} from "~/services/path";

const login = (values, navigate) => {
    const response = authenticationApi.login(values);
    response.then( data => {
        const encryption = encodedData(data);
        Cookies.set("token", encryption, { expires: 7 });
        navigate(getPathHistory());
    }).catch( error => {
        console.log(error);
    })
}

export { login };