import React from 'react';
import classes from "./categoryHeader.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function CategoryHeader() {
    const navigate = useNavigate()

    function navigateHandler(){
        navigate(-1)
    }

  return (
    <div>
    <div className={classes.headercontainer}>
    <h3 className={classes.backbutton} onClick={navigateHandler}><MdArrowBackIosNew/></h3>
    <input className={classes.searchbar} type="text" placeholder='Search category for insights'/>
    </div>

   
    </div>
  )
}

export default CategoryHeader