import React from 'react';
import classes from "./productlisting.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import widget from "../../../assets/widget.png"

function ProductListingHeader() {
    const navigate = useNavigate()

    function navigateHandler(){
        navigate(-1)
    }

  return (
    <div>
    <div className={classes.headercontainer}>
    <h3 className={classes.backbutton} onClick={navigateHandler}><MdArrowBackIosNew/></h3>
    <div className={classes.container}>
    <select className={classes.dropdown}>
    {["Products","Suppliers","Categories"].map((dropdown,index)=>{
      return <option key={index}>
      {dropdown}
      </option>
    })}
    </select>
    <input className={classes.searchbar} type="text" placeholder='Search category for insights'/>
    </div>
    <img src={widget} className={classes.widget} alt="widget"/>
    </div>

   
    </div>
  )
}

export default ProductListingHeader