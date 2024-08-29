import classNames from "classnames/bind";
import style from "./Login.module.scss";

import FormLayout from "~/components/Layout/FormLayout";
import HeadingForm from "~/components/component/HeadingForm/HeadingForm";
import {FormLogin} from "~/components/component/Form";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Login() {
    return(
        <FormLayout>
            <HeadingForm title={'welcome back'} description={'Please login to your account'}/>

            <FormLogin />
            <div className={cx('navigation')}>
                Don't have an account? <Link to={'/signup'}>Signup</Link>
            </div>
        </FormLayout>
    )
}

export default Login;