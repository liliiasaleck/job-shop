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
import DropDownMenu from "./DropDownMenu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Open Sans, sans-serif",
  },
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
    border: "1px solid grey",
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
          <Typography className={classes.title}>
            #1 Job Board for IT industry in Poland
          </Typography>
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

// const Navbar: React.FC = () => {
//   return (
//     <>
//       <nav>
//         <div className="nav-wrapper ">
//           <NavLink to="/" className="brand-logo ">
//             jobshop.it
//           </NavLink>
//           <ul id="nav-mobile" className="right hide-on-med-and-down">
//             <li>
//               <a href="/">Offers</a>
//             </li>
//             <li>
//               <a href="/">Brands</a>
//             </li>
//             <li>
//               <NavLink to="/signin">Sign in</NavLink>
//             </li>
//             <li>
//               <NavLink to="/signup">Sign up</NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
