import React from "react";
import "./App.css";
import DadosPessoais from "./components/DadosPessoais";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Meu formulário 2.0</h1>
        <form>
          <DadosPessoais />
        </form>
      </div>
    );
  }
}

export default App;
