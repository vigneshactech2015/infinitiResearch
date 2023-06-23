import React from 'react';
import classes from "./hero.module.css";
import heroImage from "../../assets/hero.png"

function Hero() {
  return (
    <div className={classes.hero_container}>
    <img className={classes.heroImage} src={heroImage} alt="heroimage"></img>
    </div>
  )
}

export default Hero