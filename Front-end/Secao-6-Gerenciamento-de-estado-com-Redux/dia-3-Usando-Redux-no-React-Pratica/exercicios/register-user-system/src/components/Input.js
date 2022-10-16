import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, placeholder, onChange, name, value } = this.props;
    return(
      <input
        type={ type }
        placeholder={ placeholder }
        onChange={ onChange }
        name={ name }
        value={ value }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
