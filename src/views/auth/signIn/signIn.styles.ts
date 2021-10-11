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
      width: '20rem',
    },
    title: {
      marginBottom: '1rem',
    },
    btn: {
      width: '10rem',
      margin: '1rem 1rem',
      borderRadius: '20px',
      textTransform: 'capitalize',
    },
    signin: {
      textDecorationLine: 'none',
    },
    checkbox: {
      display: 'flex',
      height: '10px',
      margin: '2rem 2rem',
      color: 'rgb(135, 152, 173)',
    },

    successMessage: {
      color: 'green',
      fontSize: '14px',
      borderRadius: '3px',
    },
  })
);
