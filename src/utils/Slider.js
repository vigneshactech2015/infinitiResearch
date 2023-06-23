import classes from "./slider.module.css"
import { useNavigate } from "react-router-dom";
import userProfile from "../assets/userprofile.svg";
import oneonone from "../assets/oneonone.svg";

export function Slider({ datas=[],title,popular }){
  const navigate = useNavigate();

  function handleNavigate(){
    navigate("/productlisting")
  }

    return(
      <div>
      <div className={classes.explorer_container}>
    <h4 className={classes.explore_title}>{title}</h4>
    <h4 className={classes.viewall} onClick={handleNavigate}>View all</h4>
    </div>
    <h5 className={classes.slider_subtitle}>See what's popular across thousands of {popular}</h5>
      <div className={classes.row}>
        <div className={classes.row__posters}>
          {datas?.map((data,index) => {
            return (
              <div className={classes.row__poster} key={index}>
              <img
                className={classes.rowimg}
                loading="lazy"
                key={index}
                src={data.url}
                alt={"img"}
              />
              <p className={classes.description} style={{color:"black"}}>{data.description}</p>
              <p>{data.price}</p>
              <p className={classes.container_color}>Time left</p>
              <p style={{color:"red"}}>{data.timeleft}</p>
              <p className={classes.container_color}>{data.numberofbids}</p>
            <p className={classes.container_color}>{data.shippingprice}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    )
  }

  export function EventSlider({ datas=[],title,popular }){
    const navigate = useNavigate();
  
    console.log(datas)
    function handleNavigate(){
      navigate("/productlisting")
    }
  
      return(
        <div>
        <div className={classes.explorer_container}>
      <h4 className={classes.explore_title}>{title}</h4>
      <h4 className={classes.viewall} onClick={handleNavigate}>View all</h4>
      </div>
      <h5 className={classes.slider_subtitle}>See what's popular across thousands of {popular}</h5>
        <div className={classes.eventrow_container}>
          <div className={classes.eventrow_subcontainer}>
            {datas?.map((data,index) => {
              return (
                <div className={classes.eventindividualcontainer} key={index}>
                <div className={classes.eventbuttoncontainer}>
                <span className={classes.eventbutton}>New</span>
                <span className={classes.eventbutton}>Scheduled</span>
                </div>
                <div className={classes.date}>
                <h4 className={classes.eventdescription} style={{color:"black"}}>{data.title}</h4>
               <p className={classes.time}>Nov 18</p>
                </div>
                <p className={classes.eventtime}>Sat, 02:PM onwards</p>
                <div className={classes.usercontainer}>
                <img src={userProfile} alt="userprofile"/>
                <div className={classes.user}>
                <p style={{marginRight:"18px"}}>Andrew Smith</p>
                <p>Global foundries</p>
                </div>
                </div>
                <div className={classes.onecontainer}>
                <img src={oneonone} alt="one"/>
                <p>One on One</p>
                </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      )
    }

export function MiniSlider({ datas=[] }){
  
    return(

      <div className={classes.sliderrow}>
        <div className={classes.sliderrow__posters}>
          {datas?.map((data,index) => {
            return (
              <div className={classes.sliderrow__poster}>
              <img
               className={classes.poster_img}
                loading="lazy"
                key={index}
                src={data.url}
                alt={"img"}
              />
              <p>{data.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  }