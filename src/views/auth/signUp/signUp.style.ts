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
    btn: {
      width: '10rem',
      marginTop: '1rem',
      borderRadius: '20px',
    },
  })
);
