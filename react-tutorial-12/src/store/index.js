import reducer from "./modules";
import penderMiddleware from "redux-pender";
import { createStore, compose, applyMiddleware } from "redux";

const getStore = () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(penderMiddleware()),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default getStore;
