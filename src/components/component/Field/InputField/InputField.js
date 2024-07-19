import classNames from "classnames/bind";
import style from "../Field.module.scss";
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";
import {Eye, EyeOff} from "lucide-react";
import {useEffect, useState} from "react";
import {ErrorMessage} from "formik";

const cx = classNames.bind(style);

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    icon: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    noMargin: PropTypes.bool,
};

function InputField(props) {
    const {
        field, form,
        iconShowPassword = false,
        type = 'text',
        label = '',
        placeholder = '',
        disabled = false,
        noMargin = false,
        onChange,
        customHeight,
        heightTextarea,
        large,
        small,
        medium,
        bsSize,
    } = props;

    const classes = cx({
        large,
        small,
        medium,
    });

    const {errors, touched} = form;
    const showError = errors[field.name] && touched[field.name];
    const [typeField, setTypeField] = useState(type);
    const [autoComplete, setAutoComplete] = useState(undefined);

    useEffect(() => {
        if (typeField === 'password') {
            setAutoComplete('new-password');
        } else if (field.name === 'username') {
            setAutoComplete(field.name);
        }
    }, [field.name, typeField]);

    const changeTypeField = () => {
        if (typeField === 'text') {
            setTypeField('password');
        } else if (typeField === 'password') {
            setTypeField('text');
        }
    };

    return (
        <FormGroup noMargin={noMargin}>
            <div className={cx('wrapper')}>
                {label && <Label for={field.name}>{label}</Label>}
                <div className={cx('container_field')} style={{height: customHeight}}>
                    <Input
                        className={classes}
                        id={field.name}
                        {...field}

                        type={typeField === "text" || typeField === "password" || typeField === "email" || typeField === "textarea" ? typeField : "text"}
                        disabled={disabled}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        invalid={showError}
                        onChange={changeEvent => {
                            form.setFieldValue(field.name, changeEvent.target.value);
                            if (onChange) {
                                onChange(changeEvent.target.value);
                            }
                        }}
                        style={{height: heightTextarea, resize: "none"}}
                        bsSize={bsSize}
                    />
                    {iconShowPassword && !showError &&
                        <button type={'button'} onClick={changeTypeField}>
                            {typeField === 'text' && <Eye size={18} color={"#8d8d8d"}/>}
                            {typeField === 'password' && <EyeOff size={18} color={"#8d8d8d"}/>}
                        </button>
                    }
                    <ErrorMessage name={field.name} component={FormFeedback}/>
                </div>
            </div>
        </FormGroup>
    )
}

export default InputField;