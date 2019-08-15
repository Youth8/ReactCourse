import { createStore, compose } from "redux";
import App from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(App, composeEnhancers());
