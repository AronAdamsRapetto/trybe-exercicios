import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Página Home</h1>
        <Link to='/login'>login</Link>
      </div>
    );
  }
}

export default Home;
