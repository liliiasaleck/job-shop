import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {Typography, Divider} from '@material-ui/core';
import {useStyles} from './dropDown.style';
import {topPolandLocations, topWorldLocations} from '../../../helpers/topLocations';
import {useDispatch} from 'react-redux';
import {filterOffersByLocation, resetFilters} from '../../../store/actions/actions';

const DropDown: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [currentLocation, setCurrentLocation] = useState('Location');
  const [anchorLocation, setAnchor] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchor(null);
  };
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleCurrentLocationChange = (newLocation) => {
    setCurrentLocation(newLocation);
  };

  useEffect(() => {
    if (currentLocation !== 'Location') {
      dispatch(filterOffersByLocation(currentLocation));
    }
  }, [currentLocation]);

  return (
    <>
      <Button
        className={classes.main}
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
          <MenuItem
            className={classes.remote}
            onClick={() => handleCurrentLocationChange('Remote')}
          >
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
                handleCurrentLocationChange(location);
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
                handleCurrentLocationChange(location);
                handleClose();
              }}
            >
              {location}
            </MenuItem>
          ))}
        </div>
        <Divider />
        <Button
          className={classes.clear}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            dispatch(resetFilters());
            handleClose();
          }}
        >
          Clear filter
        </Button>
      </Menu>
    </>
  );
};

export default DropDown;
