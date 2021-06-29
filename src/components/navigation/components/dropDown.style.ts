import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    width: '12%',
    color: 'grey',
    border: '1px solid #D0D0D0',
    borderRadius: '40px',
    textTransform: 'capitalize',
  },
  menu: {minWidth: '100% '},
  container: {
    display: 'flex',
  },
  title: {
    margin: '10px 10px 10px 20px',
    color: '#99A1AB',
  },
  title2: {
    color: '#99A1AB',
  },
  city: {
    border: '1px solid #D0D0D0',
    borderRadius: '40px',
    margin: '10px 10px 10px 10px',
    color: '#99A1AB',
  },

  remote: {
    border: '1px solid #D0D0D0',
    borderRadius: '40px',
    width: '13%',
    margin: '20px 10px 10px 10px',
    color: '#99A1AB',
  },
  close: {
    marginLeft: '33rem',
    color: '#99A1AB',
  },
  clear: {
    border: '1px solid #D0D0D0',
    borderRadius: '40px',
    width: '18%',
    margin: '20px 10px 20px 10px',
    color: '#99A1AB',
    textTransform: 'capitalize',
  },
}));
