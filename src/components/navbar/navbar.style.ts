import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logo: {
    color: '#484848',
    fontSize: '35px',
    marginBottom: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  
  },
  logoDiv:{
    display:'flex',
  },
  title: {
    marginLeft: '15px',
    color: '#909090',
    fontSize: '15px',
    marginTop:'1.3rem',
    [theme.breakpoints.down('md')]: {
      marginTop:'0.8rem',
      fontSize: '12px',


    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',

    },
  },
  toolbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid gainsboro',
    display:"flex",
    justifyContent: "space-between"
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
  signInButton: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    color: '#fff',
    borderRadius: '20px',
    marginRight: '1rem',
    width: '100px',
    backgroundColor: '#ff4081',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    
    
  },
}));
