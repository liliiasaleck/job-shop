import { Toolbar, makeStyles } from '@material-ui/core';
import React from 'react';
import Search from './components/searchBar';
import DropDown from './components/dropDown';
import TechFilter from './components/moreFilters';

const useStyles = makeStyles({
  toolbar: {
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    position: 'absolute',
    top: '12%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    padding: '20px 20px',
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
