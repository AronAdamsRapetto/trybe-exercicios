import { CHANGE_SIGNAL } from '../actions';

const INITIAL_STATE = {
  signal: {
    color: 'red',
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      signal: { ...state.signal, color: action.payload },
    };
  default:
    return state;
  }
}

export default reducer;
