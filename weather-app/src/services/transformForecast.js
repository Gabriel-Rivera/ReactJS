import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    data.list.filter((item) => (             // se filtra la respuesta del servidor y se saca solo los valores que tengan los horarios  6 ,12 y 18
                 moment.unix(item.dt).hour() === 6  || 
                 moment.unix(item.dt).hour() === 12 ||    
                 moment.unix(item.dt).hour() === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
)

export default transformForecast;