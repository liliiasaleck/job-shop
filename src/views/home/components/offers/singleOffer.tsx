import {Box, Button, makeStyles} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import React from 'react';
import Navigation from '../navigation/navigation';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '10rem',
  },
}));

const SingleOffer: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <Button onClick={() => history.push('/')}>
          <ArrowBack />
        </Button>
      </Box>
    </>
  );
};

export default SingleOffer;
