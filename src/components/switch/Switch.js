import React, { memo } from "react";
import "./Switch.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const Switch = ({ isOn, handleToggle, selectAll }) => {
  return (
    <div className="switch-container" >
      <h2 style={{color: isOn && "#fff", marginTop: "0"}} ><img alt="sun" src={sun} style={{width: "40px"}} />Day</h2>
      <div>
        <input
          className="switch-checkbox"
          checked={isOn}
          onChange={handleToggle}
          id={`switch-new`}
          type="checkbox"
        />
        {selectAll && <h1 style={{color: isOn ? "#fff" : "#000"}} className="both-times" >{"&"}</h1>}
        <label
          style={{ background: !isOn && "#FFFF00", display: selectAll ? "none" : null }}
          className="switch-label"
          htmlFor={`switch-new`}
        >
        
          <span className={`switch-button`} />
        </label>
      </div>
      <h2 style={{color: isOn && "#fff"}} ><img alt="moon" src={moon} style={{width: "30px"}} />Night</h2>
    </div>
  );
};

export default memo(Switch);