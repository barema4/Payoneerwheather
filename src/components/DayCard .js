import { kelvinToFahrenheit, kelvinToCelsius } from '../utils'
import React from 'react';


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
          <label>Temp:</label>
          <p className="card-text">{props.scale === "celsius" ? celsiusAvg + "°C" : fahrenheitAvg + "°F"}</p>
          <label>Date:</label>
          <p className="card-text">{props.date}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
        
    );
};
export default DayCard;
