import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const DegreeToggle = ({value, handleChange}) => {
  
  return (
<React.Fragment>
  
<FormControl component="fieldset">
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} >
    <FormControlLabel value="fahrenheit" control={<Radio />} label="fahrenheit" checked={value === "fahrenheit" ?true: false}/>
    <FormControlLabel value="celsius" control={<Radio />} label="celsius" />
  </RadioGroup>
</FormControl>
    </React.Fragment>
  )
}

export default DegreeToggle;