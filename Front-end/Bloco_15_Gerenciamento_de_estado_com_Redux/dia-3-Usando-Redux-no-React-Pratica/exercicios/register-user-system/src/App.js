import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Costumers from './pages/Costumers';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/costumers" component={ Costumers } />
          <Route path="/login" component={ Login } />
          <Route exact path="/" component={ Home } />                 
        </Switch>
      </div>
    );
  }
}

export default App;
