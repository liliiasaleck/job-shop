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
    },
    main: {
      display: 'flex',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      width: '45%',
      marginLeft: '15rem',
      color: 'grey',
      border: '1px solid lightgrey',
      borderRadius: '40px',
    },
    slider: {
      width: '400px',
      color: '#f50057',
    },
  })
);
