import React from "react";
import Map from "./components/map";
import Offers from "./components/offers";
import Navigation from "./components/navigation/navigation";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 0px 0px 0px",
  },
  main: {
    width: "100%",
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Navigation />
      <Container className={classes.container}>
        <Offers />
        <Map />
      </Container>
    </div>
  );
};

export default HomePage;
