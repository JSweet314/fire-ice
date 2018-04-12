import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  errorMessage: errorReducer
});


export default rootReducer;
