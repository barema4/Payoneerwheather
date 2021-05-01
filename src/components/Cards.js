
// import { useState } from 'react';
// import BarChart from './BarChart'

// const averageTemperature = function(averageData){
//     if(averageData){
//         return averageData.reduce((accumulator, currentValue) => {
//         let data = (accumulator + currentValue)/averageData.length
//         return data
       
//     }, 0)
//     }
// }

// const DayCard  = (props) => {

//   console.log(props, 'card')

//   const [isChart, setIsChart] = useState(false)

//  const changeState = () => {
//     setIsChart(true)
//   } 
  
//   const fahrenheit =  Math.round((props.avg - 273.15) * 9/5 + 32)
//   const celsius = Math.round((fahrenheit - 32) * 5/9)

//     return (
//       <div className="details" onClick={changeState}>
//       <div className="card">
//         <div className="card-body">
//           <label>Temp</label>
//           <p className="card-text">{props.value === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</p>
//           <label>Date</label>
//           <p className="card-text">{props.date}</p>
//         </div>
//       </div>
//       <div>
//       {/* { isChart ? <BarChart temperature={props.temps} value={props.value}/> : ''} */}
//       </div>
//     </div>
        
//     );
// };


// export const Cards  = ({ weatherData }) => {
//     const [value, setValue] = useState('fahrenheit');

//         Object.keys(weatherData).map(function(key, index) {
//           let temps = weatherData[key].map(temp => temp.main.temp)
//           return <div><DayCard date={key} avg={averageTemperature(temps)} value={value} temps={temps}/></div>
//         })
// }
