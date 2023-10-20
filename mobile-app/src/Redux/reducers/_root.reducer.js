import { combineReducers } from 'redux';
let testReducer = () => {
  let state = {};
  return state;
};

const rootReducer = combineReducers({ testReducer });
export default rootReducer;
