import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {color: 'inherit'},
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#A9A9A9',
    },
    search: {
      position: 'relative',
      backgroundColor: 'rgb(243, 246, 248)',
      borderRadius: '30px',
      height: '40px',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(),
        width: 'auto',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })
);
