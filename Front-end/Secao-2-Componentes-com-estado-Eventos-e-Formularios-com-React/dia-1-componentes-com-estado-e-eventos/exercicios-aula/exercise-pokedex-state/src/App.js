import React from 'react';
import './App.css';
import BotaoFiltro from './BotaoFiltro';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  state = {
    contPokemons: 0,
    filtro: 'All',
    elementoUnico: false,
  }  

  filtraPokemons = () => {
    const pokemonsFiltrados = pokemons.filter(({ type }) => {
      if (type !== this.state.filtro && this.state.filtro !== "All") {
        return false;
      }
      return true;
    });
    return pokemonsFiltrados;
  }

  handleClickNext = () => {
    const listaPokemons = this.filtraPokemons();
    if (this.state.contPokemons === listaPokemons.length - 1) {
      this.setState({ contPokemons: 0 });
    } else {
      this.setState((estadoAnterior, _props) => ({
        contPokemons: estadoAnterior.contPokemons + 1,
      }));
    }    
  }

  handleClickFilter = ({ target }) => {
    this.setState({filtro: target.innerText}, () => {
      const listaPokemons = this.filtraPokemons();
      if (listaPokemons.length === 1) {
        this.setState({elementoUnico: true});
      } else {
        this.setState({elementoUnico: false});
      }    
    })
  }

  render() {
    const pokemonsFiltrados = this.filtraPokemons();
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex 
          pokemons={pokemonsFiltrados} 
          indexPokemon={this.state.contPokemons}          
        />
        <BotaoFiltro 
          pokemons={pokemons} 
          handleClickFilter={this.handleClickFilter}
          handleClickNext={this.handleClickNext}
          filtro={this.state.filtro}
          elementoUnico={this.state.elementoUnico} 
        />
        {/* <button 
          disabled={this.state.elementoUnico ? true : false} 
          onClick={this.handleClickNext}
        >
          Próximo pokemon
        </button> */}
      </div>
    );
  }
}

export default App;
