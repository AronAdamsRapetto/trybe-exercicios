import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />        
        </Switch>
      </div>
    );
  }
}

export default App;
