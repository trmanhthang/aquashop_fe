import classNames from "classnames/bind";
import style from "./Form.module.scss";
import {FastField, Form, Formik} from "formik";
import {LoaderCircle, Search} from "lucide-react";
import Index from "~/components/component/Button";
import InputField from "~/components/component/Field/InputField/InputField";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Popup, PopupItemData} from "~/components/component/Popup";
import {useDebounce} from "~/hooks";
import SearchService from "~/services/search";

const cx = classNames.bind(style);

function FormSearch() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
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
            const data = {
                key: debouncedValue,
                size: 6,
            }
            const result = await SearchService.searchPublic(data);

            setSearchResult(result?.content);
        };

        request().then();
    }, [debouncedValue, navigate]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current?.focus();
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

                const { isSubmitting } = formikProps;

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
                            <Index iconOnly no_background type={'submit'} righticon={ !isSubmitting ? <Search size={20} color={'#333333'}/> : "" }>
                                { isSubmitting && <LoaderCircle className={'loading'} size={20} color={"#888888"}/>}
                            </Index>
                        </Form>
                        {searchResult?.length > 0 &&
                            <Popup width={"140%"} topPosition={"32px"} rightPosition={"-10px"}>
                                { searchResult.map((item, index) => {
                                    return(
                                        <PopupItemData key={index} data={ item }/>
                                    )
                                })}
                            </Popup>
                        }
                    </div>
                )
            }}

        </Formik>
    )
}

export default FormSearch;