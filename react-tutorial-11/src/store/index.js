import reducer from "./reducer";
import penderMiddleware, { penderReducer as pender } from "redux-pender";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

const getStore = () => {
  const reducers = combineReducers({ reducer, pender });

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(penderMiddleware()),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default getStore;
