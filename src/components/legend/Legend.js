import React, { useState, memo } from "react";
import "./Legend.css";
import NavbarInfoBox from "../navbarInfo/NavbarInfoBox";
import { useDispatch } from "react-redux";
import { legendFunc } from "../../store/actions/legendActions";

import Activities from "../../assets/activity.png";
import Sightseeing from "../../assets/camera.png";
import Shopping from "../../assets/shopping.png";
import Restaurant from "../../assets/plate.png";
import Clubbing from "../../assets/clubbing.png";


const Legend = ({ time }) => {
  const locations = [{Activities}, {Sightseeing}, {Shopping}, {Restaurant}, {Clubbing}]
  const [opacity, setOpacity] = useState({
    Activities: false,
    Sightseeing: false,
    Shopping: false,
    Restaurant: false,
    Clubbing: false,
  });

  const dispatch = useDispatch();

  const filterLocations = locations.map((item, i) => {
   const objectKey = Object.keys(item)[0]
    return (
      <li 
        key={i} 
        style={{opacity: (opacity[objectKey] === objectKey) ? 0.5 : 1}}
        onClick={() => {
          dispatch(legendFunc(objectKey))
          setOpacity({
            ...opacity,
            [objectKey]: opacity[objectKey] === objectKey ? false : objectKey 
          })
        }} 
      >
        <span>{objectKey}</span><img alt={objectKey} src={Object.values(item)} />
      </li>
    )
  })

  return(
    <div 
      className="legend" 
      style={{
        color: !time ? "#000" : "#fff",
        border: !time ? "1px solid #000" : "1px solid #fff"
        }}
    >
      <ul>
        <div className="navbar-infobox" >
          <NavbarInfoBox time={time} navbar={true} />
        </div>
          {filterLocations}
      </ul>
    </div>
  );
};

export default memo(Legend);