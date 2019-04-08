import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    // se filtra la respuesta del servidor y se saca solo los valores que tengan los horarios  6 ,12 y 18
    data.list.filter(item => (             
                 moment.unix(item.dt).utc().hour() === 6  || 
                 moment.unix(item.dt).utc().hour() === 12 ||    
                 moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
)

export default transformForecast;