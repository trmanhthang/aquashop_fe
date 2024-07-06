import classNames from "classnames/bind";
import style from "./Form.module.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "~/components/component/Field/InputField/InputField";
import Button from "~/components/component/Button/Button";
import {login} from "~/services/auth";
import {LoaderCircle} from "lucide-react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";

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
            onSubmit={ (values, actions) => {
                login(values, navigate).then(value => actions.setSubmitting(value));
            }}
        >
            {formikProps => {
                const {values, errors, touched, isSubmitting} = formikProps;

                return (
                    <Form>
                        <FastField
                            name={'username'}
                            component={InputField}

                            placeholder={'Username'}
                        />

                        <FastField
                            name={'password'}
                            component={ InputField }

                            type={'password'}
                            placeholder={'Password'}
                            iconShowPassword={true}
                        />
                        <div className={cx('container_btn')}>
                            <Button
                                primary
                                large
                                type={'submit'}
                                disabled={isSubmitting}
                            >
                                { isSubmitting ? <LoaderCircle className={'loading'} size={18} color="#ffffff" /> : "Login"}
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormLogin;