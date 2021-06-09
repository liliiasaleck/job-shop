import React from 'react';
import {makeStyles, Box, useTheme, useMediaQuery} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {offers} from './offers/const/offerList.const';
import {Switch, Route, Router, Link, useRouteMatch} from 'react-router-dom';
import SingleOffer from './offers/singleOffer';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '98vh',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    paddingTop: '9rem',
    top: '50%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
  },
  offer: {
    width: '99%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    margin: '5px 5px 5px',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
  },
}));

const Offers: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Link to="/singleoffer">
          <Card className={classes.offer}>
            <CardActionArea className={classes.main}>
              <div>Logo</div>
              <CardContent className={classes.content}>
                <div className={classes.title}>
                  <Typography variant="h6">{offers.title}</Typography>
                  <Typography variant="h6">{offers.salary}</Typography>
                </div>
                <div className={classes.location}>
                  <Typography>{offers.city}</Typography>
                  <Typography>{offers.tech}</Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Box>
    </>
  );
};

export default Offers;
