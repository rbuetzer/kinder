import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.less";
import "./tailwind.less";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app-root")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
