import {colors, createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      width: '100vw',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textfield: {
      marginTop: '2rem',
      width: '25rem',
      [theme.breakpoints.down('sm')]: {
        width: '17rem',
      },
    },
    title: {
      marginBottom: '1rem',
      fontSize:'3rem',
      [theme.breakpoints.down('sm')]: {
        fontSize:'1.8rem',
      },
    },
    btn: {
      width: '15rem',
      margin: '2rem 2rem',
      borderRadius: '20px',
      textTransform: 'capitalize',
      backgroundColor:'#ff4081',
      '&:hover': {
        backgroundColor: '#ff4081',
    },
      color:'white',
      [theme.breakpoints.down('sm')]: {
        width: '10rem',
      },
    },
    signup: {
      textDecorationLine: 'none',
      color:'#ff4081',

    },
    successMessage: {
      color: 'green',
      fontSize: '14px',
      borderRadius: '3px',
    },
    errorMessage:{
      color: 'red',
      fontSize: '14px',
      borderRadius: '3px',
    }
  })
);
