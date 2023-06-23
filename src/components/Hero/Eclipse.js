import React from 'react';
import eclipse from "../../assets/Ellipse.svg";
import classes from "./eclipse.module.css";

function Eclipse() {
  return (
    <div className={classes.container}>
    {["1","2","3","4","5","6","7"].map((item,index)=>{
        return (<img src={eclipse} alt="eclipse"/>)
    })}
    
    </div>
  )
}

export default Eclipse