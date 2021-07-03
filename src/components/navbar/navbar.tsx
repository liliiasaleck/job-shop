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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import DropDownMenu from '../dropDownMenu/dropDownMenu';
import {pageTitleText} from './const/navigationPages.const';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import ComputerIcon from '@material-ui/icons/Computer';
import {routes} from '../../helpers/routes';
import {useStyles} from './navbar.style';

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
          <Link to={routes.main} className={classes.logo}>
            jobshop.it
          </Link>
          <Typography className={classes.title}>{pageTitleText}</Typography>
          <Link className={classes.buttons} to={routes.main}>
            <Button className={classes.buttons} color="secondary">
              Offers
            </Button>
          </Link>
          <Link className={classes.buttons} to={routes.postJob}>
            <Button className={classes.buttons}>Post job</Button>
          </Link>
          <DropDownMenu />
          <IconButton className={classes.buttons} onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={open}>
        <List className={classes.list}>
          <ListItem>
            <Typography className={classes.menu}>Menu</Typography>
          </ListItem>
          <ListItem button>
            <WorkIcon />
            <Link className={classes.textlink} to={routes.signInEmployer}>
              <ListItemText>Employer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <ComputerIcon />
            <Link className={classes.textlink} to={routes.signIn}>
              <ListItemText>Developer Panel</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <GroupIcon />
            <Link className={classes.textlink} to={routes.aboutUs}>
              <ListItemText>About us</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
