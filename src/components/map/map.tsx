import React from 'react';
import {useStyles} from './map.style';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './map.css';
import { useSelector } from 'react-redux';

// const offersList = useSelector(({offers}: any) => offers.offersList);


const Map: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MapContainer center={[52.229675, 21.01223]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/lilisaleck/ckror7g104glw17modhmn4e38/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlsaXNhbGVjayIsImEiOiJja3JvcmQyNmoxOWt5MnFudmRyNW1zZXYzIn0.NumWx7r3TL6dVWONLYmH8Q
"
        />
        <Marker position={[52.229675, 21.01223]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
