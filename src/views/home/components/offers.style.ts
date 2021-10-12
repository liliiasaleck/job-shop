import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '80%',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    top: '57%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      position: 'fixed',
      top: '60%',
      left: '50%',
    },
  },
  offer: {
    width: '99%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    margin: '5px 5px',
    marginright: '30px',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  large: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  small: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
  },
 
  title: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  location: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  locationInfo: {
    display: 'flex',
    width: '10rem',
    justifyContent: 'space-between',
  },
  tech: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  link: {
    textDecoration: 'none',
  },
  salaryBox:{
    display:'flex'
  },
  image: {
    width: '120px',
    height: '50px',
    marginLeft: '1rem',
  },
  
}));
