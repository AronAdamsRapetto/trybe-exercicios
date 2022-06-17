import React from 'react';
import { connect } from 'react-redux';

class Costumers extends React.Component {
  state = {
    isLoged: false,
  }

  componentDidMount() {
    const { email, senha } = this.props;
    if (email !== '' && senha !== '') {
      this.setState({ isLoged: true });
    }
  }

  render() {
    const { isLoged } = this.state;
    return(
      <div>
        {
          isLoged ? <h1>Clientes cadastrados</h1> : (
            <h1>Login não efetuado</h1>
          )
        }        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.login.email,
  senha: state.login.senha,
});

export default connect(mapStateToProps)(Costumers);