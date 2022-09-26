import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'} >About</Link>
        <Link to={'/users/10'} >Users</Link>
        <Link to={'/strict-access'} >Sctrict Access</Link>
      </div>
    );
  }
}

export default Home;
