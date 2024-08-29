import classNames from "classnames/bind";
import style from "../Form.module.scss";
import {FastField, Form, Formik} from "formik";
import Button from "~/components/component/Button";
import InputField from "~/components/component/Field/InputField/InputField";
import {LoaderCircle, StepBack, StepForward} from "lucide-react";
import AuthenticationService from "~/services/auth"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as Yup from "yup";
import Toast from "~/components/component/Toast";

const cx = classNames.bind(style);

function FormSignup() {
    const navigate = useNavigate();
    const [currentForm, setCurrentForm] = useState(0);

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        address: '',
        username: '',
        password: '',
        confirm_password: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Vui lòng nhập trường này!")
            .matches(/^[a-zA-ZÀ-Ỹà-ỹ ]+$/, {message: "Không được chứa ký tự đặc biệt và số!"}),
        phone: Yup.string()
            .required("Vui lòng nhập trường này!")
            .matches(/^0[0-9]{9,10}$/, {message: "Số điện thoại không hợp lệ!"})
            .min(10, "Số điện thoại không hợp lệ!")
            .max(11, "Số điện thoại không hợp lệ!"),
        email: Yup.string()
            .required('Vui lòng nhập trường này!')
            .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, {message: "Email không hợp lệ!"}),
        address: Yup.string()
            .required("Vui lòng nhập trường này!"),
        username: Yup.string()
            .required("Vui lòng nhập trường này!")
            .matches(/^[^@=+#%]+$/, { message: "Không được chứa (@, =, +, #, %)" }),
        password: Yup.string()
            .required("Vui lòng nhập trường này!")
            .matches(/^[^@=+#%]+$/, { message: "Không được chứa (@, =, +, #, %)" })
            .min(8, "Mật khẩu tối thiểu 8 ký tự!"),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], "Không chính xác!")
            .required("Vui lòng xác nhận mật khẩu!")
    })

    const nextForm = () => {
        setCurrentForm((prevForm) => (prevForm + 1) % 2);
    }

    const prevForm = () => {
        setCurrentForm((nextForm) => (nextForm - 1) % 2);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={false}
            onSubmit={ async (values, actions) => {
                try {
                    await AuthenticationService.signup(values, navigate);
                    Toast.alert("success", "Đăng ký thành công!")
                } catch (e) {
                    Toast.alert("warning", "Đăng ký không thành công!");
                } finally {
                    actions.resetForm()
                }
            }}
        >
            {formikProps => {
                const { isSubmitting } = formikProps;
                return (
                    <Form>
                        <div className={cx('container')}>
                            <div className={cx('wrapper')} style={{transform: `translateX(-${currentForm * 100}%)`}}>
                                <div className={cx('content')}>
                                    <div className={'row'}>
                                        <div className={'col l-12'}>
                                            <FastField
                                                name={'username'}
                                                component={InputField}

                                                placeholder={'Username'}
                                                customHeight={"66px"}
                                                large
                                            />
                                        </div>

                                        <div className={'col l-12'}>
                                            <FastField
                                                name={'password'}
                                                component={InputField}

                                                type={'password'}
                                                placeholder={'Password'}
                                                iconShowPassword={true}
                                                customHeight={"66px"}
                                                large
                                            />
                                        </div>

                                        <div className={'col l-12'}>
                                            <FastField
                                                name={'confirm_password'}
                                                component={InputField}

                                                type={'password'}
                                                placeholder={'Confirm Password'}
                                                iconShowPassword={true}
                                                large
                                                customHeight={"66px"}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('container_btn')}>
                                        <Button
                                            primary
                                            type={'button'}
                                            onClick={nextForm}
                                            righticon={<StepForward size={18} color="#ffffff" />}
                                        >
                                            Tiếp theo
                                        </Button>
                                    </div>
                                </div>

                                <div className={cx('content')}>
                                    <div className={'row'}>
                                        <div className={'col l-12'}>
                                            <FastField
                                                name={'name'}
                                                component={InputField}

                                                placeholder={'Name'}
                                                large
                                                customHeight={"66px"}
                                            />
                                        </div>

                                        <div className={'col l-6'}>
                                            <FastField
                                                name={'phone'}
                                                component={InputField}

                                                placeholder={'Phone'}
                                                large
                                                customHeight={"66px"}
                                            />
                                        </div>

                                        <div className={'col l-6'}>
                                            <FastField
                                                name={'email'}
                                                component={InputField}

                                                type={'email'}
                                                placeholder={'Email'}
                                                large
                                                customHeight={"66px"}
                                            />
                                        </div>

                                        <div className={'col l-12'}>
                                            <FastField
                                                name={'address'}
                                                component={InputField}

                                                placeholder={'Address'}
                                                large
                                                customHeight={"66px"}
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('container_btn')}>
                                        <Button
                                            primary
                                            type={'submit'}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ?
                                                <LoaderCircle className={'loading'} size={18} color={"#ffffff"}/> : "Đăng ký"}
                                        </Button>

                                        <Button
                                            primary
                                            type={'button'}
                                            onClick={prevForm}
                                            lefticon={<StepBack size={18} color={"#ffffff"} />}
                                        >
                                            Quay lại
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormSignup;