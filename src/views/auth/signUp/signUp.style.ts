import {createStyles, makeStyles, Theme} from '@material-ui/core';

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
    },
    btn: {
      width: '15rem',
      margin: '2rem 2rem',
      borderRadius: '20px',
      textTransform: 'capitalize',
      backgroundColor:'#ff4081',
      color:'white'
    },
    signin: {
      textDecorationLine: 'none',
      color:'#ff4081',

    },
    checkbox: {
      display: 'flex',
      height: '10px',
      margin: '2rem 2rem',
      color: 'rgb(135, 152, 173)',
    },
  })
);
