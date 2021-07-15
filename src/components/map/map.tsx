import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './map.style';
import {useTheme} from '@material-ui/styles';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Map: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.container}>Map</div>
    // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
  );
};

export default Map;
