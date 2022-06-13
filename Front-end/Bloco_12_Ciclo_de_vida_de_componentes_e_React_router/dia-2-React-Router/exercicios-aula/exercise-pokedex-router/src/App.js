import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route
            path="/pokemon/:id"
            render={ (props) => <PokemonDetails { ...props } /> }
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" render={ () => <Pokedex pokemons={ pokemons } /> } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
