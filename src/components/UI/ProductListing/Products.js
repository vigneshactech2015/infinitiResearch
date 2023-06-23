import React,{useState} from 'react'
import {productList} from "../../../datas/exploreData";
import classes from "./product.module.css";

function Products() {
    const[dataCount ,setDataCount ] = useState(5);

    function handleMore(){
        setDataCount((prev)=>prev+5)
    }

  return (
    <div className={classes.container}>
    {productList.slice(0,dataCount).map((product,index)=>{
        return(
            <div>
            <img src={product.url} alt={product.description}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p className={classes.color}>Time left</p>
            <p className={classes.red}>{product.timeleft}</p>
            <p className={classes.color}>{product.numberofbids}</p>
            <p className={classes.color}>{product.shippingprice}</p>
            </div>
        )
    })}
    <div className={classes.seemore}>
    <button className={classes.seemorebutton} onClick={handleMore}>See More</button>
    </div>
    </div>
  )
}

export default Products