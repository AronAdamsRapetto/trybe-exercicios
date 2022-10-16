import { REGISTER, DELETE } from "../actions/actionTypes";

const INITIAL_STATE = [];

const costumersReducer = (state = INITIAL_STATE, action) => {
  const { costumer } = action;
  switch (action.type) {
    case REGISTER:
      return [...state, action.costumer];
    case DELETE:
      return state
        .filter(({ nome: nomeStored, email: emailStored }) => (
          nomeStored !== costumer.nome && emailStored !== costumer.email
        ));
    default:
      return state;
  }
}

export default costumersReducer;
