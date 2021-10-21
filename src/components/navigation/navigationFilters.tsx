import {Toolbar} from '@material-ui/core';
import React, {useState} from 'react';
import Search from './components/searchBar';
import DropDown from './components/locationDropDown';
import MoreFilter from './components/moreFilters';
import {useStyles} from './navigationFilters.style';
import TechFilter from './components/techFilter';

const NavigationFilters: React.FC = () => {
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
