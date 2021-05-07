import React from "react";
import Map from "./components/map";
import Offers from "./components/offers";
import Navigation from "./components/navigation";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "20%",
  },
});
const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container className={classes.container}>
        <Map />
        <Offers />
      </Container>
    </>
  );
};

export default HomePage;
