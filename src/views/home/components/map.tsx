import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "35%",
    height: "100%",
    border: "1px solid lightgrey",
  },
});

const Map: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.container}>Map</div>;
};

export default Map;
