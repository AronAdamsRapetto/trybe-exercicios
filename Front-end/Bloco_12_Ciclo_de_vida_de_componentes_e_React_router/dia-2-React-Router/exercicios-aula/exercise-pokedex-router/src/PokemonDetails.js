import React from 'react';
import PropTypes from 'prop-types';
import pokemons from './data';

class PokemonDetails extends React.Component {
  state = {
    pokemon: {
      name: '',
      type: '',
      image: '',
      averageWeight: {
        value: '',
        measurementUnit: '',
      },
      summary: '',
      foundAt: [],
    },
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const pokemon = pokemons
      .find(({ id: idPokemon }) => idPokemon.toString() === id.toString());
    this.setState({ pokemon });
  }

  render() {
    const {
      pokemon: {
        name,
        type,
        image,
        averageWeight: {
          value,
          measurementUnit,
        },
        summary,
        foundAt,
      },
    } = this.state;
    return (
      <div>
        <h1>Pokemon Details</h1>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight:
              {' '}
              {`${value} ${measurementUnit}`}
            </p>
          </div>
          <img src={ image } alt={ `${name} sprite` } />
        </div>
        <p>{ summary }</p>
        {
          foundAt.map(({ location, map }) => (
            <div key={ location }>
              <img src={ map } alt={ location } />
              <p>{ location }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PokemonDetails;
