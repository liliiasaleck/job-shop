import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
    },
    form: {
      position: 'absolute',
      top: '105%',
      left: '50%',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      textAlign: 'left',
      backgroundColor: 'white',
      paddingLeft: '6rem',
      overflow: 'hidden',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      [theme.breakpoints.down('md')]: {
        top: '110%',
        width: '80%',
      },
      [theme.breakpoints.down('sm')]: {
        top: '110%',
        width: '100%',
      },
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
      fontWeight:'bold',
    },
    subTitle:{
      marginBottom: '1rem',
      fontSize: '14px',
      color: '#37474f',
    },
    offerTitle: {
      width: '57%',
      marginLeft: '4.5rem',
      [theme.breakpoints.down('sm')]: {
        top: '110%',
        marginLeft: '0',
        width: '50%',
      },
    },
    formControl: {},
    select: {
      width: '12.5rem',
    },
    btn: {
      textTransform: 'capitalize',
      fontSize: '16px',
      marginTop: '2rem',
    },
    textarea: {
      width: '85%',
      fontSize: '16px',
      padding: '10px 10px 10px 10px',
    },
    submitbtn: {
      width: '12rem',
      marginTop: '3rem',
      marginBottom: '3rem',
      borderRadius: '30px',
      textTransform: 'capitalize',
      fontSize: '18px',
      backgroundColor:'#ff4081',
      color:'white',
      '&:hover': {
        backgroundColor: '#ff4081',
    },
    },
    salaryField:{
      width: '16rem',
      borderBottom: 'none',
      marginRight: '2rem',
      marginLeft:'4rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft:'0',
      },
    }
  })
);
