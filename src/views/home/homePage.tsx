import React from 'react';
import Offers from './components/offers';
import Navigation from '../../components/navigation/navigation';
import {Box, useMediaQuery} from '@material-ui/core';
import {useStyles} from './homePage.style';

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <Offers />
      </Box>
    </>
  );
};

export default HomePage;
