import React, { ReactElement } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../../components/navbar/navbar';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button,Box} from '@material-ui/core';
import {useStyles} from './signIn.styles';
import {pageTitleText} from '../const/signIn.const';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../../store/actions/authActions';
import { FormDataProps } from '../../../ts/interfaces';



const SignIn = (): ReactElement => {
  const {register, handleSubmit} = useForm<FormDataProps>();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({email, password}) => {
    dispatch(signIn({email, password}));
  });

  const successMessage = useSelector(({auth}: any) => auth.successMessage);
  const user = useSelector(({auth}: any) => auth.user);
  if (user) return <Redirect to="/postJob" />;

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
          <Typography className={classes.title} variant="h3">
            {pageTitleText}
          </Typography>
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
            Sign in
          </Button>
          <Typography>
            New account?
            <Link to="/signup" className={classes.signup}>
              Sign up
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
