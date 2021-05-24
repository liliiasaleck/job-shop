import React from 'react';
import {makeStyles, Grid, Paper, Box} from '@material-ui/core';

const useStyles = makeStyles({
  box: {
    width: '65%',
    height: '98vh',
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    paddingTop: '9rem',
    top: '50%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
  },
  offer: {
    width: '99%',
    height: '13%',
    backgroundColor: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '5px',
  },
});

const Offers: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
        <div className={classes.offer}>Box</div>
      </Box>
    </>
  );
};

export default Offers;
