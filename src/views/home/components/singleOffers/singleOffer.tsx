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
        <Button onClick={() => history.push('/')}>
          <ArrowBack />
        </Button>
        <h2>{title}</h2>
        <h3>{salary}</h3>
        <h4>
          {city} | {companyName}
        </h4>
      </Box>
    </>
  );
};

export default SingleOffer;
