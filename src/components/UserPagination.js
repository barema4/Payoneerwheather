import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ForwardIcon from '@material-ui/icons/Forward';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        justifyContent: 'space-between'
      },
    },
  }));

function usePagination(props) {

    const classes = useStyles();
    
     return (
        <div className={classes.root}>
        <ForwardIcon variant="outlined" onClick={() => props.paginate('previous')}  style={{ fontSize: 50 }}/>
        <ForwardIcon variant="outlined" color="primary" onClick={()=>props.paginate('next')} style={{ fontSize: 50 }} />
      </div>
     )
    }
export default usePagination;
