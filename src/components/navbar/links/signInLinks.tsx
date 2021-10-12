import {Button} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../../../routing/routes';
import {useStyles} from '../navbar.style';

const SignInLinks: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Link to={routes.signIn}>
        <Button className={classes.signInButton}>Sign in</Button>
      </Link>
      
    </>
  );
};

export default SignInLinks;