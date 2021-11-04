import {Toolbar} from '@material-ui/core';
import React, { ReactElement } from 'react';
import Search from './components/search-bar';
import DropDown from './components/location-filter.component';
import MoreFilter from './components/advanced-filter.component';
import {useStyles} from './navigation.style';
import TechFilter from './components/technology-filter.component';


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
