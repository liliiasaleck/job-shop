import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '35%',
    height: '83%',
    position: 'fixed',
    top: '58%',
    left: '83%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
