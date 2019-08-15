import React from "react";
import ReactDOM from "react-dom";
import Spa from "./components/ReduxContainerForIndex";
import "../scss/index.scss";
import "epc-ui-core-react/css/epc-ui-core.min.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Spa />
  </Provider>,
  document.getElementById("content")
);
