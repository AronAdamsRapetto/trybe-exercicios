import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonIndex: 0, filteredType: 'all' };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter((pokemon) => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const { pokemonIndex } = this.state;
    const pokemon = filteredPokemons[pokemonIndex];

    return (
      <div className="pokedex">
        <h1> Pokedex </h1>
        <Pokemon pokemon={ pokemon } />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={ () => this.filterPokemons('all') }
            className="filter-button"
            disabled={ false }
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={ type }
              onClick={ () => this.filterPokemons(type) }
              className="filter-button"
              disabled={ false }
            >
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={ () => this.nextPokemon(filteredPokemons.length) }
          disabled={ filteredPokemons.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.string.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default Pokedex;