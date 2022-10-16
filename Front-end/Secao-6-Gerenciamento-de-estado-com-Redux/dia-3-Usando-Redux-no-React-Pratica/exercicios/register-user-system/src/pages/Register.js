import React from "react";
import Input from "../components/Input";
import { connect } from 'react-redux';
import Button from "../components/Button";
import manageCostumers from "../redux/actions/actionCostumers";
import { REGISTER } from '../redux/actions/actionTypes'
import { Link } from 'react-router-dom';

class Register extends React.Component {
  state = {
    isLoged: true,
    costumer: {
      nome: '',
      idade: '',
      email: '',
    },
  }

  // componentDidMount() {
  //   const { email, senha } = this.props;
  //   if (email !== '' && senha !== '') {
  //     this.setState({ isLoged: true });
  //   }
  // }

  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({ costumer: { ...prevState.costumer, [name]: value } }));
  }

  handleClick = () => {
    const { register } = this.props;
    const { costumer } = this.state;
    register(costumer);
    this.setState({
      costumer: {
        nome: '',
        idade: '',
        email: '',
      }
    });
  }

  render() {
    const { isLoged, costumer: { nome, idade, email } } = this.state;
    return(
      <div>
        {
          isLoged ? (
            <div>
              <form>
                <Input 
                  type='text'
                  placeholder='Nome:'
                  value={ nome }
                  name='nome'
                  onChange={ this.handleChange }
                />
                <Input 
                  type='number'
                  placeholder='Idade:'
                  value={ idade }
                  name='idade'
                  onChange={ this.handleChange }
                />
                <Input 
                  type='email'
                  placeholder='Email:'
                  value={ email }
                  name='email'
                  onChange={ this.handleChange }
                />
                <Button buttonText='Cadastrar' onClick={ this.handleClick } />
              </form>
              <Link to='/costumers'>Clientes Cadastrados</Link>
            </div>
          ) : <h1>Login não efetuado</h1>
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.login.nome,
  email: state.login.email,
});

const mapDispatchToProps = (dispatch) => ({
  register: (state) => dispatch(manageCostumers(REGISTER, state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
