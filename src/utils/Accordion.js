import React,{useState} from 'react';
import { MdExpandMore,MdExpandLess  } from "react-icons/md";
import classes from "./accordion.module.css";


function Accordion(props) {
    const [toggle,setToggle] = useState(false)

    function toggleHandler(){
        setToggle((prev)=>!prev)
    }

  return (
    <div className={classes.container}>
    <div className={classes.accordioncontainer}>
    <p className={classes.title}>{props.title}</p>
    <h2 onClick={toggleHandler}>{toggle ? <MdExpandLess/>: <MdExpandMore/>}</h2>
    </div>


    {toggle && <div className={classes.childContainer}>
    {props.children}
    </div>}
    </div>
  )
}

export default Accordion