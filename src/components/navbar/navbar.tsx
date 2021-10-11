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
import {pageTitleText} from './const/navigationPages.const';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import ComputerIcon from '@material-ui/icons/Computer';
import {routes} from '../../routing/routes';
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
          <div className={classes.logoDiv}>
            <Link to={routes.main} className={classes.logo}>
              justjoin.it
            </Link>
            <Typography className={classes.title}>{pageTitleText}</Typography>
          </div>
          <div>
            <Link className={classes.buttons} to={routes.main}>
              <Button className={classes.buttons} color="secondary">
                Offers
              </Button>
            </Link>
            <Link className={classes.buttons} to={routes.postJob}>
              <Button className={classes.post}>Post job</Button>
            </Link>
            <Link className={classes.buttons} to={routes.signIn}>
              <Button className={classes.signInButton}>Sign in</Button>
            </Link>
            <IconButton className={classes.hamburger} onClick={handleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={open}>
        <List className={classes.list}>
          <div>
            <ListItem>
              <Typography className={classes.menu}>Menu</Typography>
            </ListItem>
            <ListItem button>
              <WorkIcon />
              <Link className={classes.textlink} to={routes.main}>
                <ListItemText>Offers</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <CreateIcon />
              <Link className={classes.textlink} to={routes.postJob}>
                <ListItemText>Post a job</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <ComputerIcon />
              <Link className={classes.textlink} to={routes.signIn}>
                <ListItemText>Sign in</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <GroupIcon />
              <Link className={classes.textlink} to={{ pathname: 'https://geek.justjoin.it/' }} target='_blank'>
                <ListItemText>Geek</ListItemText>
              </Link>
            </ListItem>
          </div>
          <div className={classes.groupButton}>
            <ListItem button className={classes.registerButton}>
              <ComputerIcon />
              <Link  to={routes.signIn}>
                <ListItemText>Sign in</ListItemText>
              </Link>
            </ListItem>
            <ListItem button className={classes.registerButton}>
              <GroupIcon />
              <Link  to={routes.signUp}>
                <ListItemText>Sign up</ListItemText>
              </Link>
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
