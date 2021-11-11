import React, {ReactElement, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button, Checkbox, Box} from '@material-ui/core';
import {useStyles} from './sign-up.style';
import {useDispatch, useSelector} from 'react-redux';
import {clearMessage, signUp} from '../../store/actions/auth.actions';
import {FormDataProps} from './sign-up.interface';
import {NavigationPathEnum} from '../../enums/navigation-path.enum';
import {StoreInterface} from '../../store/store.interface';
import {
  SIGN_UP_TEXT,
  REGISTER_BUTTON_TEXT,
  SIGN_UP_LINK_TEXT,
  SIGN_IN_LINK_TEXT,
} from './sign-up.const';
import { Spinner } from '../../components/spinner/spinner';

const SignUpComponent = (): ReactElement => {
  const {register, handleSubmit} = useForm<FormDataProps>();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({email, password} :FormDataProps) => {
    dispatch(signUp({email, password}));
  });

  const signUpError = useSelector(({auth}: StoreInterface) => auth.authError);
  const successMessage = useSelector(({auth}: StoreInterface) => auth.successMessage);
  if (successMessage) {
    return <Redirect to={NavigationPathEnum.SIGN_IN} />;
  }else{
    signUpError;
  }
  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" action="#" onSubmit={onSubmit}>
          <Typography className={classes.title}>{SIGN_UP_TEXT}</Typography>
          <Typography className={classes.errorMessage}>{signUpError}</Typography>
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
            type="password"
            variant="outlined"
            {...register('password')}
            required
          />
          <Button type="submit" variant="contained" className={classes.btn}>
            {REGISTER_BUTTON_TEXT}
          </Button>
          <Typography>
            {SIGN_UP_LINK_TEXT}
            <Link to={NavigationPathEnum.SIGN_IN} onClick={()=> dispatch(clearMessage())} className={classes.signin}>
              {SIGN_IN_LINK_TEXT}
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignUpComponent;