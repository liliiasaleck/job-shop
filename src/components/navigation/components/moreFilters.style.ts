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
    },
    main: {
      display: 'flex',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      width: '45%',
      marginLeft: '15rem',
      border: '1px solid lightgrey',
      borderRadius: '40px',
      textTransform: 'capitalize',
    },
    button: {
      color: 'rgb(119, 119, 119)',
      textTransform: 'capitalize',
      border: '1px solid #D0D0D0',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
    },
    item: {
      border: '1px solid #D0D0D0',
      borderRadius: '40px',
      margin: '10px 10px 10px 10px',
      color: '#99A1AB',
    },
    box: {
      display: 'flex',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      margin: '10px 10px',
    },
  })
);
