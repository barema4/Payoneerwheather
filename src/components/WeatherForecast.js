import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchWeatherForecasts }from '../actions/weatherActions'
import DayCard from './DayCard '
import DegreeToggle from './DegreeToggle'
import BarChart from './BarChart'
// import UserPagination from './UserPagination'
import '../styles/weather.css'
import { convertFahrenheitTempsToCelsius, convertCelsiusTempsToFahrenheit } from '../utils'

const WeatherForecast = () => {
    const [scale, setScale] = useState('fahrenheit');
    const [showChart, setShowChart] = useState(false)
    const [temperatures, setTemperatures] = useState([])

    const handleChange = (event) => {
      setScale(event.target.value);
      if (showChart) { // only convert when a chart is displayed
        if(event.target.value === 'celsius') {
          const celsiusTemps = convertFahrenheitTempsToCelsius(temperatures)
          setTemperatures(celsiusTemps)
        } else {
          const fahrenheitTemps = convertCelsiusTempsToFahrenheit(temperatures)
          setTemperatures(fahrenheitTemps)
        }
      }
    };

    const showChartVisibility =  () => {
      setShowChart(true)
    }
   
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchWeatherForecasts())
    
    }, [dispatch])
    const weather = useSelector((state) => state.weather)
    const averageTemperature = function(averageData){
      if(averageData){
          return averageData.reduce((accumulator, currentValue) => {
          let data = (accumulator + currentValue)/averageData.length
          return data
         
      }, 0)
      }
    }
    return (
        <div className="cover">
        
        <div><DegreeToggle handleChange={handleChange} value={scale}/></div>
          <div className="data">
          {
            Object.keys(weather.weather).map(function(key, index) {
              let temps = weather.weather[key].map(temp => temp.main.temp)
              return <div key={index}><DayCard date={key} avg={averageTemperature(temps)} scale={scale} temps={temps} showChartVisibility={showChartVisibility} setTemperatures={setTemperatures} /></div>
            })
          }
          
          </div>
          { showChart ? <BarChart temperatures={temperatures} scale={scale} /> : ''}
        </div>
    );
};

export default WeatherForecast;