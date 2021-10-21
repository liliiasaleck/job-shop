import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../../components/navbar/navbar';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button, Checkbox, Box} from '@material-ui/core';
import {useStyles} from './signUp.style';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../../store/actions/authActions';
import {pageTitleText, SignUpTitleText} from '../const/signIn.const';

type FormData = {
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {register, handleSubmit} = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({email, password}) => {
    dispatch(signUp({email, password}));
  });
  const dispatch = useDispatch();

  const signUpError = useSelector(({auth}: any) => auth.authError);

  const successMessage = useSelector(({auth}: any) => auth.successMessage);
  if (successMessage) return <Redirect to="/signIn" />;

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" action="#" onSubmit={onSubmit}>
          <Typography variant="h3">{SignUpTitleText}</Typography>
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
          {/* <div className={classes.checkbox}>
            <Checkbox required />
            <Typography>I accept terms of service </Typography>
          </div> */}
          <Button type="submit" variant="contained" className={classes.btn}>
            Register
          </Button>
          <Typography>
            Already have an account?
            <Link to="/signin" className={classes.signin}>
              Sign in
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignUp;
