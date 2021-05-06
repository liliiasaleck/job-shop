import React from "react";
import Navbar from "./components/navbar/navbar";
import SignIn from "./views/Auth/signIn/signIn";
import OfferList from "./views/Homepage/OfferList";
import SignUp from "./views/Auth/signUp/components/signUp";
import AboutUs from "./views/About/AboutUs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Brands from "./views/Brands/Brands";
import PostJob from "./views/PostJob/PostJob";
import SignInEmployer from "./views/Auth/signInEmployer/components/signInEmployer";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    marginTop: "5%",
  },
});
const App: React.FC = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <Container className={classes.root}>
        <Switch>
          <Route component={OfferList} path="/" exact />
          <Route component={SignIn} path="/signin" />
          <Route component={SignUp} path="/signup" />
          <Route component={AboutUs} path="/aboutus" />
          <Route component={OfferList} path="/offers" />
          <Route component={Brands} path="/brands" />
          <Route component={PostJob} path="/postjob" />
          <Route component={SignInEmployer} path="/signinemployer" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
