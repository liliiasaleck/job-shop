/* eslint-disable max-len */
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {Typography, Divider} from '@material-ui/core';
import {useStyles} from './dropDown.style';

const DropDown: React.FC = () => {
  const classes = useStyles();
  const [anchorLocation, setAnchor] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchor(null);
  };
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  return (
    <>
      <Button
        className={classes.main}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        endIcon={<Icon>expand_more</Icon>}
      >
        Location
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
          <MenuItem className={classes.remote} onClick={handleClose}>
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
          <MenuItem className={classes.city} onClick={handleClose}>
            Warsaw
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Krakow
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Wroclaw
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Poznań
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Trójmiasto
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Śląsk
          </MenuItem>
        </div>
        <Typography className={classes.title}>Top World</Typography>
        <div className={classes.container}>
          <MenuItem className={classes.city} onClick={handleClose}>
            New York
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            Berlin
          </MenuItem>
          <MenuItem className={classes.city} onClick={handleClose}>
            London
          </MenuItem>
        </div>
        <Divider />
        <Button
          className={classes.clear}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClose}
        >
          Clear filter
        </Button>
      </Menu>
    </>
  );
};

export default DropDown;
