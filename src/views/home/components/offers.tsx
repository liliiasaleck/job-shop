import React from 'react';
import {Box, useTheme} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {useStyles} from './offers.style';
import {useSelector} from 'react-redux';
import api from '../../../api/baseURL';
import {useEffect} from 'react';
import { useState } from 'react';

const Offers: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  //fetch
  const [offers, setOffers] = useState([]);

  const offersList = useSelector(({offersList}: any) => offersList);

    //fetch
  const retrieveOffers = async () => {
    const response = await api.get('/offers');
    return response.data;
  };

  //fetch
  useEffect(() => {
    const getAllOffers = async()=>{
      const allOffers= await retrieveOffers();
      if (allOffers) setOffers(allOffers);
    };
    getAllOffers();
  }, []);

  return (
    <>
      <Box className={classes.box}>
        {offersList.map((offer) => {
          const {title, salary, location, tech, id, logo, companyName} = offer;
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
                      <Typography color="secondary">{salary}</Typography>
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
