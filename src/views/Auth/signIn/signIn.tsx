import React, { ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Container , makeStyles , Button} from '@material-ui/core';
import { pageTitleText } from './components/const/signIn.const';

const useStyles = makeStyles({
  form: {
    width: '00vw',
  },
  textfield: {
    width: '40%',
    display: 'block',
  },
  btn: {
    width: '15%',
    borderRadius: '20px',
  },
});

type FormData = {
  email: string;
  password: string;
};

const SignIn = ({email, password}: FormData): ReactElement => {
  // const [name, setName] = useState('');
  const { register, handleSubmit } = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <Container>
      <Typography variant='h3'>{pageTitleText}</Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}
      >
        <TextField
          className={classes.textfield}
          label='Email'
          variant='outlined'
          {...register('email')}
          required
        />
        <TextField
          className={classes.textfield}
          label='Password'
          variant='outlined'
          {...register('password')}
          required
        />
        <Button variant='contained' color='secondary' className={classes.btn}>
          Sign in
        </Button>
        <Typography>
          New account? <NavLink to='/signup'>Register</NavLink>
        </Typography>
      </form>
    </Container>
  );
};

export default SignIn;
