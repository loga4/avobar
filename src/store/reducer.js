import { combineReducers } from 'redux'

import menu from './menu/reducer';

const rootReducer = combineReducers({
  menu,
});

export default rootReducer;
