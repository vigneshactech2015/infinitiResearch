import React from 'react';
import classes from "./explore.module.css"
import { Slider,MiniSlider,EventSlider } from '../../utils/Slider';
import { exploreData,data,eventdata } from '../../datas/exploreData';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const navigate = useNavigate();

  function exploreAllHandler(){
    navigate("/category/viewall")
  }

  return (
    <div>
    <div className={classes.explorer_container}>
    <h4 className={classes.explore_title}>Explore Popular Categories</h4>
    <h4 className={classes.viewall} onClick={exploreAllHandler}>View all</h4>
    </div>
    <MiniSlider datas={exploreData}/>
    <Slider datas={data} title="Trending Auctions" popular="Auctions"/>
    <Slider datas={data} title="Featured Products" popular="products"/>
    <Slider datas={data} title="Featured Services" popular="products"/>
    {/*<Slider datas={data} title="Featured Events" popular="products"/>*/}
    <EventSlider datas={eventdata} title="Featured Events" popular="products"/>
    </div>
  )
}

export default Explore