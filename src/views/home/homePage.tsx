import React from 'react';
import Map from './components/map';
import Offers from './components/offers';
import Navigation from './components/navigation/navigation';
import {Box, makeStyles, useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles({
  box: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 0px 0px 0px',
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <Offers />
        <Map />
      </Box>
    </>
  );
};

export default HomePage;
