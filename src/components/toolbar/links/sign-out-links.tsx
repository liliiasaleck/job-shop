import {Button} from '@material-ui/core';
import React, { ReactElement } from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {signOut} from '../../../store/actions/auth-actions';
import {useStyles} from '../toolbar.style';
import { NavigationPathEnum } from '../../../ts/enum';
import {SIGN_OUT_LINK_TEXT} from '../links/links.const';


const SignOutLinksComponent = (): ReactElement=> {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Link to={NavigationPathEnum.SIGN_IN} className={classes.signInButtonLink}>
        <Button className={classes.signInButton} onClick={() => dispatch(signOut())}>
          {SIGN_OUT_LINK_TEXT}
        </Button>
      </Link>
    </>
  );
};

export default SignOutLinksComponent;
