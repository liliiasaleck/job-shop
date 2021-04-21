import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import OfferList from "./components/OfferList";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={OfferList} path="/" exact />
          <Route component={SignIn} path="/signin" />
          <Route component={SignUp} path="/signup" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
