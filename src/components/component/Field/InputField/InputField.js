import classNames from "classnames/bind";
import style from "../Field.module.scss";
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";
import { Eye, EyeOff } from "lucide-react";
import {useState} from "react";
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
};

function InputField(props) {
    const {
        field, form,
        iconShowPassword = false,
        type = 'text',
        label = '',
        placeholder = '',
        disabled = false,
    } = props;

    const {name, value, onChange,  onBlur} = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const [typeField, setTypeField] = useState(type);

    const changeTypeField = () => {
        if (typeField === 'text') {
             setTypeField( 'password');
        } else if (typeField === 'password') {
            setTypeField('text');
        }
    };

    return(
        <FormGroup>
            <div className={cx('wrapper')}>
                {label && <Label for={ name }>{ label }</Label>}
                <div className={cx('container_field')}>
                    <Input
                        id={ name }
                        {...field}

                        type={ typeField === "text" || typeField === "password" || typeField === "email" ? typeField : "text" }
                        disabled={ disabled }
                        placeholder={ placeholder }

                        invalid={showError}
                    />
                    { iconShowPassword &&
                        <button type={'button'}  onClick={changeTypeField}>
                            { typeField === 'text' && <Eye size={18} color={"#8d8d8d"}/> }
                            { typeField === 'password' && <EyeOff size={18} color={"#8d8d8d"}/> }
                        </button>
                    }
                </div>
                <ErrorMessage name={name} component={FormFeedback} />
            </div>
        </FormGroup>
    )
}

export default InputField;