import React from "react";

class DadosPessoais extends React.Component {

  handleKeyUpName = ({ target }) => {
    target.value = target.value.toUpperCase();
  }

  handleOnBlurAdress = ({target}) => {
    target.value = target.value.replace(/[ÁÀÃÂ]/g,"A");
    target.value = target.value.replace(/[áàãâ]/g,"a");
    target.value = target.value.replace(/[ÉÈẼÊ]/g,"E");
    target.value = target.value.replace(/[éèẽê]/g,"e");
    target.value = target.value.replace(/[ÓÒÕÔ]/g,"O");
    target.value = target.value.replace(/[óòõô]/g,"o");
    target.value = target.value.replace(/[ÚÙŨÛ]/g,"U");
    target.value = target.value.replace(/[úùũû]/g,"u");
    target.value = target.value.replace(/[^a-z0-9]/gi,' ');
  }

  handleOnBlurCity = ({ target }) => {
    if (target.value.startsWith(/^\d+$/)) {
      target.value = '';
    }
  }

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>Nome:
          <input 
            type="text" 
            maxlength="40"
            onKeyUp={this.handleKeyUpName}
            required 
          />
        </label>
        <label>E-mail:
          <input 
            type="text" 
            maxlength="50" 
            required 
          />
        </label>
        <label>CPF:
          <input 
            type="text"
            maxLength="11"
            required
          /> 
        </label>
        <label>Endereço:
          <input
            type="text"
            maxlength="200"
            required
            onBlur={this.handleOnBlurAdress}
          />
        </label>
        <label>Cidade:
          <input
            type="text"
            maxlength="28"
            required
            onBlur={this.handleOnBlurCity}
          />
        </label>
      </fieldset>
    );
  }
}

export default DadosPessoais;