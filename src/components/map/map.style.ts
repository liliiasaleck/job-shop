import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '35%',
    height: '80%',
    position: 'absolute',
    top: '57%',
    left: '83%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
