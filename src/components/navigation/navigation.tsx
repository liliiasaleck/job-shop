import { Toolbar} from '@material-ui/core';
import React from 'react';
import Search from './components/searchBar';
import DropDown from './components/dropDown';
import MoreFilter from './components/moreFilters';
import {useStyles} from './navigation.style';
import TechFilter from './components/techFilter';

const Navigation: React.FC = () => {
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

export default Navigation;
