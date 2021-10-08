import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    form: {
      position: 'absolute',
      top: '70%',
      left: '50%',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '30px',
      overflow: 'hidden',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    textField: {
      width: '15rem',
      borderBottom: 'none',
      marginLeft: '2rem',
      marginRight: '2rem',
    },
    title: {
      marginTop: '2%',
      marginBottom: '2%',
      fontSize: '18px',
      color: '#f50057',
    },
    offerTitle: {
      width: '60%',
      marginRight: '2rem',
      marginLeft: '2rem',
    },
    formControl: {},
    select: {
      marginTop: theme.spacing(2),
      width: '15rem',
    },
    btn: {
      textTransform: 'capitalize',
      fontSize: '16px',
    },
    textarea: {
      width: '100%',
      fontSize: '16px',
      padding: '10px 10px 10px 10px',
    },
    submitbtn: {
      width: '10rem',
      marginTop: '2rem',
      borderRadius: '20px',
      textTransform: 'capitalize',
      fontSize: '16px',
    },
  })
);
