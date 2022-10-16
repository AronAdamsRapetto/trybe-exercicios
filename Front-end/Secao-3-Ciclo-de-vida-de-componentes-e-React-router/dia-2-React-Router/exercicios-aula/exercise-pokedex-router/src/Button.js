import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { className, children, disabled, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        className={ `button-text ${className}` }
        disabled={ disabled }
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
