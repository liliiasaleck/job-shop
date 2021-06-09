import React, {ReactElement} from 'react';
import Navbar from '../../../../components/navbar/navbar';
import {
  Box,
  Button,
  Checkbox,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import {useForm} from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      width: '25vw',
      height: '50vh',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '30px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 2px 8px 24px',
    },
    form: {
      display: 'flex',
      justifyContent: 'spaceBetween',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textfield: {
      margin: '10px',
    },
    btn: {
      margin: '20px',
    },
    title: {
      padding: '20px',
    },
  })
);

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
          <Checkbox />
          <Typography>Remember me </Typography>
          <Button variant="contained" color="secondary" className={classes.btn}>
            Sign in
          </Button>
        </form>
      </Box>
    </>
  );
};

export default SignInEmployer;
