import React from "react";
import "./App.css";
import Pokemon from "./Components/Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
  render() {
    return <main className="container-pokemons">
      {
      pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.name} pokemon = {pokemon}/>
      })
      }
    </main>;
  }
}

export default Pokedex;
