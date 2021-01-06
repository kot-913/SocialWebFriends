import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Pofile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div>
        <NavLink to="/groups" activeClassName={classes.activeLink}>Groups</NavLink>
      </div>
      <div>
        <NavLink to="/media" activeClassName={classes.activeLink}>Media</NavLink>
      </div>
    </div>
  );
};

export default Nav;
