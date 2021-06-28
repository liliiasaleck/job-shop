import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Navbar from '../../../components/navbar/navbar';
import {Typography, TextField, Button, Box} from '@material-ui/core';
import {pageTitleText} from './const/signIn.const';
import {useStyles} from './signIn.style';

type FormData = {
  email: string;
  password: string;
};

const SignIn = ({email, password}: FormData): ReactElement => {
  // const [name, setName] = useState('');
  const {register, handleSubmit} = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({email, password}) => {
    console.log(email, password);
  });

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
          <Typography variant="h4">{pageTitleText}</Typography>
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
          <Button variant="contained" color="secondary" className={classes.btn}>
            Sign in
          </Button>
          <Typography>
            New account? <Link to="/signup">Register</Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
