import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { DELETE } from '../redux/actions/actionTypes';
import manageCostumers from '../redux/actions/actionCostumers';

class Costumers extends React.Component {
  state = {
    isLoged: false,
    isSorted: false,
    sorteredCostumers: [],
  }

  componentDidMount() {
    const { email, senha, costumers } = this.props;
    const sorteredCostumers = [...costumers];
    if (email !== '' && senha !== '') {
      sorteredCostumers.sort((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
      });
      
      this.setState({ isLoged: true, sorteredCostumers });
    }
  }

  handleOrder = () => {
    this.setState((prevState) => ({ isSorted: !prevState.isSorted }));
  }

  handleClick = (costumer) => {
    const { exclude } = this.props;

    this.setState((prevState) => ({
      sorteredCostumers: prevState.sorteredCostumers
        .filter(({ nome, email }) => (
        nome !== costumer.nome && email !== costumer.email
      )),
    }), () => {
      exclude(costumer);
    });
  }

  render() {
    const { isLoged, isSorted, sorteredCostumers } = this.state;
    const { costumers } = this.props;
    return(
      <div>
        {
          isLoged ? (
            <section>
              <h1>Clientes cadastrados</h1>
              <Link to="/register">Cadastrar clientes</Link>
              <Button buttonText='Ordem álfabética' onClick={ this.handleOrder } />
              {
                costumers.length === 0 ? <h3>Nenhum cliente cadastrado</h3> : (
                  <div>
                    {
                      isSorted ? (
                        sorteredCostumers.map((costumer) => (
                          <div key={ costumer.email }>
                            <hr />
                            <p>{`Nome: ${costumer.nome}`}</p>
                            <p>{`Idade: ${costumer.idade}`}</p>
                            <p>{`E-mail: ${costumer.email}`}</p>
                            <Button buttonText='X' onClick={ () => this.handleClick(costumer) } />
                          </div>
                        ))) : (
                          costumers.map((costumer) => (
                            <div key={ costumer.email }>
                              <hr />
                              <p>{`Nome: ${costumer.nome}`}</p>
                              <p>{`Idade: ${costumer.idade}`}</p>
                              <p>{`E-mail: ${costumer.email}`}</p>
                              <Button buttonText='X' onClick={ () => this.handleClick(costumer) } />
                            </div>
                        )))
                    }                    
                  </div>
                )
              }
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
  exclude: (state) => dispatch(manageCostumers(DELETE, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Costumers);