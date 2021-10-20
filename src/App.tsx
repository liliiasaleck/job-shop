import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './routing/router';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
};

export default App;
