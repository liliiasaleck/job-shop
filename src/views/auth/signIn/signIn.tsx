import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../../components/navbar/navbar';
import {useForm} from 'react-hook-form';
import {Typography, TextField, Button, Checkbox, Box} from '@material-ui/core';
import {useStyles} from './signIn.styles';
import {pageTitleText} from '../const/signIn.const';
import {useSelector} from 'react-redux';

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  // const [name, setName] = useState("");
  const {register, handleSubmit} = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({email, password}) => {
    console.log(email);
    
  });

  const successMessage = useSelector(({auth}: any) => auth.successMessage);


  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" action="#" onSubmit={onSubmit}>
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
            {...register('password')}
            required
          />

          <Button variant="contained" className={classes.btn}>
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
