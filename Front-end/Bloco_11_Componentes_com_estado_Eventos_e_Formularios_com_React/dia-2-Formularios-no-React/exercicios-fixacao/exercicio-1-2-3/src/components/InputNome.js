import React from "react";

class InputNome extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    // let erro = undefined;
    // if (value.length < 8 && value.length !== 0) {
    //   erro = 'Minimo 8 caractéres'      
    // } else if (value.length > 30) {
    //   erro = 'Máximo 30 caractéres'
    // }    
    return (
      <div>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={value}
          onChange={handleChange}
        />        
      </div>      
    );
  }
}

export default InputNome;