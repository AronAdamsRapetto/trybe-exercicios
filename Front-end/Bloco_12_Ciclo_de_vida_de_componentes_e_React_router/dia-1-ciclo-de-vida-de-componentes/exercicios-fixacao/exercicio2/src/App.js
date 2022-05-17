import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    api: undefined,
  }

  fetchUser = async () => {
    try {
      const url = 'https://api.randomuser.me/';
      const response = await fetch(url);
      const dataJson = await response.json();
      this.setState({ api: dataJson.results[0] }, () => {
        this.setState({ isLoading: false });
      });
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
   this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { dob: { age } } = nextState.api

    if (age > 50) {
      return false
    } else {
      return true
    }
  }

    render() {
      const { api } = this.state;
      return (
        <div className="App">
          { 
          api ? 
          <section>
            <img src={api.picture.medium} alt={api.name.last}></img>
            <div>{ `${api.name.first} ${api.name.last}` }</div>
            <div>{ api.email }</div>
            <div>{ api.dob.age }</div>
          </section>
            : <div>Carregando...</div>
          }
        </div>
    );
  }
}

export default App;
