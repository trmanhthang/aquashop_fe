import LayoutForm from "~/components/Layout/LayoutForm";
import HeadingForm from "~/components/component/HeadingForm/HeadingForm";
import {FormLogin} from "~/components/component/Form";

function Login() {
    return(
        <LayoutForm>
            <HeadingForm title={'welcome back'} description={'please login to your account'}/>
            <FormLogin />
        </LayoutForm>
    )
}

export default Login;