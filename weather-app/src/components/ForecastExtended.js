import React from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import ForecastIem from './ForecastItem';

const renderForecastItemDays = (forecastData) => {
        
    return forecastData.map((forecast) => 
                       <ForecastIem 
                           key={`${forecast.weekDay}${forecast.hour}`}
                           weekDay={forecast.weekDay} 
                           hour={forecast.hour} 
                           data={forecast.data}>
                       </ForecastIem>)
}

const renderProgress = () => {
   return <CircularProgress></CircularProgress>
}


const ForecastExtended = ({ city, forecastData }) => (
        <div>
            <h2 className="forecast-title">{city}</h2>
            {forecastData ?
                 renderForecastItemDays(forecastData) :
                 renderProgress()}
        </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;