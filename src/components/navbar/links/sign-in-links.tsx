import {Button} from '@material-ui/core';
import React, { ReactElement } from 'react';
import {Link} from 'react-router-dom';
import { NavigationPathEnum } from '../../../ts/enum';
import {useStyles} from '../navbar.style';
import {SIGN_IN_LINK_TEXT} from './links.const';


const SignInLinksComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <>
      <Link to={NavigationPathEnum.SIGN_IN} className={classes.signInButtonLink}>
        <Button className={classes.signInButton}>{SIGN_IN_LINK_TEXT}</Button>
      </Link>
    </>
  );
};

export default SignInLinksComponent;