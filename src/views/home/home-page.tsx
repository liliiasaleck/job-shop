import React, { ReactElement } from 'react';
import Offers from './offer-list/offer-list.component';
import {Box} from '@material-ui/core';
import {useStyles} from './home-page.style';
import NavigationComponent from '../../components/navigation-filter/navigation.component';

const HomePage = (): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <NavigationComponent />
        <Offers />
      </Box>
    </>
  );
};

export default HomePage;
