import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { PropTypes } from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? (
      <WeatherData data={data} />
    ) : (
      // <CircularProgress/>
      <LinearProgress />
    )}
  </div>
);

WeatherLocation.protoTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherLocation;
