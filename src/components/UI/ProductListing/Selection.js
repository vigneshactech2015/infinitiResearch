import React from 'react';
import classes from "./selection.module.css";

function Selection() {
  return (
    <div className={classes.container}>
    <p className={classes.all}>All</p>
    <p>Auction</p>
    <p>Buy It Now</p>
    </div>
  )
}

export default Selection