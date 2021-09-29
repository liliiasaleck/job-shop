import React, {ReactElement} from 'react';
import Navbar from '../../../components/navbar/navbar';
import {Box, Button, Checkbox, TextField, Typography} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useStyles} from './signIn.styles';

type FormData = {
  email: string;
  password: string;
};

const SignInEmployer = ({email, password}: FormData): ReactElement => {
  const classes = useStyles();
  const {register, handleSubmit} = useForm<FormData>();

  const onSubmit = handleSubmit(({email, password}) => {
    console.log(email, password);
  });

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
          <Typography className={classes.title} variant="h5">
            jobshop.it
          </Typography>
          <TextField
            className={classes.textfield}
            label="Email"
            variant="outlined"
            {...register('email')}
            required
          />
          <TextField
            className={classes.textfield}
            label="Password"
            variant="outlined"
            {...register('password')}
            required
          />
          <div>
            <Checkbox className={classes.checkbox} />
            <span>Remember me </span>
          </div>
          <Button variant="contained" color="secondary" className={classes.btn}>
            Sign in
          </Button>
        </form>
      </Box>
    </>
  );
};

export default SignInEmployer;
