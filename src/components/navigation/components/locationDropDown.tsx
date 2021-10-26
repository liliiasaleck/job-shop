import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {Typography} from '@material-ui/core';
import {useStyles} from './locationDropDown.style';
import {topPolandLocations, topWorldLocations, } from '../../../helpers/topLocations';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetFilters,
  changeLocation,
  filterOffers,
} from '../../../store/actions/offersActions';
import { ReactElement } from 'react';


const LocationDropDown = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorLocation, setAnchor] = useState<null | HTMLElement>(null);
  
  const handleClose = (): void => {
    setAnchor(null);
  };
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleReset = (): void =>  {
    dispatch(resetFilters());
    handleClose();
  };

  const currentLocation = useSelector((state: any) => state.offers.location);

  useEffect(() => {
    if (currentLocation !== 'Location') {
      dispatch(filterOffers());
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
