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
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: 'none',
      marginLeft: '15%',
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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div>
        <Button aria-controls="simple-menu" endIcon={<Icon>arrow_back</Icon>} />
      </div>
      <form noValidate autoComplete="off">
        <div>
          <Typography className={classes.title}>About company</Typography>
          <TextField className={classes.textField} id="standard-basic" label="Company name" />
          <TextField className={classes.textField} id="standard-basic" label="Company size" />
          <TextField className={classes.textField} id="standard-basic" label="Company website" />
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <Typography className={classes.title}>Main technology</Typography>
          <div>technologies</div>
        </div>
        <div>
          <Typography className={classes.title}>Job description</Typography>
          <div>technologies</div>
        </div>
      </form>
      <Button type="submit" aria-controls="simple-menu" aria-haspopup="true">
        Submit
      </Button>
    </div>
  );
};

export default Brands;
