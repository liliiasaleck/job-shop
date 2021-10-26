import React, { ReactElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './routing/router';


const App = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
};

export default App;
