import React from 'react';
import {makeStyles, Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '65%',
    height: '100%',
    // border: "1px solid lightgrey",
    backgroundColor: 'lightgrey',
  },
  item: {marginTop: '10px', backgroundColor: 'lightgrey'},
  title: {
    height: '100px',
  },
});

const Offers: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 1</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 2</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 3</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 4</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 5</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 6</Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={12} md={12}>
          <Paper className={classes.title}>Offer 7</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Offers;
