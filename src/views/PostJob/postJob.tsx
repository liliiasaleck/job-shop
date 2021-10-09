import {
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useStyles} from './postJob.style';
import {useHistory} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Navbar from '../../components/navbar/navbar';
import {skills} from '../../helpers/technology.const';
import { setOffers } from '../../store/actions/offersActions';
import { useDispatch } from 'react-redux';

const PostJob: React.FC = () => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const [address, setAddress] = useState('');



  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // useEffect(() => {
  //     dispatch(setOffers());
  // }, []);


  return (
    <>
      <Navbar />

      <Box className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <Button className={classes.btn} onClick={() => history.push('/')}>
            <ArrowBack />
            Back
          </Button>
          <Typography className={classes.title}>About company </Typography>
          <TextField className={classes.textField} label="Company name" />
          <TextField className={classes.textField} label="Company size" />
          <TextField className={classes.textField} label="Company website" />
          <Typography className={classes.title}>Position info</Typography>
          <TextField className={classes.offerTitle} label="Offer title" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Experience level</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input}
              onChange={handleChange}
            >
              <MenuItem value={10}>Junior</MenuItem>
              <MenuItem value={20}>Mid</MenuItem>
              <MenuItem value={30}>Senior</MenuItem>
            </Select>
          </FormControl>
          <Typography className={classes.title}>Employment type</Typography>
          <TextField className={classes.textField} label="Monthly salary from" />
          <TextField className={classes.textField} label="Monthly salary to" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Employment type</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input}
              onChange={handleChange}
            >
              <MenuItem value={10}>B2B</MenuItem>
              <MenuItem value={20}>Permanent</MenuItem>
              <MenuItem value={30}>Mandate contract</MenuItem>
            </Select>
          </FormControl>
          <Typography className={classes.title}>Main technology</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Tech stack</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input}
              onChange={handleChange}
            >
              {skills.map(({display}, index) => (
                <MenuItem key={index} value={display}>
                  {display}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography className={classes.title}>Job description</Typography>
          <TextareaAutosize className={classes.textarea} rowsMin={10} />
          <Typography className={classes.title}>Choose your location</Typography>
          <TextField className={classes.textField} label="Office city" />
          <TextField className={classes.textField} label="Office street" onChange={()=> handleAddressChange}/>
          <Button className={classes.submitbtn} variant="contained" color="secondary" onClick={() => dispatch(setOffers({address}))}>
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default PostJob;
