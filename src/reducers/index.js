const { combineReducers } = require("redux");
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';

import {combineReducers} from 'redux';


const rootReducer = combineReducers({

  firstReducer,
  secondReducer
}
)