import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    const handWeatherlocationClick = city =>{
        onSelectedLocation(city)
    };

    const getListCities = cities =>(
        cities.map( city => 
        <WeatherLocation 
            city={city} 
            key={city}
            onWeatherLocationClick={ ( ) => handWeatherlocationClick(city) } 
            />
        ))


    return (
            <div className="locationList">
             { getListCities(cities) }
        </div>
)};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;