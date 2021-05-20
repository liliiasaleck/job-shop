import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import DropDownMenu from '../dropDownMenu/dropDownMenu';
import { pageTitleText } from './const/navigationPages.const';

const useStyles = makeStyles({
  logo: {
    color: 'black',
    fontSize: '30px',
    marginBottom: '10px',
  },
  title: {
    flexGrow: 1,
    marginLeft: '10px',
    color: 'grey',
  },
  toolbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid lightgrey',
  },
  header: {
    boxShadow: '0px 0px 0px 0px',
  },
  list: {
    width: 250,
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [open, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logo}>
            jobshop.it
          </Link>
          <Typography className={classes.title}>{pageTitleText}</Typography>
          <Link to="/offers">
            <Button color="secondary">Offers</Button>
          </Link>
          <Link to="/postjob">
            <Button>Post a job</Button>
          </Link>
          <DropDownMenu />
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={open}>
        <List className={classes.list}>
          <ListItem>
            <Typography>jobshop.it</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <Link to="/signinemployer">
                <ListItemText>Employer Panel</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/signin">
                <ListItemText>Developer Panel</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/signinemployer">
                <ListItemText>About us</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
