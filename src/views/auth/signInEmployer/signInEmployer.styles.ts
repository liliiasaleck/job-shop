import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      width: '25vw',
      height: '50vh',
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '30px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 2px 8px 24px',
    },
    form: {
      display: 'flex',
      justifyContent: 'spaceBetween',
      flexDirection: 'column',
      alignItems: 'center',
    },
    textfield: {
      margin: '10px',
    },
    btn: {
      margin: '20px',
    },
    title: {
      padding: '20px',
    },
  })
);
