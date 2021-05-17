import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    width: '30%',
    marginLeft: '20%',
  },
});

const MoreFilter: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.main}>More filters</div>;
};

export default MoreFilter;
