import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      clickPrimeiroBotao: 0,
      eParPrimeiroBotao: false,
      clickSegundoBotao: 0,
      eParSegundoBotao: false,
      clickTerceiroBotao: 0,
      eParTerceiroBotao: false,
    }

    this.primeiroClick = this.primeiroClick.bind(this);
    this.segundoClick = this.segundoClick.bind(this);
    this.terceiroClick = this.terceiroClick.bind(this);
  }
  
  primeiroClick(event) {
    this.setState((estadoAnterior, _props) => ({
      clickPrimeiroBotao : estadoAnterior.clickPrimeiroBotao + 1,
    }));
    // if (this.state.clickPrimeiroBotao % 2 === 0) {
    //   this.setState({
    //     eParPrimeiroBotao: false,
    //   })
    // } else {
    //   this.setState({
    //     eParPrimeiroBotao: true,
    //   })
    // }
    if(this.state.clickPrimeiroBotao % 2 === 0) {
      event.target.style.color = 'black';
    } else {
      event.target.style.color = 'green';
    }
  }
  
  segundoClick() {
    this.setState((estadoAnterior, _props) => ({
      clickSegundoBotao : estadoAnterior.clickSegundoBotao + 1,
    }));
    if (this.state.clickSegundoBotao % 2 === 0) {
      this.setState({
        eParSegundoBotao: false,
      })
    } else {
      this.setState({
        eParSegundoBotao: true,
      })
    }
  }
  
  terceiroClick() {
    this.setState((estadoAnterior, _props) => ({
      clickTerceiroBotao : estadoAnterior.clickTerceiroBotao + 1,
    }));
    if (this.state.clickTerceiroBotao % 2 === 0) {
      this.setState({
        eParTerceiroBotao: false,
      })
    } else {
      this.setState({
        eParTerceiroBotao: true,
      })
    }
  }

    render() {      
      return (
        <div className="App">
          <button onClick={ this.primeiroClick } className={this.state.eParPrimeiroBotao ? "corBotao" : ""}>
            Primeiro botão {this.state.clickPrimeiroBotao}
            </button>
          <button onClick={ this.segundoClick } className={this.state.eParSegundoBotao ? "corBotao" : ""}>
            Segundo botão {this.state.clickSegundoBotao}
            </button>
          <button onClick={ this.terceiroClick } className={this.state.eParTerceiroBotao ? "corBotao" : ""}>
            Terceiro botão {this.state.clickTerceiroBotao}
            </button>
        </div>
    );
  }
}


export default App;
