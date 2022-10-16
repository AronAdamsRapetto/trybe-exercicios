// Neste arquivo você deverá combinar os seus reducers.
import { combineReducers } from 'redux';
import moveCarReducer from './moveCarReducer';
import changeSignalReducer from './changeSignalReducer';

const rootReducer = combineReducers({
  carReducer: moveCarReducer,
  changeSignal: changeSignalReducer,
});

export default rootReducer;
