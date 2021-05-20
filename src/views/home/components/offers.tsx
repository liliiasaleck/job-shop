import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '65%',
    height: '100%',
    // border: "1px solid lightgrey",
    backgroundColor: 'grey',
  },
  item: {
    marginTop: '10px',
    backgroundColor: 'lightgrey',
  },
  title: {
    height: '100px',
  },
});

const Offers: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container></Grid>
    </div>
  );
};

export default Offers;
