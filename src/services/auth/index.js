import Cookies from "js-cookie";
import { encodedData } from "~/services/encryption";
import { getPathHistory } from "~/services/path";
import Alert from "~/components/component/Alert";
import { authenticationApi } from "~/api";

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