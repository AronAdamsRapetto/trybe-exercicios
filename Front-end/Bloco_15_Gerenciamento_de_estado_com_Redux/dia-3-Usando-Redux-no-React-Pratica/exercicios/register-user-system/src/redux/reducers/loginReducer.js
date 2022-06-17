import { LOGIN } from "../actions/actionTypes";

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        email: action.user.email,
        senha: action.user.senha,
      }
    default:
      return state;
  }
}

export default loginReducer;
