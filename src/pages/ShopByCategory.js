import React from 'react';
import ShopByCategoryHeader from '../components/ShopByCategory/ShopByCategoryHeader';
import Accordion from '../utils/Accordion';
import { useNavigate } from 'react-router-dom';

function ShopByCategory() {
    const navigate = useNavigate()

    function handleNavigate(e,title){
        navigate("/productlisting")
    }

  return (
    <div>
    <ShopByCategoryHeader/>
    <Accordion title="Maintainence services">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Work wear & Uniforms">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Custodial Services">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Facility management">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Facility management">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Facility management">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>

    <Accordion title="Facility management">
    {["Level 3","Level 3","Level 3","Level 3"].map((item,index)=>{
       return (<p onClick={(e)=>handleNavigate(e,"Facility management")} style={{borderBottom:"1px solid #C7C7C7",cursor:"pointer"}} key={index}>{item}</p>)
    })}
    </Accordion>
    </div>
  )
}

export default ShopByCategory