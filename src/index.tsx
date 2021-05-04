import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { storeConfig } from "./store/store";
//REDUX
import { Provider } from "react-redux";

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
