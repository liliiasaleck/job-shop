import React, {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Navbar from '../../../components/navbar/navbar';
import {
  Typography,
  TextField,
  makeStyles,
  Button,
  Theme,
  createStyles,
  Box,
} from '@material-ui/core';
import {pageTitleText} from './components/const/signIn.const';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      width: '100vw',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textfield: {
      marginTop: '2rem',
      width: '20rem',
    },
    btn: {
      width: '10rem',
      marginTop: '2rem',
      borderRadius: '20px',
    },
  })
);

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
