import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';



const ForecastIem = ({weekDay, hour, data}) => (
    <div>
        <h2>
            {weekDay} - {hour} hrs
        </h2>
        <WeatherData data={data}></WeatherData>
    </div>
)

ForecastIem.protoTypes = {
    weekDay:PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastIem;