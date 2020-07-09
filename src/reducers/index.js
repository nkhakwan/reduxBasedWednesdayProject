import * as a from './addKeg';
//import detailItem from './addKeg';
const { combineReducers } = require("redux");



//import {combineReducers} from 'redux';


const rootReducer = combineReducers({

  macroKegList : a.macroKegList,
  detailItem : a.detailItem
}
)

export default rootReducer;