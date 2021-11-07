import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import React from 'react';
import {MAP_LONG_TEXT,MAP_LAT_TEXT,FLY_ZOOM_TEXT,MAP_ZOOM_TEXT} from '../map/map.const';
import { StoreInterface } from "../../store/store.interface";



const FlyToComponent = () : null => {
    const map = useMap();
    const selOffer = useSelector(({offers}: StoreInterface) => offers.selectedOffer);

    if (Object.keys(selOffer).length) {
      map?.flyTo([selOffer?.latitude, selOffer?.longitude], FLY_ZOOM_TEXT);
    }else{
        map?.flyTo([MAP_LONG_TEXT, MAP_LAT_TEXT],MAP_ZOOM_TEXT)
    }
    return null;
  };

  export default FlyToComponent;