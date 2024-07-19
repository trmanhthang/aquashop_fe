import classNames from "classnames/bind";
import style from "./Review.module.scss";
import Button from "~/components/component/Button";
import {X} from "lucide-react";
import {FastField, Form, Formik} from "formik";
import InputField from "~/components/component/Field/InputField/InputField";

const cx = classNames.bind(style);

function Review({ onClick, name, id }) {
    const initialValues = {
        id: id,
        review: '',
        name: '',
        email: '',
    }

    return (
        <div className={cx('modal_review')}>
            <div className={cx('header_modal')}>
                <h2 className={cx('title_modal')}>Đánh giá sản phẩm ({name})</h2>
                <div className={cx('btn_close')}>
                    <Button
                        no_background
                        lefticon={<X size={18}/>}
                        onClick={onClick}
                    />
                </div>
            </div>
            <div className={cx('body_modal')}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => console.log(values)}
                >
                    { formikProps => {
                        const { isSubmitting } = formikProps;

                        return(
                            <Form>
                                <div className={'row'}>
                                    <div className={'col l-12'}>
                                        <div className={cx('container_field')}>
                                            <FastField
                                                name={'review'}
                                                component={InputField}

                                                placeholder={"Đánh giá*"}
                                                large
                                                noMargin={true}
                                                type={'textarea'}
                                                heightTextarea={"200px"}
                                                customHeight={"220px"}
                                            />
                                        </div>
                                    </div>

                                    <div className={'col l-6'}>
                                        <div className={cx('container_field')}>
                                            <FastField
                                                name={'name'}
                                                component={InputField}

                                                placeholder={"Name*"}
                                                large
                                                noMargin={true}
                                                customHeight={"70px"}
                                            />
                                        </div>
                                    </div>

                                    <div className={'col l-6'}>
                                        <div className={cx('container_field')}>
                                            <FastField
                                                name={'email'}
                                                component={InputField}

                                                placeholder={'Email*'}
                                                large
                                                noMargin={true}
                                                customHeight={"70px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container_btn-submit')}>
                                    <Button
                                        no_background
                                        rounded
                                        type={'submit'}
                                    >
                                        Gửi
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}

                </Formik>
            </div>
        </div>
    )
}

export default Review;