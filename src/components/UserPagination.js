import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
        <div className={classes.root}>
        <Button variant="outlined" onClick={() => props.paginate('previous')}>Prev</Button>
        <Button variant="outlined" color="primary" onClick={()=>props.paginate('next')}>
          Next
        </Button>
      </div>
     )
    }
   
export default usePagination;