import classNames from "classnames/bind";
import style from "./Form.module.scss";
import {FastField, Form, Formik} from "formik";
import {LoaderCircle, Search} from "lucide-react";
import Button from "~/components/component/Button/Button";
import InputField from "~/components/component/Field/InputField/InputField";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Popup, PopupItemData} from "~/components/component/Popup";
import {useDebounce} from "~/hooks";
import {searchPublic} from "~/services/search";

const cx = classNames.bind(style);

function FormSearch() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);
    const initialValues = {
        key: ''
    }

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const request = async () => {
            setLoading(true);
            const data = {
                key: debouncedValue,
                size: 6,
            }
            const result = await searchPublic(data, navigate);

            setSearchResult(result?.content);
            setLoading(false);
        };

        request();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (value) => {
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                navigate(`/search?key=${values.key}`);
            }}
        >
            {formikProps => {

                const {values, errors, touched, isSubmitting} = formikProps;

                return (
                    <div className={cx('wrapper_search')}>
                        <Form className={cx('form_search')}>
                            <div className={cx('container_input-search')}>
                                <FastField
                                    name={'key'}
                                    component={InputField}
                                    placeholder={'Search'}
                                    onChange={handleChange}
                                    noMargin={true}
                                />
                            </div>
                            <Button iconOnly no_background type={'submit'} righticon={ !loading ? <Search size={20} color={'#333333'}/> : ""}>
                                { loading && <LoaderCircle className={'loading'} size={20} color={"#888888"}/>}
                            </Button>
                        </Form>
                        { searchResult.length > 0 &&
                            <Popup>
                                { searchResult.map((item, index) => {
                                    return(
                                        <PopupItemData key={ index } name={''} image={''}/>
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