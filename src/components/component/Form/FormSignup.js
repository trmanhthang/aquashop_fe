import classNames from "classnames/bind";
import style from "./Form.module.scss";
import {FastField, Form, Formik} from "formik";
import Button from "~/components/component/Button/Button";
import InputField from "~/components/component/Field/InputField/InputField";

const cx = classNames.bind(style);

function FormSignup() {
    const initialValues = {

    }
    return(
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched, isSubmitting})

                return (
                    <Form>
                        <FastField
                            name={'username'}
                            component={ InputField }

                            placeholder={'Username'}
                        />

                        <FastField
                            name={'password'}
                            component={ InputField }

                            type={'password'}
                            placeholder={'Password'}
                            iconShowPassword={true}
                        />

                        <FastField
                            name={'confirm_password'}
                            component={ InputField }

                            type={'password'}
                            placeholder={'Confirm Password'}
                            iconShowPassword={true}
                        />

                        <div className={cx('container_btn')}>
                            <Button primary large type={'submit'}>
                                Signup
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormSignup;