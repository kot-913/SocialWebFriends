import React from 'react';
import classes from './FriendOnLine.module.css';
import {NavLink} from 'react-router-dom';

const FriendOnLine = (props) => {
    return (
        <div className={classes.friendOnLineItem}>
          <NavLink to={"/sideBar/" + props.id}><img src={props.imgUrl} alt="avatar img"/>{props.name}</NavLink>
        </div>
    );
  };

  export default FriendOnLine;