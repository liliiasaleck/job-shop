import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logo: {
    color: '#484848',
    fontSize: '30px',
    marginBottom: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: '15px',
    color: '#909090',
    fontSize: '15px',
    fontFamily: 'Open Sans, sans-serif',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid gainsboro',
  },
  header: {
    boxShadow: '0px 0px 0px 0px',
  },
  list: {
    width: '300px',
    color: '#484848',
    fontFamily: 'Open Sans, sans-serif',
  },
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit',
    paddingLeft: '30px',
  },
  buttons: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  hamburger: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
  },
  menu: {
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: '20px',
  },
  post: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    color: 'rgb(119, 119, 119)',
    border: '1px solid #D0D0D0',
    borderRadius: '20px',
    marginRight: '1rem',
    width: '100px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
