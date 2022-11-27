import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";


var middlewares = (middlewares = applyMiddleware(thunk));

const store = createStore(reducers, middlewares);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// ReactDOM.render(<App />,  document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();