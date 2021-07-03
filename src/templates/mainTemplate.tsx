import Navigation from '../components/navigation/navigation';
import React from 'react';
import Map from '../components/map/map';
import {routes} from '../helpers/routes';

const MainTemplate = ({children}: any) => {
  const {pathname} = window.location;

  return (
    <>
      {children}
      {pathname === routes.main || pathname.slice(0, 12) === '/singleoffer' ? <Map /> : null}
    </>
  );
};

export default MainTemplate;
