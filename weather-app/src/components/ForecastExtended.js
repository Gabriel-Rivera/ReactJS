import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {url_base_forecast, api_key} from '../constans/api_url';
import './styles.css';
import ForecastIem from './ForecastItem';
import transformForecast from './../services/transformForecast';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
       this.updateCity(this.props.city);
    }    


    componentWillReceiveProps(nextProps) { //se ejecuta cada vez dque hay una actualizacion de las propiedades
        if(nextProps !== this.props.city){
            // this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
        
    }
    

    updateCity = (city) => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        
        fetch(url_forecast).then( 
                res => res.json()
            ).then( 
                data => {
                    const forecastData = transformForecast(data);                    
                    this.setState({
                        forecastData
                    })
                    
                }
            )
    }

    renderForecastItemDays(forecastData) {
        
         return forecastData.map((forecast) => 
                            <ForecastIem 
                                key={`${forecast.weekDay}${forecast.hour}`}
                                weekDay={forecast.weekDay} 
                                hour={forecast.hour} 
                                data={forecast.data}>
                            </ForecastIem>)
    }

    renderProgress() {
        return <CircularProgress></CircularProgress>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">{city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;