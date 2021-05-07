import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import DropDownMenu from "../dropDownMenu/dropDownMenu";
import { pageTitleText } from "./const/navigationPages.const";

const useStyles = makeStyles({
  logo: {
    color: "black",
    fontSize: "30px",
    marginBottom: "10px",
  },
  title: {
    flexGrow: 1,
    marginLeft: "10px",
    color: "grey",
  },
  toolbar: {
    backgroundColor: "white",
  },
  header: {
    boxShadow: "0px 0px 0px 0px",
  },
  list: {
    width: 250,
  },
  btnpost: {
    border: "1px solid lightgrey",
    borderRadius: "20px",
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
          <NavLink to="/" className={classes.logo}>
            jobshop.it
          </NavLink>
          <Typography className={classes.title}>{pageTitleText}</Typography>
          <NavLink to="/offers">
            <Button color="secondary">Offers</Button>
          </NavLink>
          <NavLink to="/brands">
            <Button>Brands</Button>
          </NavLink>
          <NavLink to="/postjob">
            <Button className={classes.btnpost}>Post a job</Button>
          </NavLink>
          <DropDownMenu />
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={open}>
        <List className={classes.list}>
          <ListItem divider>
            <Typography>jobshop.it</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NavLink to="/signinemployer">
                <ListItemText>Employer Panel</ListItemText>
              </NavLink>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NavLink to="/aboutus">
                <ListItemText>About us</ListItemText>
              </NavLink>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
