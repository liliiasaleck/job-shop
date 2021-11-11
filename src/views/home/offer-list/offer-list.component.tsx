import React, {ReactElement} from 'react';
import {Box, Button, useTheme} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {useStyles} from './offer-list.style';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {filterOffers, resetFilters, selectOffer} from '../../../store/actions/offers.actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {Spinner} from '../../../components/spinner/spinner';
import {NO_FOUND_OFFERS, REMOVE_FILTERS, SALARY_TEXT} from '../offer-list/offer-list.const';
import {StoreInterface} from '../../../store/store.interface';

const OfferList = (): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const location = useSelector(({offers}: StoreInterface) => offers.location);
  const tech = useSelector(({offers}: StoreInterface) => offers.tech);
  const empType = useSelector(({offers}: StoreInterface) => offers.employmentType);
  const experience = useSelector(({offers}: StoreInterface) => offers.experience);
  const offersList = useSelector(({offers}: StoreInterface) => offers.offersList);
  const isLoading = useSelector((state: StoreInterface) => state.offers.isLoading);

  useEffect((): void => {
    dispatch(filterOffers());
  }, [location, tech, empType, experience]);

  const handleReset = (): void => {
    dispatch(resetFilters());
  };

  return (
    <>
      <Box className={classes.box}>
        {isLoading ? (
          <Spinner/>
        ) : offersList?.length > 0 ? (
          offersList?.map((offer) => {
            const {title, salaryFrom, salaryTo, location, tech, id, companyName, logo} = offer;
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
                    <div className={classes.imageBox}>
                      <img className={classes.image} src={logo?.url} />
                    </div>
                    <CardContent className={classes.content}>
                      <div className={classes.large}>
                        <Typography className={classes.title}>{title}</Typography>
                        <div className={classes.salaryBox}>
                          <Typography className={classes.salaryText}>{salaryFrom} - </Typography>
                          <Typography className={classes.salaryText}>
                            &nbsp;{salaryTo} {SALARY_TEXT}
                          </Typography>
                        </div>
                      </div>
                      <div className={classes.small}>
                        <div className={classes.locationInfo}>
                          <Typography className={classes.location}>
                            <FontAwesomeIcon icon={faBuilding} /> {companyName}
                          </Typography>

                          <Typography className={classes.locationSecond}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                          </Typography>
                        </div>
                        <Typography className={classes.tech}>{tech}</Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })
        ) : (
          <div className={classes.noOffers}>
            <Typography className={classes.noOffersText}>{NO_FOUND_OFFERS}</Typography>
            <Button className={classes.removeFilters} onClick={handleReset}>
              {REMOVE_FILTERS}
            </Button>
          </div>
        )}
      </Box>
    </>
  );
};

export default OfferList;
