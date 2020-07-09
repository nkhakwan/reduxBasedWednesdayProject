import * as a from './addKeg';
const { combineReducers } = require("redux");



//import {combineReducers} from 'redux';


const rootReducer = combineReducers({

  detailItem : a.detailItem,
  macroKegList : a.macroKegList
}
)

export default rootReducer;