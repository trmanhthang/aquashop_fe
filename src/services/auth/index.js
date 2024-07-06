import Cookies from "js-cookie";
import authenticationApi from "~/api/authenticationApi";
import { encodedData } from "~/services/encryption";
import {useNavigate} from "react-router-dom";
import {getPathHistory} from "~/services/path";
import Alert from "~/components/component/Alert";

const login = async (values, navigate) => {
    const response = authenticationApi.login(values);
    await response.then( data => {
        const encryption = encodedData(data);
        Cookies.set("token", encryption, { expires: 7 });
        navigate(getPathHistory());
    }).catch( error => {
        console.log(error);
    })
    return false;
}

const signup = async (values, navigate) => {
    const response = authenticationApi.signup(values);
    await response.then( data => {
        console.log(data);
        Alert.toast("success", 'Đăng ký thành công!', navigate('/login'))
    }).catch( error => {
        Alert.toast("error", 'Lỗi đăng ký!')
        console.log(error);
    })

    return false;
}

const refresh = async () => {

};

export { login, signup, refresh };