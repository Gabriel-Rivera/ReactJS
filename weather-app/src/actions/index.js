import {url_base_forecast, api_key} from '../constans/api_url';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ ype: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});



export const setSelectedCity = payload => { 
    return dispatch =>{
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then( 
                res => res.json()
            ).then( 
                data => {
                    const forecastData = transformForecast(data);                    
                    
                    //Modificar el estado con el resultado de la promise (fetch)
                    dispatch(setForecastData({city: payload, forecastData}));
                }
            );
    }
}

export const setWeather = payload => { 
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city))
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then(
                resolve => {
                    return resolve.json();
                }).then(data => {                
                    const newWeather = transformWeather(data);
                    dispatch(setWeatherCity({city, newWeather}))
                });
        });
    }
}