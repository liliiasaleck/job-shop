import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles({
  main: {
    width: '300px',
    display: 'flex',
    flexDirection: 'row',
  },
  round: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'grey',
    margin: '0px 20px',
    color: 'white',
    cursor: 'pointer',
  },
});
