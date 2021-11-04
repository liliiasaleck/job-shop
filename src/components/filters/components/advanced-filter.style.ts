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
      border: '1px solid lightgrey',
      borderRadius: '40px',
      textTransform: 'capitalize',
      color: 'grey',
      fontSize: '14px',
      width: '10rem',

      [theme.breakpoints.down('md')]: {
        fontSize: '9px',
        width: '8rem',
      },
    },

    item: {
      border: '1px solid #D0D0D0',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
      color: '#99A1AB',
    },

    itemSelected: {
      border: '1px solid rgb(255,64,129)',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
      color: 'rgb(255,64,129)',
      backgroundColor: 'rgba(255, 64, 129, 0.08)',
    },
    box: {
      display: 'flex',
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
    },
    dropdown: {
      width: '15%',
    },
    slider: {
      color: '#ab47bc',
      marginTop: '5px',
      marginBottom: '15px',
    },
    sliderbox: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '15px',
    },
    slidervalue: {
      border: '1px #D0D0D0 solid',
      borderRadius: '40px',
      width: '200px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#99A1AB',
      alignItems: 'center',
    },
    clearBtn: {
      textTransform: 'capitalize',
      borderRadius: '40px',
      color: 'white',
      backgroundColor: '#ff4081',
      marginTop: '10px',
      marginBottom: '15px',
    },
    showBtn: {
      textTransform: 'capitalize',
      border: '1px solid #D0D0D0',
      borderRadius: '40px',
      marginTop: '15px',
      marginBottom: '15px',
    },
  })
);
