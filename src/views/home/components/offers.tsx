import React from 'react';
import {Box, useTheme} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {useStyles} from './offers.style';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';
import {fetchOffers, filterOffers, selectOffer} from '../../../store/actions/offersActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {images} from '../../../helpers/logos.const';
import { Spinner } from '../../../components/spinner/spinner';


const Offers: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const offersList = useSelector(({offers}: any) => offers.offersList);
  const location = useSelector(({offers}: any) => offers.location);
  const tech = useSelector(({offers}: any) => offers.tech);
  const empType = useSelector(({offers}: any) => offers.employmentType);
  const experience = useSelector(({offers}: any) => offers.experience);
  const isLoading = useSelector((state: any) => state.offers.isLoading);

  useEffect(() => {
    if (location === 'Location' || tech === 'all') dispatch(filterOffers());
  }, [location, tech, empType, experience]);

  return (
    <>
      <Box className={classes.box}>
        {isLoading && !offersList ? (
          <Spinner />
        ) :
          offersList.map((offer) => {
            const {
              title,
              salaryFrom,
              salaryTo,
              location,
              tech,
              id,
              logo,
              companyName,
              employmentType,
              experience,
            } = offer;
            console.log(logo)
            return (
              <Link
                className={classes.link}
                to={{
                  pathname: `/singleoffer/${title.replace(/\s/g, '-')}`,
                  state: offer,
                }}
                onClick={() => dispatch(selectOffer(offer))}
                key={id}
              >
                <Card className={classes.offer}>
                  <CardActionArea className={classes.main}>
                    {/* <Typography className={classes.image}>{logo}</Typography> */}

                    <img className={classes.image} src={logo} />
                    <CardContent className={classes.content}>
                      <div className={classes.large}>
                        <Typography className={classes.title}>{title}</Typography>
                        <div className={classes.salaryBox}>
                          <Typography>{salaryFrom} - </Typography>
                          <Typography>&nbsp;{salaryTo} PLN</Typography>
                        </div>
                      </div>
                      <div className={classes.small}>
                        <div className={classes.locationInfo}>
                          <Typography className={classes.location}>
                            <FontAwesomeIcon icon={faBuilding} />
                            {companyName}
                          </Typography>
                          <Typography className={classes.location}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            {location}
                          </Typography>
                        </div>
                        <Typography className={classes.more} >{employmentType}</Typography>
                        <Typography className={classes.more}>{experience}</Typography>
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
