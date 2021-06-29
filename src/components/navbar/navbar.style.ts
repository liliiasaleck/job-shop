import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles({
  logo: {
    color: '#484848',
    fontSize: '30px',
    marginBottom: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
  },
  title: {
    flexGrow: 1,
    marginLeft: '15px',
    color: '#909090',
    fontSize: '15px',
    fontFamily: 'Open Sans, sans-serif',
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
  },
  menu: {
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: '20px',
  },
});
