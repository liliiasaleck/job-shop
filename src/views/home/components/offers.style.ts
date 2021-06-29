import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '98vh',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    paddingTop: '9rem',
    top: '50%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
  salary: {
    color: 'rgb(30, 198, 108)',
  },
  title: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  location: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  tech: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
}));
