import React, { memo } from "react";
import "./Infobox.css"
import Info from "../../assets/info";
import star from "../../assets/star.png";

const Infobox = ({ time }) => {
  return (
    <div className="tooltip" >
      <Info time={time} />
      <div className="bottom" >
        <h2>London Guide Tips</h2>
          <ul>
            <li><img alt="star" src={star} />Select an area of London to explore</li>
            <li><img alt="star" src={star} />Use the Day/Night filter to find locations best suited for that time</li>
            <li><img alt="star" src={star} />Use the price slider to find locations best suited for your budget</li>
          </ul>
          <i></i>
      </div>
    </div>
  )
}

export default memo(Infobox);