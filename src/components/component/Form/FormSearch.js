import classNames from "classnames/bind";
import style from "./Form.module.scss";
import {FastField, Form, Formik} from "formik";
import {Search} from "lucide-react";
import Button from "~/components/component/Button/Button";
import InputField from "~/components/component/Field/InputField/InputField";
import {searchPublic} from "~/services/search";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Popup, PopupItem} from "~/components/component/Popup";

const cx = classNames.bind(style);

function FormSearch() {
    const navigate = useNavigate();
    const [dataPopup, setDataPopup] = useState([1, 2]);

    const initialValues = {
        key: ''
    }

    const searchPopup = (data) => {
        data.size = 6
        const values = searchPublic(data);
        values.then((data) => setDataPopup(data.content))
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                const data = searchPublic(values, navigate);
                // data.then((data) => setDataPopup(data.content));
            }}
        >
            {formikProps => {

                const {values, errors, touched, isSubmitting} = formikProps;

                return (
                    <div className={cx('wrapper_search')}>
                        <Form className={cx('form_search')}>
                            <FastField
                                name={'key'}
                                component={InputField}
                                placeholder={'Search'}
                                onChange={searchPopup}
                                noMargin={true}
                            />
                            <Button iconOnly type={'submit'} righticon={<Search size={16} color={'#333333'}/>}/>
                        </Form>
                        { dataPopup && dataPopup.length > 0 &&
                            <Popup>
                                { dataPopup.map((item, index) => {
                                    return(
                                        <PopupItem key={ index } name={''} image={''}/>
                                    )
                                }) }
                            </Popup>
                        }
                    </div>
                )
            }}

        </Formik>
    )
}

export default FormSearch;