import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {useStyles} from './locationDropDown.style';
import {topPolandLocations, topWorldLocations, otherLocations} from '../../../helpers/topLocations';
import {useDispatch, useSelector} from 'react-redux';
import {
  filterOffersByLocation,
  resetFilters,
  changeLocation,
} from '../../../store/actions/offersActions';

const LocationDropDown: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorLocation, setAnchor] = useState(null);
  const handleClose = () => {
    setAnchor(null);
  };
  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleReset = () => {
    dispatch(resetFilters());
    handleClose();
  };

  const currentLocation = useSelector((state: any) => state.offers.location);

  useEffect(() => {
    if (currentLocation !== 'Location') {
      dispatch(filterOffersByLocation(currentLocation));
    }
  }, [currentLocation]);

  return (
    <>
      <Button
        className={
          currentLocation === 'Location' ? classes.mainLocation : classes.mainSelectedLocation
        }
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        endIcon={<Icon>expand_more</Icon>}
      >
        {currentLocation}
      </Button>
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorLocation}
        keepMounted
        open={Boolean(anchorLocation)}
        onClick={handleClose}
      >
        <div className={classes.container}>
          <MenuItem className={classes.remote} onClick={() => dispatch(changeLocation('Remote'))}>
            Remote
          </MenuItem>
          <Button
            className={classes.close}
            aria-controls="simple-menu"
            aria-haspopup="true"
            endIcon={<Icon>close</Icon>}
          />
        </div>
        <Typography className={classes.title}>Top Poland</Typography>
        <div className={classes.container}>
          {topPolandLocations.map((location, index) => (
            <MenuItem
              key={index}
              className={classes.city}
              onClick={() => {
                dispatch(changeLocation(location));
                handleClose();
              }}
            >
              {location}
            </MenuItem>
          ))}
        </div>

        <Typography className={classes.title}>Top World</Typography>
        <div className={classes.container}>
          {topWorldLocations.map((location, index) => (
            <MenuItem
              key={index}
              className={classes.city}
              onClick={() => {
                dispatch(changeLocation(location));
                handleClose();
              }}
            >
              {location}
            </MenuItem>
          ))}
        </div>
        <Accordion>
          <AccordionSummary>
            <Typography className={classes.title}>Other locations Poland</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.containerOtherLocation}>
              {otherLocations.map((location, index) => (
                <MenuItem
                  key={index}
                  className={classes.city}
                  onClick={() => {
                    dispatch(changeLocation(location));
                    handleClose();
                  }}
                >
                  {location}
                </MenuItem>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Button
          className={classes.clear}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            handleReset();
          }}
        >
          Clear filters
        </Button>
      </Menu>
    </>
  );
};

export default LocationDropDown;
