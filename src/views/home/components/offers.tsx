import React from 'react';
import {Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {offers} from './singleOffers/const/offerList.const';
import {Link} from 'react-router-dom';
import {routes} from '../../../helpers/routes';
import {useStyles} from './offers.style';

const Offers: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        {offers.map((offert) => {
          const {title, salary, city, tech, id} = offert;
          return (
            <Link
              to={{
                pathname: `/singleoffer/${title.replace(/\s/g, '-')}`,
                state: offert,
              }}
              key={id}
            >
              <Card className={classes.offer}>
                <CardActionArea className={classes.main}>
                  <div>Logo</div>
                  <CardContent className={classes.content}>
                    <div className={classes.title}>
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="h6">{salary}</Typography>
                    </div>
                    <div className={classes.location}>
                      <Typography>{city}</Typography>
                      <Typography>{tech}</Typography>
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
