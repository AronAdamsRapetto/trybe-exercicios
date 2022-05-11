import React from 'react';
import './App.css';
import InputEmail from './components/InputEmail';
import InputNome from './components/InputNome';

class App extends React.Component {
  
  state = {
    nome: '',
    email: '',
    sobre: '',
    residencia: '', 
    aceito: false,
    formularioComErros: false,
  }

  handleError = (erro) => {
    if (erro) {
      this.setState({formularioComErros: true});      
    } else {
      this.setState({formularioComErros: false});
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});    
  }  

  render() {
    return (
      <div className="App">
        <form className="formulario" id='form'>
          
          <InputNome 
            handleChange={this.handleChange} 
            value={this.state.nome}
            // handleError={this.handleError}
          />
          <InputEmail 
            handleChange={this.handleChange} 
            value={this.state.email}
            // handleError={this.handleError}
          />
          <label>Fale sobre você</label>
          <textarea name="sobre" value={this.state.sobre} onChange={this.handleChange}/>          
          <fieldset>
            <legend>Tipo de residência</legend>
          <select name="residencia" value={this.state.residencia} onChange={this.handleChange}>
            <option value="casa">casa</option>
            <option value="apartamento">Apartamento</option>
          </select>
          </fieldset>
          <input type="checkbox" name="aceito" onChange={this.handleChange}/>
          <fieldset>
          <legend>Adicione uma foto sua</legend>
          <input type="file" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
