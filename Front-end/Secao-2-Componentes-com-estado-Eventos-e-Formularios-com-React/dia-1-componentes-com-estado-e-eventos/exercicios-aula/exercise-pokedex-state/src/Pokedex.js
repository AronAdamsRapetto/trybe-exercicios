import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemons, indexPokemon } = this.props;
    return (
      <div className="pokedex">
        {
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))[indexPokemon]
        }
      </div>
    );
  }
}

export default Pokedex;
