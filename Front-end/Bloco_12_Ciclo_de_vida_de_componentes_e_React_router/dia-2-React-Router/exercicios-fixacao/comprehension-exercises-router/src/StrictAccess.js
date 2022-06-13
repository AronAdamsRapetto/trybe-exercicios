import React from "react";
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {

  teste = () => {
    alert('Access denied!');
    return <Redirect to='/' />
  }

  render() {
    const { user: { userName, password } } = this.props;
    return(
      <div>
      { 
        userName === 'joao' && password === '1234' 
        ? <p>Welcome joao!</p> 
        : this.teste()
      }        
      </div>
    );
  }
};

export default StrictAccess;