import React from 'react';
import Map from '../components/map/map.component';
import {NavigationPathEnum} from '../ts/enum';

const MainTemplateComponent = ({children}: any) => {
  const {pathname} = window.location;

  return (
    <>
      {children}
      {pathname === NavigationPathEnum.MAIN || pathname.slice(0, 12) === '/singleoffer' ? <Map /> : null}
    </>
  );
};

export default MainTemplateComponent;
