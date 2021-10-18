import React from 'react';
import {useStyles} from './map.style';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './map.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Map: React.FC = () => {
  const classes = useStyles();

  const offersList = useSelector(({offers}: any) => offers.offersList);

  return (
    <div className={classes.container}>
      <MapContainer center={[51.9194, 19.1451]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/lilisaleck/ckror7g104glw17modhmn4e38/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlsaXNhbGVjayIsImEiOiJja3JvcmQyNmoxOWt5MnFudmRyNW1zZXYzIn0.NumWx7r3TL6dVWONLYmH8Q
"
        />
        {offersList &&
          offersList.map((o) => {
            return (
              <Marker key={o.id} position={[+o.latitude, +o.longitude]}>
                <Popup>
                  <Link
                    to={{
                      pathname: `/singleoffer/${o.title.replace(/\s/g, '-')}`,
                      state: o,
                    }}
                  >
                    {o.title}
                    
                  </Link>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

export default Map;
