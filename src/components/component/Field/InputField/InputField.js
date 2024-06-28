import {FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;

    const {name, value, onChange, onBlur} = field;

    return(
        <FormGroup>
            {label && <Label for={}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

export default InputField;