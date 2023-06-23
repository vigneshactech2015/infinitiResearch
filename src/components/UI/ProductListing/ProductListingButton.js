import React from 'react';
import classes from "./productlistingbutton.module.css";
import { useNavigate } from 'react-router-dom';

function ProductListingButton() {
    const navigate = useNavigate();

    function viewallHandler(){
        navigate("/category/viewall")
    }

  return (
    <div className={classes.buttoncontainer}>
    <button className={classes.all}>All</button>
    <button>Maintainence Services</button>
    <button>Work wear uniforms</button>
    <button className={classes.viewall} onClick={viewallHandler}>View all</button>
    </div>
  )
}

export default ProductListingButton