import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width: '12%',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'whitesmoke',
      borderRadius: '40px',
    },
    inputRoot: {},
    inputInput: {
      color: 'grey',
      margin: '0px 0px 0px 0px',
    },
    icon: {
      paddingLeft: '5%',
      color: 'grey',
    },
  })
);
