import React from 'react';
import SignIn from './views/auth/signIn/signIn';
import OfferList from './views/home/homePage';
import SignUp from './views/auth/signUp/components/signUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import PostJob from './views/postJob/PostJob';
import SignInEmployer from './views/auth/signInEmployer/components/signInEmployer';
import './App.css';

import HomePage from './views/home/homePage';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Route component={OfferList} path="/" exact />
      <Route component={SignIn} path="/signin" />
      <Route component={SignUp} path="/signup" />
      <Route component={HomePage} path="/offers" />
      <Route component={PostJob} path="/postjob" />
      <Route component={SignInEmployer} path="/signinemployer" />
    </>
  );
};

export default App;
