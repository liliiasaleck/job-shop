import React from "react";
import Navbar from "./components/navbar/navbar";
import SignIn from "./views/auth/signIn/signIn";
import OfferList from "./views/home/homePage";
import SignUp from "./views/auth/signUp/components/signUp";
import AboutUs from "./views/about/AboutUs";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Brands from "./views/brands/brands";
import PostJob from "./views/postJob/PostJob";
import SignInEmployer from "./views/auth/signInEmployer/components/signInEmployer";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import HomePage from "./views/home/homePage";

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
          <Route component={HomePage} path="/offers" />
          <Route component={Brands} path="/brands" />
          <Route component={PostJob} path="/postjob" />
          <Route component={SignInEmployer} path="/signinemployer" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
