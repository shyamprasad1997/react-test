import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { watchApiCall } from "./sagas/sagas.js";

store.runSaga(watchApiCall);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
