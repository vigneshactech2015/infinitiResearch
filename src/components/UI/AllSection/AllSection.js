import React from 'react';
import classes from "./allsection.module.css";
import {allcategory} from "../../../datas/categoryData";
import { useNavigate } from 'react-router-dom';

function AllSection() {
  const navigate = useNavigate();

  function handleNavigate(e,title){
    localStorage.setItem("title",title)
    navigate("/shopbycategory")
  }
  
  return (
    <div>
    <div className={classes.recent_container}>
    <h5>All Section</h5>
    <div className={classes.recentSubcontainer}>
    {allcategory.map((item,index)=>{
        return(
            <div key={index} className={classes.individualcontainer} onClick={(e)=>handleNavigate(e,item.title)}>
            <img src={item.url} alt={item.title}/>
            <p>{item.title}</p>
            </div>
        )
    })}
    </div>
    </div>
    </div>
  )
}

export default AllSection