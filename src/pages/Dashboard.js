import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Dashboard.css";
import Map from "../components/map/Map";
import Card from "../components/card/Card";
import NavbarInfo from "../components/navbarInfo/NavbarInfo";
import Legend from "../components/legend/Legend";


const Dashboard = () => {

  const [id, setId] = useState(null)

  const getIdFunc = (id) => {
    setId(id)
  }

  const filterData = useSelector(state => state.filterReducer);
  const time = filterData.time

  if (!filterData.auth)  return <Redirect to="/" />
  return (
    <div className="dashboard-page" style={{backgroundColor: !time ? "#ADEAEA" : "#000" }}>
      <nav>
        <NavbarInfo filterData={filterData} />
      </nav>
      <Legend time={time} />
      <div className="container" >
        <div className="map-component" >
          <Map getId={getIdFunc} filterData={filterData} />
        </div>
        <div className="card-component" >
          <Card id={id} />
        </div>
      </div>
    </div>
  );
}
  
export default Dashboard;