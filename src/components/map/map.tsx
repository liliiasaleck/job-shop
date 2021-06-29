import React from 'react';
import {useMediaQuery} from '@material-ui/core';
import {useStyles} from './map.style';
import {useTheme} from '@material-ui/styles';

const Map: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <h5 className={classes.container}>Offer Map</h5>
    </>
  );
};

export default Map;
