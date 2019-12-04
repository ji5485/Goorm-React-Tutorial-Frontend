import data from "./data";
import { penderReducer as pender } from "redux-pender";
import { combineReducers } from "redux";

export default combineReducers({ data, pender });
