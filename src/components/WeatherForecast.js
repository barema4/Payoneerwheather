import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container';
import {fetchWeatherForecasts }from '../actions/weatherActions'
import DayCard from './DayCard '
import DegreeToggle from './DegreeToggle'
import Loading from './Loading'

const WeatherForecast = () => {

    const [value, setValue] = React.useState('fahrenheit');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
   
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchWeatherForecasts())
     

    }, [dispatch])

    const weather = useSelector((state) => state.weather)
    const temp = [weather.weather];

    const firstObject = [temp[0]];
    const dates= Object.keys(firstObject[0])

    const dayOne = firstObject[0]['2021-04-30'];
    const dayTwo = firstObject[0]['2021-05-01'];
    const dayThree = firstObject[0]['2021-05-02'];
    const dayFour = firstObject[0]['2021-05-03'];
    const dayFive = firstObject[0]['2021-05-04'];

    const getsDaysAndTemp = function(whichDay) {
      let thatDay = [];
      if (whichDay) {
        whichDay.forEach((item) => {
          thatDay.push(item.main.temp);
        })
      }
      return thatDay;
    };

    const firstDay =  getsDaysAndTemp(dayOne);
    const secondDay =  getsDaysAndTemp(dayTwo);
    const thirdDay =  getsDaysAndTemp(dayThree);
    const fourthDay =  getsDaysAndTemp(dayFour);
    const fifthDay =  getsDaysAndTemp(dayFive);

    const averageTemperature = function(averageData){
      if(averageData){
          return averageData.reduce((accumulator, currentValue) => {
          let data = (accumulator + currentValue)/averageData.length
          return data
         
      }, 0)

      }

    }
   const aver1 =  averageTemperature(firstDay)
   console.log(aver1, 'average data')
  
    return (
        <Container maxWidth="sm">
            <h1>
                5-Day Forecast
            </h1>
            <div>
            <DegreeToggle handleChange={handleChange} value={value}/>
            </div>
            <div>
          {weather ? (<p>yes</p>): (<Loading/>)}
            </div>
          
        </Container>
    );
};

export default WeatherForecast;