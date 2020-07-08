import React, { useState, memo } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterFunc } from "../store/actions/filterActions";

import London from "../london/London";
import Switch from "../components/switch/Switch";
import Slider from "../components/slider/Slider";
import Infobox from "../components/infobox/Infobox";
import Checkbox from "../components/checkbox/Checkbox";

const HomePage = () => {
  const [location, setLocation] = useState(false);
  const [time, setTime] = useState(false);
  const [price, setPrice] = useState(1);
  const [missing, setMissing] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const auth = true;

  const locationFunc = (area, coordinates) => {
    setLocation([area, coordinates])
    setMissing(false)
  }
  const priceFunc = (input) => {
    setPrice(input)
  }
  const checkboxHandler = () => {
    setSelectAll(!selectAll)
    setMissing(false)
  }

  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div 
      className="home-page" 
      style={{backgroundColor: time ? "black" : null, transition: "background-color 1s linear"}} 
    >
      <nav>
        <h1>My London Guide</h1>
      </nav>
      <div className="container" >
        <Infobox time={time} />
        <London locationFunc={locationFunc} selectAll={selectAll} />
        <div className="filters" >
          <Switch 
            selectAll={selectAll}
            isOn={time} 
            handleToggle={() => setTime(!time)} 
          />
          <Slider 
            selectAll={selectAll} 
            time={time} 
            priceFunc={priceFunc} 
          />
            <button onClick={() => {
              if (selectAll) {
                history.push("/dashboard")
                dispatch(filterFunc(location, time, price, selectAll, auth))
              } else if(!location) {
                setMissing(true)
              } else {
                history.push("/dashboard")
                dispatch(filterFunc(location, time, price, selectAll, auth))
              }
            }} >Find Locations</button>
          <h3>{missing && "Please select an area"}</h3>
          <Checkbox 
            isOn={selectAll} 
            time={time}
            handleToggle={checkboxHandler} 
          />
          <footer>
            <h5 style={{color: time ? "white" : "black"}} >Icons made by Freepik from www.flaticon.com</h5>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default memo(HomePage);