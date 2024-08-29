import classNames from "classnames/bind";
import style from "./Signup.module.scss";

import FormLayout from "~/components/Layout/FormLayout";
import HeadingForm from "~/components/component/HeadingForm/HeadingForm";
import { FormSignup } from "~/components/component/Form";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Signup() {
    return (
        <FormLayout>
            <HeadingForm title={'Đăng ký'} description={'Create an account'}/>

            <FormSignup />

            <div className={cx('navigation')}>
                Already have an account? <Link to={'/login'}>Login</Link>
            </div>
        </FormLayout>
    )
}

export default Signup;