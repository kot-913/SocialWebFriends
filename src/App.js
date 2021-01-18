import React from "react";
import classes from"./App.module.css";
import Dialogs from "./component/Dialogs/Dialogs";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {Route} from "react-router-dom";
import Groups from "./component/Groups/Groups";
import Media from "./component/Media/Media";
import News from "./component/News/News";


function App(props) {
  return (
    
    <div className={classes.app}>
      <Header />
      <Nav state={props.state.nav}/>
      <div className={classes.appContent}>
        <Route path='/profile' render={() => <Profile state={props.state.profile} />}/>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogs}/>}/>
        <Route path='/groups' render={() => <Groups />}/>
        <Route path='/media' render={() => <Media />}/>
        <Route path='/news' render={() => <News />}/>
      </div>
    </div>
    
    
  );
}

export default App;
