import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    form: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      height: '100vh',
      zIndex: 1,
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '30px',
      overflow: 'hidden',
      overflowY: 'scroll',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
      borderBottom: 'none',
    },
    title: {
      marginTop: '2%',
      marginBottom: '2%',
      fontSize: '18px',
      color: '#f50057',
    },
    offerTitle: {
      width: '60%',
    },
    formControl: {
      margin: theme.spacing(3),
      minWidth: 120,
    },
    select: {
      marginTop: theme.spacing(2),
      width: '150px',
    },
  })
);
