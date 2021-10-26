import React, { ReactElement } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../views/home/homePage';
import SignIn from '../views/auth/signIn/signIn';
import SignUp from '../views/auth/signUp/signUp';
import PostJob from '../views/PostJob/postJob';
import SingleOffer from '../views/home/components/singleOffers/singleOffer';
import Navbar from '../components/navbar/navbar';
import MainTemplate from '../helpers/mainTemplate';
import {routes} from './routes';


const Router = (): ReactElement  => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <MainTemplate>
          <Route component={HomePage} path={routes.main} exact />
          <Route component={SingleOffer} path={routes.singleOffer} />
          <Route component={SignIn} path={routes.signIn} />
          <Route component={SignUp} path={routes.signUp} />
          <Route component={PostJob} path={routes.postJob} />
        </MainTemplate>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
