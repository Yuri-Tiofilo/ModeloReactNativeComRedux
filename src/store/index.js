import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";

const composer = __DEV__
  ? compose(
      applyMiddleware(...[]),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...[]);

const store = createStore(reducers, composer);
console.tron.log(store.getState());
export default store;
