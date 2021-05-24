import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../../../components/navbar/navbar';
import {useForm} from 'react-hook-form';
import {
  Typography,
  TextField,
  Container,
  makeStyles,
  Button,
  Checkbox,
  Theme,
  createStyles,
  Box,
} from '@material-ui/core';

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
      marginTop: '1rem',
      borderRadius: '20px',
    },
  })
);

type FormData = {
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  // const [name, setName] = useState("");
  const {register, handleSubmit} = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({email, password}) => {
    console.log(email);
  });

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <form className={classes.form} noValidate autoComplete="off" action="#" onSubmit={onSubmit}>
          <Typography variant="h3">Get started for free</Typography>
          <TextField
            className={classes.textfield}
            label="Email"
            variant="outlined"
            {...register('email')}
          />
          <TextField
            className={classes.textfield}
            label="Password"
            variant="outlined"
            {...register('password')}
            required
          />
          <Checkbox className={classes.btn} />
          <Typography>I accept terms of service *</Typography>
          <Button variant="contained" color="secondary" className={classes.btn}>
            Register
          </Button>
          <Typography>
            Already have an account? <Link to="/signin">Sign in</Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default SignUp;
