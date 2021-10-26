import {Toolbar} from '@material-ui/core';
import React, { ReactElement } from 'react';
import Search from './components/searchBar';
import DropDown from './components/locationDropDown';
import MoreFilter from './components/moreFilters';
import {useStyles} from './navigationFilters.style';
import TechFilter from './components/techFilter';


const NavigationFilters = (): ReactElement  => {
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

export default NavigationFilters;
