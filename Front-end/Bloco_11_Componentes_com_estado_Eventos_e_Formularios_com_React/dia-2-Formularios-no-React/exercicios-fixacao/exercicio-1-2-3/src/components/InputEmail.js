import React from "react";

class InputEmail extends React.Component {
  render() {
    const { handleChange, value, handleError } = this.props;
    let erro = undefined;
    if (value.length > 40) {
      erro = true;      
    }        
    return (
      <div>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={value}
          onChange={handleChange}
        />                     
      </div>
    );
  }
}

export default InputEmail;
