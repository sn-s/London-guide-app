import React from "react";
import "./NavbarInfoBox.css"
import Info from "../../assets/info";
import star from "../../assets/star.png";

const Infobox = ({ time }) => {
  return (
    <div className="tooltip" >
      <Info time={time} navbar={true} />
      <div className="bottom" >
        <h3>Marker Locations</h3>
            <p><img alt="star" src={star} />Toggle the markers on/off with the icons</p>
          <i></i>
      </div>
    </div>
  )
}

export default Infobox;