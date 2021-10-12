import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import "./NavbarInfo.css";

import { useDispatch } from "react-redux";
import { legendFunc } from "../../store/actions/legendActions";

import London from "../../london/London";
import North from "../../london/North";
import East from "../../london/East";
import South from "../../london/South";
import West from "../../london/West";
import Central from "../../london/Central";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import Pound from "../../assets/pound";

const NavbarInfo = ({ filterData }) => {
  const { location, time, price, selectAll } = filterData;
  const history = useHistory();

  const locationFunc = () => {
    if (location[0] === "North") return <North />;
    if (location[0] === "East") return <East />;
    if (location[0] === "South") return <South />;
    if (location[0] === "West") return <West />;
    if (location[0] === "Central") return <Central />;
  };

  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <ul>
        <li>
          <span className="navbar-span">
            {selectAll ? (
              <>
                <span className="allAreas">All areas</span>
                <London navbar={true} selectAll={true} />
                <span> , </span>
              </>
            ) : (
              <>
                <span className="oneArea">{location[0]}</span>
                {locationFunc()}
                <span> , </span>
              </>
            )}
          </span>
        </li>
        {!selectAll && <li className="gap-text">at</li>}
        <li>
          {selectAll ? (
            <>
              <span className="navbar-span">
                <img alt="time" src={sun} />
                <div className="and">{"&"}</div>
                <img alt="time" src={moon} />
                <span> , </span>
              </span>
            </>
          ) : (
            <>
              <span className="navbar-span">
                <img alt="time" src={!time ? sun : moon} />
                time
                <span> , </span>
              </span>
            </>
          )}
        </li>
        <li className="gap-text">up to</li>
        <li>
          <span>
            <Pound value={price} />
            <Pound selectAll={selectAll} value={price > 1 && price} />
            <Pound selectAll={selectAll} value={price > 2 && price} />
          </span>
        </li>
        <li>
          <button
            onClick={() => {
              history.push("/");
              dispatch(legendFunc("reset"));
            }}
          >
            Home
          </button>
        </li>
      </ul>
    </div>
  );
};
export default memo(NavbarInfo);
