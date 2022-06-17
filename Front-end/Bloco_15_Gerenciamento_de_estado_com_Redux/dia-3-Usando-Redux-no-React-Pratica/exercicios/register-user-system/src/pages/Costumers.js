import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { DELETE } from '../redux/actions/actionTypes';

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

  handleClick = (costumer) => {
    const { exclude } = this.props;

    exclude(costumer);
  }

  render() {
    const { isLoged } = this.state;
    const { costumers } = this.props;
    return(
      <div>
        {
          isLoged ? (
            <section>
              <h1>Clientes cadastrados</h1>
              <Link to="/register">Cadastrar clientes</Link>
              <div>
                {
                  costumers.length === 0 ? <h3>Nenhum cliente cadastrado</h3> : (
                    costumers.map((costumer) => (
                      <div key={ costumer.email }>
                        <hr />
                        <p>{`Nome: ${costumer.nome}`}</p>
                        <p>{`Idade: ${costumer.idade}`}</p>
                        <p>{`E-mail: ${costumer.email}`}</p>
                        <Button buttonText='X' onClick={ (costumer) => this.handleClick(costumer) } />
                      </div>
                    ))
                  )
                }
              </div>
            </section>
          ) : (
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
  costumers: state.costumers,
});

const mapDispatchToProps = (dispatch) => ({
  exclude: (state) => dispatch(DELETE, state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Costumers);