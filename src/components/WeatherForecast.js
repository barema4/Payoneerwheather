import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux'
import {fetchWeatherForecasts }from '../actions/weatherActions'

const WeatherForecast = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherForecasts())
      }, [dispatch])


    return (
        <div>
            hello Payoneer
        </div>
    );
};

export default WeatherForecast;