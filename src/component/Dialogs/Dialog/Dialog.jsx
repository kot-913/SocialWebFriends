import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {
    return (
      <div className={classes.dialog}>
        <div className={classes.dialogItem}>
          <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activeLink}><img src={props.imgUrl} alt="avatar img"/ >{props.name}</NavLink>
        </div>
      </div>
    );
  };

  export default Dialog;
  