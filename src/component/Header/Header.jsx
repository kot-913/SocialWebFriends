import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <div className={classes.headerImg}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-09-512.png"
            alt="plane"
          />
        </div>
        <div className={classes.headerTitle}>
          Friend<span className={classes.headerTitleSpan}>2</span>Friend
        </div>
      </div>
    </div>
  );
};

export default Header;
