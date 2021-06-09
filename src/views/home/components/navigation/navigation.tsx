import {Toolbar, makeStyles} from '@material-ui/core';
import React from 'react';
import Search from './components/searchBar';
import DropDown from './components/dropDown';
import MoreFilter from './components/moreFilters';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
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
        <MoreFilter />
      </Toolbar>
    </>
  );
};

export default Navigation;
