import React from 'react';
import classes from "./productlistingnavbar.module.css";
import { MdArrowForwardIos } from "react-icons/md";

function ProductListingNavbar() {
  return (
    <div className={classes.container}>
    <p>Facility management</p> <MdArrowForwardIos/>
    <p>Maintainence services</p> <MdArrowForwardIos/>
    <p>level 3</p>
    </div>
  )
}

export default ProductListingNavbar