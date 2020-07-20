import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  store.runSaga = sagaMiddleware.run;
  return store;
}
const store = configureStore();
export { store };
