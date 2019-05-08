import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handWeatherlocationClick = city => {
    onSelectedLocation(city);
  };

  const getListCities = cities =>
    cities.map(city => (
      <WeatherLocation
        city={city.name}
        key={city.key}
        onWeatherLocationClick={() => handWeatherlocationClick(city.name)}
        data={city.data}
      />
    ));

  return <div className="locationList">{getListCities(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
