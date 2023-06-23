import React from 'react';
import search from "../../../assets/search.svg";
import sort from "../../../assets/sort.svg";
import filter from "../../../assets/filter.svg";
import classes from "./stats.module.css";
import list from "../../../assets/list.png";

function Stats() {
  return (
    <div className={classes.stats_container}>
    <p>90,000+ results</p>
    <div className={classes.rightside}>
    <img src={list} alt="list"/>
    <img src={search} alt="search"/>
    <img src={sort} alt="sort"/>Sort
    <img src={filter} alt="filter"/><span className={classes.filter}>Filter</span>
    </div>
    </div>
  )
}

export default Stats