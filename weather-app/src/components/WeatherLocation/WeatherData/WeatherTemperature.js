import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import * as clima from '../../../constans/weathers';

const icons = {
    [clima.CLOUD]: "cloud",
    [clima.RAIN]: "rain",
    [clima.SNOW]: "snow",
    [clima.SUN] : "day-sunny",
    [clima.DRIZZLE] : "day-showers",
    [clima.THUNDER] : "day-thunderstorm"
}

const getWeatherIcon = (weatherState) =>{
    const icon = icons[weatherState];

    const sizeIcon =  '4x';

    if(icon){
        return <WeatherIcons  className="wicon" name={icon} size = {sizeIcon}/>
    }else{
        return <WeatherIcons className="wicon"  name={"day-windy"} size = {sizeIcon}/>
    }
}
                //tipo de Desctructuring ↓
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature" >{`${temperature}`}</span>
        <span className="temperatureType" >{`°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;