import React from "react";

import Navigation from "./Nagivation";

import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes['header-bg']}>
      <div className={classes.header}>
        <div>
          <h1>JoulesLabs Canvas</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
