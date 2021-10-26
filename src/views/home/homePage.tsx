import React, { ReactElement } from 'react';
import Offers from './components/offers';
import {Box, useTheme} from '@material-ui/core';
import {useStyles} from './homePage.style';
import Navigation from '../../components/navigation/navigationFilters';

const HomePage = (): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Navigation />
        <Offers />
      </Box>
    </>
  );
};

export default HomePage;
