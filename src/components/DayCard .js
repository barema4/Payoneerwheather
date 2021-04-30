import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
// var moment = require('moment')

const DayCard  = ({reading,value}) => {
    console.log(reading, value, 'wwwwwwwwwwwwwwwwwwwwwwwwwwww')

  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const fahrenheit =  Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          {moment(newDate).format('dddd')}
          </Typography>
          <Typography variant="h5" component="h2">
          {moment(newDate).format('MMMM Do, h:mm a')}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {Math.round(reading.main.temp)} °F
          </Typography>
          <h2>{value === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
          <Typography variant="body2" component="p">
          {reading.weather[0].description}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default DayCard ;