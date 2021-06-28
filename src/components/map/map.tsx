import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './map.style';

const Map: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <h5 className={classes.container}>Offer Map</h5>
    </>
  );
};

export default Map;
