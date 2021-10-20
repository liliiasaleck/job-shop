import {makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  mainLocation: {
    color: 'grey',
    border: '1px solid #D0D0D0',
    borderRadius: '40px',
    textTransform: 'capitalize',
    width: '10rem',
    [theme.breakpoints.down('md')]: {
      
      fontSize:'12px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '8rem',

      fontSize:'9px',
    },
  },

  mainSelectedLocation: {
    width: '10rem',
    color: 'rgb(255,64,129)',
    border: '1px solid rgb(255,64,129)',
    borderRadius: '40px',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255, 64, 129, 0.08)',
    [theme.breakpoints.down('md')]: {
      
      fontSize:'12px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '8rem',

      fontSize:'8px',
    },
  },
  menu: {
    marginTop:'4rem',
    width: '50% ',
    boxSizing: 'inherit',
   
  },
  container: {
    display: 'flex',
  },
  containerOtherLocation: {
    display: 'flex',
    flexWrap: 'wrap',
    
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
    borderRadius: '40px',
    width: '18%',
    margin: '20px 10px 20px 10px',
    color: 'White',
    backgroundColor: '#ff4081',
    textTransform: 'capitalize',
  },
}));
