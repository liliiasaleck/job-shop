import {Button} from '@material-ui/core';
import React, { ReactElement } from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../../../routing/routes';
import {useStyles} from '../navbar.style';


interface SignInLinksProps{}

const SignInLinks = ({}: SignInLinksProps): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Link to={routes.signIn} className={classes.signInButtonLink}>
        <Button className={classes.signInButton}>Sign in</Button>
      </Link>
    </>
  );
};

export default SignInLinks;
