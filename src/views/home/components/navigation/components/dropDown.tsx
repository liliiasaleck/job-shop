/* eslint-disable max-len */
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import {makeStyles, Typography, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '30%',
    marginLeft: '20%',
    color: 'grey',
    border: '1px solid lightgrey',
    borderRadius: '40px',
  },
  menu: {minWidth: '100% '},
  container: {
    display: 'flex',
  },
  title: {
    marginLeft: '15px',
  },
  city: {
    border: '1px solid lightgrey',
    borderRadius: '40px',
    margin: '10px 10px 10px 10px',
  },
  remote: {
    border: '1px solid lightgrey',
    borderRadius: '40px',
    width: '13%',
    margin: '10px 10px 10px 10px',
  },
  close: {marginLeft: '400px'},
}));

const DropDown: React.FC = () => {
  const classes = useStyles();
  const [anchorLocation, setAnchor] = useState<null | HTMLElement>(null);
  // const [city, setCity] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchor(null);
  };
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  // const handleChange = (event: React.MouseEvent<HTMLButtonElement>) =>
  // setValue(e.target.value);
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
        onClose={handleClose}
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

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.title}>
              Other locations Poland
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MenuItem className={classes.city} onClick={handleClose}>
              Białystok
            </MenuItem>
            <MenuItem className={classes.city} onClick={handleClose}>
              Łódź
            </MenuItem>
            <MenuItem className={classes.city} onClick={handleClose}>
              Olsztyn
            </MenuItem>
            <MenuItem className={classes.city} onClick={handleClose}>
              Bydgoszcz
            </MenuItem>
            <MenuItem className={classes.city} onClick={handleClose}>
              Kielce
            </MenuItem>
            <MenuItem className={classes.city} onClick={handleClose}>
              Lublin
            </MenuItem>
          </AccordionDetails>
        </Accordion>
        <Button
          className={classes.remote}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          Clear filter
        </Button>
      </Menu>
    </>
  );
};

export default DropDown;
