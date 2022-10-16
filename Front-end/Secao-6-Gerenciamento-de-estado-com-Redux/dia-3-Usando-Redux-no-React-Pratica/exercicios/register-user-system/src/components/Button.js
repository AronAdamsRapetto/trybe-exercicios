import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, buttonText } = this.props;
    return(
      <button type='button' onClick={ onClick }>{ buttonText }</button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
