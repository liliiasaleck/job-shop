import React, {ReactElement} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../views/home/home-page';
import PostOffer from '../views/post-offer/post-offer.component';
import Offer from '../views/home/offer-list/offer/offer.component';
import Navbar from '../components/navbar/navbar.component';
import MainTemplate from '../components/main-template';
import {NavigationPathEnum} from '../enums/navigation-path.enum';
import SignInComponent from '../views/sign-in/sign-in.component';
import SignUpComponent from '../views/sign-up/sign-up.component';

const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <MainTemplate>
          <Route path={NavigationPathEnum.MAIN} component={HomePage} exact/>
          <Route path={NavigationPathEnum.SINGLE_OFFER} component={Offer} />
          <Route path={NavigationPathEnum.SIGN_IN} component={SignInComponent}/>
          <Route path={NavigationPathEnum.SIGN_UP} component={SignUpComponent}/>
          <Route path={NavigationPathEnum.POST_OFFER} component={PostOffer}/>
        </MainTemplate>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
