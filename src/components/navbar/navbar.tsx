import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText,
  makeStyles,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import DropDownMenu from '../dropDownMenu/dropDownMenu';
import {pageTitleText} from './const/navigationPages.const';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import ComputerIcon from '@material-ui/icons/Computer';

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
    width: '300px',
    paddingLeft: '30px',
  },
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit',
    paddingLeft: '30px',
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
            <WorkIcon />
            <Link className={classes.textlink} to="/signinemployer">
              <ListItemText>Employer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <ComputerIcon />
            <Link className={classes.textlink} to="/signin">
              <ListItemText>Developer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <GroupIcon />
            <Link className={classes.textlink} to="/aboutus">
              <ListItemText>About us</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
