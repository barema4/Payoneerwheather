import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchWeatherForecasts }from '../actions/weatherActions'
import Container from '@material-ui/core/Container'
import DayCard from './DayCard '
import DegreeToggle from './DegreeToggle'
import UserPagination from './UserPagination';
import BarChart from './BarChart'
import '../styles/weather.css'
import { convertFahrenheitTempsToCelsius, convertCelsiusTempsToFahrenheit } from '../utils'

const WeatherForecast = () => {
    const [scale, setScale] = useState('fahrenheit');
    const [showChart, setShowChart] = useState(false)
    const [temperatures, setTemperatures] = useState([])
    // const [paginatedData, setPaginatedData] = useState([])
    const [pagination, setPagination] = useState([])
   
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

    const weather = useSelector((state) => state.weather)
   
    const dispatch = useDispatch();

    const dataArr = Object.keys(weather.weather)

    const paginate = (value) => {
      let data = Object.keys(weather.weather) 
      if(value === 'previous'){
        let data1 = [];
        for(let num=0; num<3; num++) {
          data1.push(data[num])
          
        }
        setPagination(data1)
      }else{
        let data2 = [];
        for(let num=3; num<6; num++) { 
          data2.push(data[num])   
        }
        setPagination(data2)
      }
    }
    useEffect(() => {
      dispatch(fetchWeatherForecasts())
    
    }, [dispatch])


    useEffect(() => {
      if(weather.weather.length !== 0){
        let arr = [];
        let data = Object.keys(weather.weather)
        for(let num=0; num<3; num++) {    
          arr.push(data[num])
        }      
        setPagination(arr)
      }
    },[weather.weather, dataArr.length])

    const averageTemperature = function(averageData){
      if(averageData){
          return averageData.reduce((accumulator, currentValue) => {
          let data = (accumulator + currentValue)/averageData.length
          return data
         
      }, 0)
      }
    }
    return (
      <Container className="cover">            
        <div><DegreeToggle handleChange={handleChange} value={scale}/></div>
        <div><UserPagination paginate={paginate}/></div>
          <div className="data">
          { 
        Object.keys(weather.weather).map(function(key, index) {
              let temps = weather.weather[key].map(temp => temp.main.temp)
              return pagination.includes(key)?<div key={index}><DayCard date={key} avg={averageTemperature(temps)} scale={scale} temps={temps} showChartVisibility={showChartVisibility} setTemperatures={setTemperatures} /></div>:""
            })
          }
          </div>
          { showChart ? <BarChart temperatures={temperatures} scale={scale} /> : ''}
        </Container>
    )};
export default WeatherForecast;
   