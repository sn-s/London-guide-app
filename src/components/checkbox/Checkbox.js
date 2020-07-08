import React, { memo } from "react";
import "./Checkbox.css";

const Checkbox = ({ isOn, handleToggle, time }) => {
  return (
    <div className="checkbox" >
      <input 
        className="styled-checkbox" 
        id="styled-checkbox-1" 
        checked={isOn}
        onChange={handleToggle}
        type="checkbox" 
      />
      <label style={{color: time ? "#fff" : "#000"}} htmlFor="styled-checkbox-1">Select All</label>
    </div>
  )
}

export default memo(Checkbox);