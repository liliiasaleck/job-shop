import React from 'react';
import {Box, useTheme} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {useStyles} from './offers.style';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../../api/baseURL';
import {useEffect} from 'react';
import {useState} from 'react';
import {fetchOffers} from '../../../store/actions/offersActions';

const Offers: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();


  const offersList = useSelector(({offers}: any) => offers.offersList);

  const location = useSelector(({offers}: any) => offers.location);
  const tech = useSelector(({offers}: any) => offers.tech);
  const currentLocation = useSelector((state: any) => state.offers.location);
  
  useEffect(() => {
    console.log(location);
    console.log(currentLocation);

    dispatch(fetchOffers());
  }, [currentLocation, tech]);

  return (
    <>
      <Box className={classes.box}>
        {offersList &&
          offersList.map((offer) => {
            const {title, salaryFrom, salaryTo, location, tech, id, logo, companyName} = offer;
            return (
              <Link
                className={classes.link}
                to={{
                  pathname: `/singleoffer/${title.replace(/\s/g, '-')}`,
                  state: offer,
                }}
                key={id}
              >
                <Card className={classes.offer}>
                  <CardActionArea className={classes.main}>
                    <img className={classes.image} src={logo} />
                    <CardContent className={classes.content}>
                      <div className={classes.large}>
                        <Typography>{title}</Typography>
                        <div className={classes.salaryBox}>
                          <Typography color="secondary">{salaryFrom} - </Typography>
                          <Typography color="secondary">&nbsp;{salaryTo} PLN</Typography>
                        </div>
                      </div>
                      <div className={classes.small}>
                        <div className={classes.locationInfo}>
                          <Typography className={classes.location}>{companyName}</Typography>
                          <Typography className={classes.location}>{location}</Typography>
                        </div>
                        <Typography className={classes.tech}>{tech}</Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
      </Box>
    </>
  );
};

export default Offers;
