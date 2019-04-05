import * as clima from "../constans/weathers";
import convert from 'convert-units';

    const getWeatherState = weather => {
        const { id } = weather;
        if(id < 300){
            return clima.THUNDER
        } else if(id < 400){
            return clima.DRIZZLE
        }else if (id < 600){
            return clima.RAIN
        }else if(id < 700){
            return clima.SNOW;     
        }else if(id === 800){
            return clima.SUN
        }else{
            return clima.CLOUD
        }
    }

    const getTemp = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(0);
    }

    const transformWeather = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState  = getWeatherState(weather_data.weather[0]);
        const temperature = parseFloat(getTemp(temp));
        
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`
        }
        
        return data; 
    }

export default transformWeather;