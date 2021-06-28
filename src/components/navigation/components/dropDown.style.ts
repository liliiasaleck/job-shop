import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    width: '12%',
    color: 'grey',
    border: '1px solid lightgrey',
    borderRadius: '40px',
    textAlign: 'left',
  },
  menu: {minWidth: '100% '},
  container: {
    display: 'flex',
  },
  title: {
    marginLeft: '15px',
  },
  city: {
    border: '1px solid lightgrey',
    borderRadius: '40px',
    margin: '10px 10px 10px 10px',
  },
  remote: {
    border: '1px solid lightgrey',
    borderRadius: '40px',
    width: '13%',
    margin: '10px 10px 10px 10px',
  },
  close: {marginLeft: '400px'},
}));
