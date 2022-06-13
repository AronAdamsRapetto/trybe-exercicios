import React from "react";
import "./BotaoFiltro.css";

class BotaoFiltro extends React.Component {
  render() {
    const { pokemons, handleClickFilter, filtro, handleClickNext, elementoUnico } = this.props;
    const types = pokemons.map(({ type }) => type);
    return (
      <div>
        <button
          className={filtro === "All" ? "selected" : ""}
          onClick={handleClickFilter}
        >
          All
        </button>
        {
          types.filter((elemento, index) => types.indexOf(elemento) === index)
          .map((elemento) => (
            <button
              className={filtro === elemento ? "selected" : ""}
              key={elemento}
              onClick={handleClickFilter}
            >
              {elemento}
            </button>
          ))
        }
          <div>
            <button 
              disabled={elementoUnico} 
              onClick={handleClickNext}
            >
              Próximo pokemon
            </button>
          </div>
      </div>
    );
  }
}

export default BotaoFiltro;
