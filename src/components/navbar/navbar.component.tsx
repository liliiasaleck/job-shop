import React, {ReactElement, useState} from 'react';
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
  Icon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import ComputerIcon from '@material-ui/icons/Computer';
import {useStyles} from './navbar.style';
import {useDispatch, useSelector} from 'react-redux';
import SignInLinks from './links/sign-in-links';
import SignOutLinks from './links/sign-out-links';
import {NavigationPathEnum} from '../../enums/navigation-path.enum';
import {
  PAGE_TITLE_TEXT,
  LOGO_TEXT,
  OFFERS_LINK_TEXT,
  POST_OFFER_LINK_TEXT,
  PAGE_MENU_TEXT,
  SIGN_IN_LINK_TEXT,
  SIGN_UP_LINK_TEXT,
  GEEK_IN_LINK_TEXT,
} from './navbar.const';
import {StoreInterface} from '../../store/store.interface';
import {resetFilters} from '../../store/actions/offers.actions';
import {clearMessage} from '../../store/actions/auth.actions';

const NavbarComponent = (): ReactElement => {
  const classes = useStyles();
  const [open, setOpenDrawer] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDrawer = (): void => {
    setOpenDrawer(true);
  };

  const handleClose = (): void => {
    setOpenDrawer(false);
  };

  const handleReset = (): void => {
    dispatch(resetFilters());
    dispatch(clearMessage());
  };

  const user = useSelector(({auth}: StoreInterface) => auth.user);
  const links = user ? <SignOutLinks /> : <SignInLinks />;

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoDiv}>
            <Link to={NavigationPathEnum.MAIN} onClick={handleReset} className={classes.logo}>
              {LOGO_TEXT}
            </Link>
            <Typography className={classes.title}>{PAGE_TITLE_TEXT}</Typography>
          </div>
          <div>
            <Link to={NavigationPathEnum.MAIN} className={classes.buttons}>
              <Button className={classes.buttons} color="secondary">
                {OFFERS_LINK_TEXT}
              </Button>
            </Link>
            <Link to={NavigationPathEnum.POST_OFFER} className={classes.buttons}>
              <Button className={classes.post}>{POST_OFFER_LINK_TEXT}</Button>
            </Link>
            {links}
            <IconButton className={classes.hamburger} onClick={handleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={open}>
        <List className={classes.list}>
          <div>
            <div className={classes.topMenu}>
              <ListItem>
                <Typography className={classes.menu}>{PAGE_MENU_TEXT}</Typography>
              </ListItem>
              <Button
                endIcon={<Icon>close</Icon>}
                className={classes.closeMenu}
                onClick={handleClose}
              />
            </div>
            <ListItem button>
              <WorkIcon />
              <Link to={NavigationPathEnum.MAIN} className={classes.textlink}>
                <ListItemText>{OFFERS_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <CreateIcon />
              <Link to={NavigationPathEnum.POST_OFFER} className={classes.textlink}>
                <ListItemText>{POST_OFFER_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <ComputerIcon />
              <Link to={NavigationPathEnum.SIGN_IN} className={classes.textlink}>
                <ListItemText>{SIGN_IN_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <GroupIcon />
              <Link
                className={classes.textlink}
                to={{pathname: 'https://geek.justjoin.it/'}}
                target="_blank"
              >
                <ListItemText>{GEEK_IN_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
          </div>
          <div className={classes.groupButton}>
            <ListItem button className={classes.registerButton}>
              <div className={classes.registerIcon}>
                <ComputerIcon className={classes.icon} />
              </div>
              <Link to={NavigationPathEnum.SIGN_IN} className={classes.registerLink}>
                <ListItemText>{SIGN_IN_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
            <ListItem button className={classes.registerButton}>
              <div className={classes.registerIcon}>
                <GroupIcon className={classes.icon} />
              </div>
              <Link to={NavigationPathEnum.SIGN_UP} className={classes.registerLink}>
                <ListItemText>{SIGN_UP_LINK_TEXT}</ListItemText>
              </Link>
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default NavbarComponent;