import { AppBar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    marginTop: "4%",
    boxShadow: "0px 0px 0px 0px",
  },
  toolbar: {
    backgroundColor: "white",
    borderTop: "1px solid lightgrey",
  },
});

const Navigation: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.main}>
        <Toolbar className={classes.toolbar}>
          <Button>SearchBar</Button>
          <Button>Filter</Button>
          <Button>Modal</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
