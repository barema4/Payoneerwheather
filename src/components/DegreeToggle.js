import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../styles/weather.css'

const DegreeToggle = ({value, handleChange}) => {
  
  return (
<React.Fragment>
  <RadioGroup aria-label="" name="" value={value} onChange={handleChange}   className="toggle">
    <FormControlLabel value="fahrenheit" control={<Radio />} label="fahrenheit" checked={value === "fahrenheit" ?true: false}/>
    <FormControlLabel value="celsius" control={<Radio />} label="celsius" />
  </RadioGroup>
</React.Fragment>
  )
}

export default DegreeToggle;
