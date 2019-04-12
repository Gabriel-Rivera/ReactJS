import {url_base_forecast, api_key} from '../constans/api_url';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ 
    type: SET_CITY, payload 
});

const setForecastData = payload => ({ 
    type: SET_FORECAST_DATA, payload 
});

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