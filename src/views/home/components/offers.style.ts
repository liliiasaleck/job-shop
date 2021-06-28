import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '98vh',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    paddingTop: '9rem',
    top: '50%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
  },
  offer: {
    width: '99%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    margin: '5px 5px 5px',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
  },
}));
