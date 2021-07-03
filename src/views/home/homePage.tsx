import React from 'react';
import Offers from './components/offers';
import {Box, useMediaQuery} from '@material-ui/core';
import {useStyles} from './homePage.style';

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Offers />
      </Box>
    </>
  );
};

export default HomePage;
