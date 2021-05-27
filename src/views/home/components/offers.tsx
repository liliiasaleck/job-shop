import React from 'react';
import {makeStyles, Box, useTheme, useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

const Offers: React.FC = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
        <div className={classes.offer}>Offer</div>
      </Box>
    </>
  );
};

export default Offers;
