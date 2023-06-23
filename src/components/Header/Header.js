import React from 'react';
import classes from "./header.module.css";
import {FaGripLines} from 'react-icons/fa';
import {BiFilter} from 'react-icons/bi';
import expandBtn from "../../assets/expandbutton.svg"

function Header() {
  return (
    <div className={classes.header_container}>
    <div className={classes.expandmore}>
    <img src={expandBtn} alt="expand"/>
    </div>
    <select className={classes.dropdown}>
    {["product","service"].map((dropdown,index)=>{
      return <option key={index}>
      {dropdown}
      </option>
    })}
    </select>
    <input className={classes.searchbar} type="text" placeholder='Search by Products & Services'/>
    <div className={classes.filtericon}><BiFilter/>Filter </div>
    </div>
  )
}

export default Header