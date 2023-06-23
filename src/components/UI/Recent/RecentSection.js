import React from 'react';
import {recent} from "../../../datas/categoryData";
import classes from "./recent.module.css";
import { useNavigate } from 'react-router-dom';
function RecentSection() {
  const navigate = useNavigate();

  function handleNavigate(e,title){
    localStorage.setItem("title",title)
    navigate("/shopbycategory")
  }

  return (
    <div>
    <div className={classes.recent_container}>
    <h5>Recent</h5>
    <div className={classes.recentSubcontainer}>
    {recent.map((item,index)=>{
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

export default RecentSection