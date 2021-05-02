import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalBar = (props) => {
    let values = props.temperatures.map(temp => `${temp} ${props.scale.charAt(0).toUpperCase()}`)
   
     const data = {
     labels: values,
  datasets: [
    {
      data: props.temperatures,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ]
    },
  ],
};
    return(
        <>
        <div className='header'>
          <h1 className='title'>Temperatures Of The Day</h1>
        </div>
        <Bar data={data} options={{}} />
      </>
    )
}
export default VerticalBar;
