import React from 'react';
import {makeStyles} from '@material-ui/core';
import {useTheme} from '@material-ui/core';
import {useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '35%',
    height: '100%',
    position: 'absolute',
    paddingTop: '10rem',
    top: '50%',
    left: '83%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Map: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>Offer Map</div>
    </>
  );
};

export default Map;
