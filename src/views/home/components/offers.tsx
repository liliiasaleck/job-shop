import React from 'react';
import {Box, useTheme} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {offers} from './singleOffers/const/offerList.const';
import {Link} from 'react-router-dom';
import {useStyles} from './offers.style';
import {useSelector} from 'react-redux';
import Navigation from '../../../components/navigation/navigation';

const Offers: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const offersList = useSelector(({offersList}: any) => offersList);

  return (
    <>
      <Box className={classes.box}>
        {offersList.map((offert) => {
          const {title, salary, location, tech, id, logo} = offert;
          return (
            <Link
              className={classes.link}
              to={{
                pathname: `/singleoffer/${title.replace(/\s/g, '-')}`,
                state: offert,
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
                      <Typography className={classes.location}>{location}</Typography>
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
