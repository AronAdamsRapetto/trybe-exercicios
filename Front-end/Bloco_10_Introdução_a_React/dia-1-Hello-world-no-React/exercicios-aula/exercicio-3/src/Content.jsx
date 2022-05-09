import React from "react";
import './Content.css';

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];
class Content extends React.Component {
  render() {
    return (
      <ul className="key">
        {conteudos.map((elemento) => <li className="conteudo">O conteúdo é: {elemento.conteudo}<br />
        Status: {elemento.status}<br />
        Bloco: {elemento.bloco}</li>)}
      </ul>
    );
  }
}

export default Content;
