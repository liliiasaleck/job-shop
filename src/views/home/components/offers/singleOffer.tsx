import {Box, makeStyles} from '@material-ui/core';
import React from 'react';
import Navigation from '../navigation/navigation';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '10rem',
  },
}));

const SingleOffer: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <h1>Single Offer</h1>
      </Box>
    </>
  );
};

export default SingleOffer;
