import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import loged from '../redux/actions/actionLogin';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
  }

  componentDidMount() {
    const { login } = this.props;

    login(this.state);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { history, login } = this.props;

    login(this.state);
    history.push('/costumers')
  }

  render() {
    const { email, senha } = this.state;
    return(
      <div>
        <Input
          type='email'
          placeholder='marcio@gmail.com'
          onChange={ this.handleChange }
          name='email'
          value={ email }
        />
        <Input
          type='password'
          placeholder='Digite sua senha'
          onChange={ this.handleChange }
          name='senha'
          value={ senha } 
        />
        <Button buttonText='Entrar' onClick={ this.handleClick } />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loged(state)),
});

export default connect(null, mapDispatchToProps)(Login);
