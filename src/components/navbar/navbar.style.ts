import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles({
  logo: {
    color: 'black',
    fontSize: '30px',
    marginBottom: '10px',
  },
  title: {
    flexGrow: 1,
    marginLeft: '10px',
    color: 'grey',
  },
  toolbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid lightgrey',
  },
  header: {
    boxShadow: '0px 0px 0px 0px',
  },
  list: {
    width: '300px',
    paddingLeft: '30px',
  },
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit',
    paddingLeft: '30px',
  },
});
