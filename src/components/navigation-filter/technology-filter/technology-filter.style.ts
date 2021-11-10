import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  filterBox: {
    overflowX: 'scroll',
    marginTop: '.5rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '0.7',
      height: '3.2rem',
    },
  },
  main: {
    display: 'flex',
  },
  round: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '38px',
    width: '38px',
    borderRadius: '30px',
    background: 'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))',
    padding: '15px 15px ',
    color: 'white',
    margin: '0px 10px',
    cursor: 'pointer',
  },
  display: {
    fontSize: '11px',
    color: 'rgb(117, 117, 117)',
    display:'flex',
    width:'100%',
    justifyContent:'space-around',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
