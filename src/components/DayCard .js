import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { kelvinToFahrenheit, kelvinToCelsius } from '../utils'
var moment = require('moment')



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const DayCard  = (props) => {
  
  const fahrenheitAvg = kelvinToFahrenheit(props.avg)
  const celsiusAvg = kelvinToCelsius(props.avg)

  const fahrenheit = props.temps.map((temp) => kelvinToFahrenheit(temp))
  const celsius = props.temps.map((temp) => kelvinToCelsius(temp))

  const handleClick = () => {
    const temps = props.scale === 'celsius' ? celsius : fahrenheit
    props.setTemperatures(temps)
    props.showChartVisibility()
} 


    return (
      <div className="details" onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <label>Temp</label>
          <p className="card-text">{props.scale === "celsius" ? celsiusAvg + "°C" : fahrenheitAvg + "°F"}</p>
          <label>Date</label>
          <p className="card-text">{props.date}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
        
    );
};

export default DayCard ;