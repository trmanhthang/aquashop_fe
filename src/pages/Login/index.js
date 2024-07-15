import classNames from "classnames/bind";
import style from "./Login.module.scss";

import LayoutForm from "~/components/Layout/LayoutForm";
import HeadingForm from "~/components/component/HeadingForm/HeadingForm";
import {FormLogin} from "~/components/component/Form";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Login() {
    return(
        <LayoutForm>
            <HeadingForm title={'welcome back'} description={'Please login to your account'}/>

            <FormLogin />
            <div className={cx('navigation')}>
                Don't have an account? <Link to={'/signup'}>Signup</Link>
            </div>
        </LayoutForm>
    )
}

export default Login;