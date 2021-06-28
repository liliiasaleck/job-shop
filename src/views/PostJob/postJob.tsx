import {
  Icon,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../../components/navbar/navbar';
import {useStyles} from './postJob.style';

const PostJob: React.FC = () => {
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
          <Button aria-controls="simple-menu" startIcon={<Icon>arrow_back</Icon>}>
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
          <TextField className={classes.textField} label="Monthly salary from (gross)" />
          <TextField className={classes.textField} label="Monthly salary from (gross)" />
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

export default PostJob;
