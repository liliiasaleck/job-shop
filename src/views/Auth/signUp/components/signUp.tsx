import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Container , makeStyles , Button , Checkbox } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    marginTop: '20%',
  },
  form: { display: 'block' },
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
};

const SignUp: React.FC = () => {
  // const [name, setName] = useState("");
  const {register, handleSubmit} = useForm<FormData>();
  const classes = useStyles();

  const onSubmit = handleSubmit(({email}) => {
    console.log(email);
  });

  return (
    <Container className={classes.root}>
      <Typography variant='h3'>Get started for free</Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete='off'
        action='#'
        onSubmit={onSubmit}
      >
        <TextField
          className={classes.textfield}
          label='Email'
          variant='outlined'
          {...register('email')}
        />
        <Checkbox className={classes.btn} />
        <Button variant='contained' color='secondary' className={classes.btn}>
          Register
        </Button>
        <Typography>
          Already have an account? <NavLink to='/signin'>Sign in</NavLink>
        </Typography>
      </form>
    </Container>
  );
};

export default SignUp;
