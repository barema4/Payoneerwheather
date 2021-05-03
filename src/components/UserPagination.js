import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../styles/weather.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),  
      },
    },
  }));

function usePagination(props) {

    const classes = useStyles();
    
     return (
        <div className="arrow">
        <ArrowBackIcon variant="outlined" color="primary" onClick={() => props.paginate('previous')}  style={{ fontSize: 50 }}/>
        <ArrowForwardIcon variant="outlined" color="primary" onClick={()=>props.paginate('next')} style={{ fontSize: 50 }} />
      </div>
     )
    }
export default usePagination;
