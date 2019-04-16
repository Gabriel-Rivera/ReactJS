import React, { Component } from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { PropTypes } from 'prop-types';
// import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
// import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


/*
componentDidMount() {  
        this.handleUpdateClick()
}

handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then(
        resolve => {
            return resolve.json();
        }).then(data => {                
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
}
*/
const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> :
            // <CircularProgress/>
            <LinearProgress />
        }
    </div>
);

WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape(
        {
            temperature: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
        })
}

export default WeatherLocation;