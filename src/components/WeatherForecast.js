import {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchWeatherForecasts }from '../actions/weatherActions'
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
    // const [count, setCount] = useState(0);
    const [paginatedData, setPaginatedData] = useState([])
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
      // console.log("here +++++++++++++ house>")
      
      if(value === 'previous'){
        let data1 = [];
        for(let num=0; num<3; num++) {
         
          console.log("prevhouse>", data, "__________________---____", data1, data, data[num]);
          data1.push(data[num])
          
        }
        setPagination(data1)
      }else{
        let data2 = [];
        for(let num=3; num<6; num++) {
          
          
          data2.push(data[num])
          console.log("next +++++++++>", data, "__________________---____", data2);
          
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
        <div className="cover">
        
        <div><DegreeToggle handleChange={handleChange} value={scale}/></div>
        <div><UserPagination paginate={paginate}/></div>
        {/* {  console.log(paginatedData, 'paginatedData')} */}
          <div className="data">
          {/* {console.log("weather.weather +++>", weather.weather)} */}
          { 
        
        
        Object.keys(weather.weather).map(function(key, index) {
              let temps = weather.weather[key].map(temp => temp.main.temp)
              // console.log("joujdfjodjfojfdoijdf>>>>>", pagination, key)
              return pagination.includes(key)?<div key={index}><DayCard date={key} avg={averageTemperature(temps)} scale={scale} temps={temps} showChartVisibility={showChartVisibility} setTemperatures={setTemperatures} /></div>:""
              
            })
          }
          
          </div>
          { showChart ? <BarChart temperatures={temperatures} scale={scale} /> : ''}
        </div>
    );
};

export default WeatherForecast;