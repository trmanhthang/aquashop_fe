import {FormGroup, Label} from "reactstrap";
import Select from "react-select/base";
import PropTypes from "prop-types";
import InputField from "~/components/component/Field/InputField/InputField";

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const { field, options, label, placeholder, disable } = props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }
    return(
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                isDisabled={disable}
                options={options}
            />
        </FormGroup>
    )
}

export default SelectField;