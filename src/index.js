import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, {subscribe} from "./Data/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addNewPost, updateNewPostText} from "./Data/state";
import { BrowserRouter } from "react-router-dom";

let renderTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNewPost={ addNewPost } updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  )}; 
renderTree(state); 

subscribe(renderTree);

reportWebVitals();
