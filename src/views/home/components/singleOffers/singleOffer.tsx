import {Box, Button} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import React from 'react';
import Navigation from '../../../../components/navigation/navigation';
import {useHistory} from 'react-router-dom';
import {useStyles} from './singleOffer.style';

const SingleOffer: React.FC = ({
  location: {
    state: {title, salary, city, companyName},
  },
}: any) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Navigation />
      <Box className={classes.box}>
        <h1>SINGLE OFFER</h1>
        <h2>{title}</h2>
        <h3>{salary}</h3>
        <h4>
          {city} | {companyName}
        </h4>
        <Button onClick={() => history.push('/')}>
          <ArrowBack />
        </Button>
      </Box>
    </>
  );
};

export default SingleOffer;
