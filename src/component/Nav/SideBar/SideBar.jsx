import React from "react";
import classes from "./SideBar.module.css";
import FriendOnLine from "./FriendOnLine/FriendOnLine";

const SideBar = (props) => {
    let friendOnLine = props.state.map((friendOnLineItem) => (
        <FriendOnLine key={friendOnLineItem.id} name={friendOnLineItem.name} id={friendOnLineItem.id} imgUrl={friendOnLineItem.imgUrl} />
      ));
return (
    <div className={classes.friendOnLine}>
    <div className={classes.friendOnLineItem}>{friendOnLine}</div>
  </div>
)
}

export default SideBar;
