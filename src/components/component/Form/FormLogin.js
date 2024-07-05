import classNames from "classnames/bind";
import style from "./Form.module.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "~/components/component/Field/InputField/InputField";
import Button from "~/components/component/Button/Button";
import {login} from "~/services/auth";
import {LoaderCircle} from "lucide-react";

const cx = classNames.bind(style);

function FormLogin() {
    const initialValues = {
        username: "",
        password: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => login(values)}
        >
            {formikProps => {
                const {values, errors, touched, isSubmitting} = formikProps;
                console.log(isSubmitting);

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
                            <Button primary large type={'submit'}>
                                { isSubmitting ? <LoaderCircle size={18} color="#ffffff" /> : "Login"}
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormLogin;