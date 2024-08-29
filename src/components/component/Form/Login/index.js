import classNames from "classnames/bind";
import style from "../Form.module.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "~/components/component/Field/InputField/InputField";
import Index from "~/components/component/Button";

import {LoaderCircle} from "lucide-react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import AuthenticationService from "~/services/auth";

const cx = classNames.bind(style);

function FormLogin() {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Vui lòng nhập trường này!"),
        password: Yup.string().required("Vui lòng nhập trường này!")
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={ async (values, actions) => {
                actions.setSubmitting(await AuthenticationService.login(values, navigate));
            }}
        >
            {formikProps => {
                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name={'username'}
                            component={InputField}

                            placeholder={'Username'}
                            customHeight={"66px"}
                            large
                        />

                        <FastField
                            name={'password'}
                            component={ InputField }

                            type={'password'}
                            placeholder={'Password'}
                            iconShowPassword={true}
                            customHeight={"66px"}
                            large
                        />
                        <div className={cx('container_btn')}>
                            <Index
                                primary
                                large
                                type={'submit'}
                                disabled={isSubmitting}
                            >
                                { isSubmitting ? <LoaderCircle className={'loading'} size={18} color="#ffffff" /> : "Login"}
                            </Index>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormLogin;