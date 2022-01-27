import { combineReducers } from 'redux';
import dogsReducer from './dogs/dogsReducer';

const rootReducer = combineReducers({
  dogs: dogsReducer,
});

export default rootReducer;
