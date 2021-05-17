import {Toolbar, makeStyles} from '@material-ui/core';
import React from 'react';
import Search from './components/searchBar';
import DropDown from './components/dropDown';
import TechFilter from './components/moreFilters';

const useStyles = makeStyles({
  toolbar: {
    marginTop: '3%',
    width: '100%',
    padding: '0px 0px 0px 0px',
    backgroundColor: 'white',
    color: 'black',
  },
});

const Navigation: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Search />
        <DropDown />
        <TechFilter />
      </Toolbar>
    </>
  );
};

export default Navigation;
