import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      color: 'rgb(119, 119, 119)',
      width: '40%',
      [theme.breakpoints.down('md')]: {
        width: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        height: '100%',
        width: '100%',
      },
    },
    filtersContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    main: {
      border:'1px solid rgba(0, 0, 0, 0.23)',
      borderColor: '#E4E8F0',
      borderRadius: '40px',
      textTransform: 'capitalize',
      color: 'rgb(119, 119, 119)',
      marginLeft:'.7rem',
      marginRight:'.5rem',
      fontSize: '14px',
      width: '9rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '10px',
        minWidth: '8rem',
      },
    },
    item: {
      border:'1px solid rgba(0, 0, 0, 0.23)',
      borderColor: '#E4E8F0',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
      color: '#99A1AB',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },

    itemSelected: {
      border: '1px solid rgb(255,64,129)',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
      color: 'rgb(255,64,129)',
      backgroundColor: 'rgba(255, 64, 129, 0.08)',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
    box: {
      display: 'flex',
      width: 'auto',
      marginBottom: '15px',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    close: {
      marginLeft: '10rem',
      color: '#99A1AB',
    },
    text: {
      margin: '15px 15px',
      fontWeight: 'bold',
    },
    slider: {
      color: '#ab47bc',
      marginTop: '5px',
      marginBottom: '15px',
    },
    sliderbox: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '20px',
    },
    slidervalue: {
      border:'1px solid rgba(0, 0, 0, 0.23)',
      borderColor: '#E4E8F0',
      borderRadius: '40px',
      width: '200px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#99A1AB',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '130px',
        fontSize: '12px',
      },
    },
    clearBtn: {
      textTransform: 'capitalize',
      border:'1px solid rgba(0, 0, 0, 0.23)',
      borderColor: '#E4E8F0',
      borderRadius: '40px',
      marginTop: '1rem',
      marginBottom: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
    showBtn: {
      textTransform: 'capitalize',
      borderRadius: '40px',
      color: 'white',
      backgroundColor: '#ff4081',
      marginTop: '1rem',
      marginBottom: '15px',
      '&:hover': {
        backgroundColor: '#ff4081',
    },
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
  })
);
