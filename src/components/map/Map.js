import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { data } from "../../data/Data";
import { connect } from "react-redux";

import clubbing from "../../assets/clubbing.png";
import plate from "../../assets/plate.png";
import shopping from "../../assets/shopping.png";
import camera from "../../assets/camera.png";
import activity from "../../assets/activity.png";

let mapStyles;
if (window.matchMedia("(max-width: 500px)").matches) {
  mapStyles = {
    width: "95vw",
    height: "50vh",
    margin: "10px",
  };
} else {
  mapStyles = {
    width: "65vw",
    height: "70vh",
    margin: "auto",
  };
}

class MapContainer extends Component {
  state = { mapLoaded: false };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  iconFunc(type) {
    if (type === "Activities")
      return { url: activity, scaledSize: new window.google.maps.Size(50, 50) };
    if (type === "Clubbing")
      return { url: clubbing, scaledSize: new window.google.maps.Size(50, 50) };
    if (type === "Shopping")
      return { url: shopping, scaledSize: new window.google.maps.Size(50, 50) };
    if (type === "Sightseeing")
      return { url: camera, scaledSize: new window.google.maps.Size(50, 50) };
    if (type === "Restaurant")
      return { url: plate, scaledSize: new window.google.maps.Size(50, 50) };
  }

  defaultCenter = {
    lat: 51.546983,
    lng: -0.146625,
  };

  allCenter = {
    lat: 51.508638,
    lng: -0.116929,
  };

  render() {
    const { location, time, price, selectAll } = this.props.filterData;
    const typeState = this.props.legend;

    const priceArray = (price) => {
      let priceFilter = parseInt(price, 10);
      if (priceFilter === 1) return [1];
      if (priceFilter === 2) return [1, 2];
      if (priceFilter === 3) return [1, 2, 3];
    };

    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={selectAll ? 10 : 11}
          center={
            selectAll
              ? this.allCenter
              : location
              ? location[1]
              : this.defaultCenter
          }
          onLoad={() => this.setState({ mapLoaded: true })}
        >
          {this.state.mapLoaded &&
            data
              .filter((arr) =>
                selectAll ? arr : arr.id.includes(location && location[0])
              )
              .filter((arr) =>
                selectAll ? arr : arr.time.includes(!time ? "Day" : "Night")
              )
              .filter((arr) =>
                selectAll
                  ? arr
                  : priceArray(price).some((el) => arr.price.includes(el))
              )
              .map((item) => (
                <Marker
                  opacity={
                    typeState && typeState[item.type] === item.type ? 0 : 1
                  }
                  icon={this.iconFunc(item.type)}
                  onMouseOver={() => {
                    typeState &&
                      item.type !== typeState[item.type] &&
                      this.props.getId(item.id);
                  }}
                  onMouseDown={() => {
                    typeState &&
                      item.type !== typeState[item.type] &&
                      this.props.getId(item.id);
                  }}
                  key={item.id}
                  position={item.position}
                  animation={window.google.maps.Animation.DROP}
                />
              ))}
        </GoogleMap>
      </LoadScript>
    );
  }
}

const mapStateToProps = (state) => {
  return { legend: state.legendReducer };
};

export default connect(mapStateToProps, null)(MapContainer);
