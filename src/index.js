import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Data/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let renderTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  )}; 
renderTree(store.getState()); 

store.subscribe(renderTree);

reportWebVitals();
