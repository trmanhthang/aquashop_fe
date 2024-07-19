import {FastField, Form, Formik} from "formik";
import classNames from "classnames/bind";
import style from "./Form.module.scss";
import Button from "~/components/component/Button";
import InputField from "~/components/component/Field/InputField/InputField";

const cx = classNames.bind(style);

function FormContact() {
    const initialValues = {
        message: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {formikProps => {
                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <div className={cx('container_form')}>
                            <FastField
                                name={"message"}
                                component={InputField}
                                placeholder={"Nhập tin nhắn..."}
                                large
                            />
                            <div className={cx('form_contact-btn')}>
                                <Button rounded large type={'submit'}>
                                    Gửi
                                </Button>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormContact;