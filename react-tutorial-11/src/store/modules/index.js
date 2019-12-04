import count from "./count";
import { penderReducer as pender } from "redux-pender";
import { combineReducers } from "redux";

export default combineReducers({ count, pender });
