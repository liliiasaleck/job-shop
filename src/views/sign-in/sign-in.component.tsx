import React, {ReactElement} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button, Box} from '@material-ui/core';
import {useStyles} from './sign-in.styles';
import {useDispatch, useSelector} from 'react-redux';
import {clearMessage, signIn} from '../../store/actions/auth-actions';
import {FormDataProps} from './sign-in.interface';
import {NavigationPathEnum} from '../../ts/enum';
import {StoreInterface} from '../../store/store.interface';
import {
  SIGN_IN_TEXT,
  SIGN_IN_BUTTON_TEXT,
  NEW_ACCOUNT_TEXT,
  SIGN_UP_LINK_TEXT,
} from './sign-in.const';

const SignInComponent = (): ReactElement => {
  const {register, handleSubmit} = useForm<FormDataProps>();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({email, password}: FormDataProps) => {
    dispatch(signIn({email, password}));
  });

  const successMessage = useSelector(({auth}: StoreInterface) => auth.successMessage);
  const user = useSelector(({auth}: StoreInterface) => auth.user);
  if (user) {
    return <Redirect to={NavigationPathEnum.POST_OFFER} />;
  }

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
          <Typography className={classes.title}>{SIGN_IN_TEXT}</Typography>
          <Typography className={classes.successMessage}>{successMessage}</Typography>
          <TextField
            className={classes.textfield}
            label="Email"
            variant="outlined"
            required
            {...register('email')}
          />
          <TextField
            className={classes.textfield}
            label="Password"
            variant="outlined"
            type="password"
            {...register('password')}
            required
          />

          <Button variant="contained" className={classes.btn} type="submit">
            {SIGN_IN_BUTTON_TEXT}
          </Button>
          <Typography>
            {NEW_ACCOUNT_TEXT}
            <Link
              to={NavigationPathEnum.SIGN_UP}
              onClick={() => dispatch(clearMessage())}
              className={classes.signup}
            >
              {SIGN_UP_LINK_TEXT}
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignInComponent;
