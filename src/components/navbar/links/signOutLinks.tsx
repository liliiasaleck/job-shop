import {Button} from '@material-ui/core';
import React, { ReactElement } from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {signOut} from '../../../store/actions/authActions';
import {routes} from '../../../routing/routes';
import {useStyles} from '../navbar.style';

interface SignOutLinksProps{}

const SignOutLinks = ({}: SignOutLinksProps): ReactElement=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Link to={routes.signIn} className={classes.signInButtonLink}>
        <Button className={classes.signInButton} onClick={() => dispatch(signOut())}>
          Sign Out
        </Button>
      </Link>
    </>
  );
};

export default SignOutLinks;
