import { REGISTER, DELETE } from "../actions/actionTypes";

const INITIAL_STATE = [];

const costumersReducer = (state = INITIAL_STATE, action) => {
  const { costumerInfo: nome, email } = action;
  switch (action.type) {
    case REGISTER:
      return [...state, action.costumer];
    case DELETE:
      return state
        .filter(({ nomeStored, emailStored }) => nomeStored !== nome && emailStored !== email);
    default:
      return state;
  }
}

export default costumersReducer;
