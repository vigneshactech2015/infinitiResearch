import React from 'react';
import classes from "./navbar.module.css"

function NavBar() {
  return (
    <div className={classes.navbar_container}>
    <section>Request anything</section>
    <section>Create Events</section>
    <section>Auction Items</section>
    </div>
  )
}

export default NavBar