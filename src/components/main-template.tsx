import React, { useMemo } from 'react';
import Map from './map/map.component';
import {NavigationPathEnum} from '../ts/enum';

const MainTemplateComponent = ({children}: any) => {
  const {pathname} = window.location;
  const displayMap = useMemo((): any =>{
    return pathname === NavigationPathEnum.MAIN || pathname.includes(NavigationPathEnum.SINGLE_OFFER);
  }, [pathname]);
  return (
    <>
      {children}
      {displayMap ? <Map /> : null}
    </>
  );
};

export default MainTemplateComponent;
