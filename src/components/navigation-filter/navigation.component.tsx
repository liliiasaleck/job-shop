import {Toolbar} from '@material-ui/core';
import React, { ReactElement } from 'react';
import Search from './search-bar/search-bar';
import DropDown from './location-filter/location-filter.component';
import MoreFilter from './advanced-filter/advanced-filter.component';
import {useStyles} from './navigation.style';
import TechFilter from './technology-filter/technology-filter.component';


const NavigationComponent = (): ReactElement  => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Search />
        <DropDown />
        <TechFilter />
        <MoreFilter />
      </Toolbar>
    </>
  );
};

export default NavigationComponent;
