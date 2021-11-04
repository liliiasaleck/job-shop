import React, {ReactElement} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../../components/toolbar/toolbar.component';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button, Checkbox, Box} from '@material-ui/core';
import {useStyles} from './sign-up.style';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../../store/actions/auth-actions';
import {FormDataProps} from '../sign-up/sign-up.interface';
import {NavigationPathEnum} from '../../../ts/enum';
import {StoreInterface} from '../../../store/store.interface';
import {
  SIGN_UP_TEXT,
  REGISTER_BUTTON_TEXT,
  SIGN_UP_LINK_TEXT,
  SIGN_IN_LINK_TEXT,
} from '../sign-up/sign-up.const';

const SignUpComponent = (): ReactElement => {
  const {register, handleSubmit} = useForm<FormDataProps>();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = handleSubmit(({email, password}) => {
    dispatch(signUp({email, password}));
  });

  const signUpError = useSelector(({auth}: any): StoreInterface => auth.authError);
  const successMessage = useSelector(({auth}: any): StoreInterface => auth.successMessage);

  if (successMessage) return <Redirect to={NavigationPathEnum.SIGN_IN} />;

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" action="#" onSubmit={onSubmit}>
          <Typography variant="h3">{SIGN_UP_TEXT}</Typography>
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
            <Link to={NavigationPathEnum.SIGN_IN} className={classes.signin}>
              {SIGN_IN_LINK_TEXT}
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignUpComponent;
