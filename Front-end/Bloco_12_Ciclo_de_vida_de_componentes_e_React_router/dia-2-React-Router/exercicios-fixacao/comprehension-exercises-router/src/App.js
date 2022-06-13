import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => (
          <Users {...props} greetingsMessage="Good Morning" />
          )} />
          <Route path="/about" component={About} />
          <Route path="/strict-access" render={() => (
          <StrictAccess user={ {userName: 'joao', password: '1234'} }/>
          )} />            
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
