import classNames from "classnames/bind";
import style from "./Signup.module.scss";

import LayoutForm from "~/components/Layout/LayoutForm";
import HeadingForm from "~/components/component/HeadingForm/HeadingForm";
import { FormSignup } from "~/components/component/Form";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Signup() {
    return (
        <LayoutForm>
            <HeadingForm title={'Index'} description={'Create an account'}/>

            <FormSignup />

            <div className={cx('navigation')}>
                Already have an account? <Link to={'/login'}>Login</Link>
            </div>
        </LayoutForm>
    )
}

export default Signup;