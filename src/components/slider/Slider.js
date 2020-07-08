import React, { useState, memo } from "react";
import "./Slider.css";
import Pound from "../../assets/pound";

const Slider = ({ time, priceFunc, selectAll }) => {
  const [value, setValue] = useState("1");

  return (
    <div className="slider">
      <input 
        style={{display: selectAll ? "none" : null}}
        type="range" 
        value={value}
        min="1" 
        max="3" 
        step="1" 
        data-step-labels="[1,2,3]"
        onChange={(e) => {
          setValue(e.target.value);
          priceFunc(e.target.value);
        }}
      >
      </input>
      <span>
        <Pound time={time} value={value} />
        <Pound selectAll={selectAll} time={time} value={value > 1  && value} />
        <Pound selectAll={selectAll} time={time} value={value > 2 && value} />
      </span>
    </div>
  );
};

export default memo(Slider);