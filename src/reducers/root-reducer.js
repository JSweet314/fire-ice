import { combineReducers } from 'redux';
import { housesReducer } from './housesReducer';
import { errorReducer } from './errorReducer';
import { memberDisplayReducer } from './memberDisplayReducer';

const rootReducer = combineReducers({
  houses: housesReducer,
  errorMessage: errorReducer,
  memberDisplay: memberDisplayReducer
});

export default rootReducer;