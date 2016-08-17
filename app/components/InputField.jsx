import React from 'react';

const InputField = (props) => (
  <input
    {...props}
    className={props.className
      ? `input__field ${props.className}`
      : 'input__field'}
    placeholder={props.placeholder}
  />
);

InputField.propTypes = {
  placeholder: React.PropTypes.string
};

export default InputField;
