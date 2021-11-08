import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    marginTop:'.9rem',
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
    [theme.breakpoints.down('md')]: {
      width: '35px',
      height: '35px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  display:{
    display: 'flex',
    fontSize:'11px',
    color:'rgb(117, 117, 117)',
    justifyContent:'space-around',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
