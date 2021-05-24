import {
  Icon,
  Button,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../../components/navbar/navbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    form: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      height: '100vh',
      zIndex: 1,
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '30px',
      overflow: 'hidden',
      overflowY: 'scroll',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    title: {
      marginTop: '2%',
      marginBottom: '2%',
      fontSize: '18px',
      color: '#f50057',
    },
    offerTitle: {
      width: '60%',
    },
    formControl: {
      margin: theme.spacing(3),
      minWidth: 120,
    },
    select: {
      marginTop: theme.spacing(2),
      width: '150px',
    },
  })
);

const Brands: React.FC = () => {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setType(event.target.value as string);
  };

  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <Button aria-controls="simple-menu" endIcon={<Icon>arrow_back</Icon>} />
          <Typography className={classes.title}>About company </Typography>
          <TextField className={classes.textField} id="standard-basic" label="Company name" />
          <TextField className={classes.textField} id="standard-basic" label="Company size" />
          <TextField className={classes.textField} id="standard-basic" label="Company website" />

          <Typography className={classes.title}>Position info</Typography>
          <TextField className={classes.offerTitle} id="standard-basic" label="Offer title" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Experience level</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value={10}>Junior</MenuItem>
              <MenuItem value={20}>Mid</MenuItem>
              <MenuItem value={30}>Senior</MenuItem>
            </Select>
          </FormControl>
          <Typography className={classes.title}>Employment type</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Employment type</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value={10}>B2B</MenuItem>
              <MenuItem value={20}>Permanent</MenuItem>
              <MenuItem value={30}>Mandate contract</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={classes.textField}
            id="standard-basic"
            label="Monthly salary from (gross)"
          />
          <TextField
            className={classes.textField}
            id="standard-basic"
            label="Monthly salary from (gross)"
          />
          <Typography className={classes.title}>Main technology</Typography>
          <div>technologies ICONS</div>
          <Typography className={classes.title}>Job description</Typography>
          <div>TEXTFIELD</div>
          <Button type="submit" aria-controls="simple-menu" aria-haspopup="true">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Brands;
