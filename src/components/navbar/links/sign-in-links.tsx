import {Button} from '@material-ui/core';
import React, {ReactElement} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearMessage} from '../../../store/actions/auth.actions';
import {NavigationPathEnum} from '../../../enums/navigation-path.enum';
import {useStyles} from '../navbar.style';
import {SIGN_IN_LINK_TEXT} from './links.const';

const SignInLinksComponent = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Link to={NavigationPathEnum.SIGN_IN} className={classes.signInButtonLink}>
        <Button className={classes.signInButton} onClick={() => dispatch(clearMessage())}>
          {SIGN_IN_LINK_TEXT}
        </Button>
      </Link>
    </>
  );
};

export default SignInLinksComponent;