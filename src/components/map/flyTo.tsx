import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import React from 'react';

const FlyTo: React.FC = () => {
    const map = useMap();
    const selOffer = useSelector(({offers}: any) => offers.selectedOffer);
    if (Object.keys(selOffer).length > 0) {
      map?.flyTo([selOffer?.latitude, selOffer?.longitude], 12);
    }else{
        map?.flyTo([51.9194, 19.1451], 6)
    }
    return null;
  };

  export default FlyTo;