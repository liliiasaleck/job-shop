import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    form: {
      position: 'absolute',
      top: '85%',
      left: '50%',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '3rem',
      overflow: 'hidden',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    textField: {
      width: '15rem',
      borderBottom: 'none',
      marginRight: '2rem',
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem',
      fontSize: '18px',
      color: '#37474f',
      fontWeight:'bold'
    },
    subTitle:{
      marginBottom: '1rem',
      fontSize: '14px',
      color: '#37474f',
    },
    offerTitle: {
      width: '55%',
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
      marginTop: '2rem',

    },
    textarea: {
      width: '100%',
      fontSize: '16px',
      padding: '10px 10px 10px 10px',
    },
    submitbtn: {
      width: '10rem',
      marginTop: '3rem',
      borderRadius: '20px',
      textTransform: 'capitalize',
      fontSize: '14px',
      backgroundColor:'#ff4081',
      color:'white'
    },
    salaryField:{
      width: '15rem',
      borderBottom: 'none',
      marginRight: '2rem',
      marginLeft:'2rem'
    }
  })
);
