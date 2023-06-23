import React,{useState,useEffect} from 'react';
import classes from "./shopbycategoryHeader.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function ShopByCategoryHeader() {
    const[title,setTitle] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("title")){
            setTitle(localStorage.getItem("title"))
        }
        return()=>{
            localStorage.clear()
        }
    },[])

    function backHandler(){
        navigate(-1)
    }

  return (
    <div>
    <div className={classes.headercontainer}>
    <h3 className={classes.backbutton} onClick={backHandler}><MdArrowBackIosNew/></h3>
    <h3 className={classes.title}>{title}</h3>
    </div>

   
    </div>
  )
}

export default ShopByCategoryHeader