import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    top: '12%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    padding: '20px 20px',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '71%',
    height: '30px',
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    top: '20%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    padding: '20px 20px',
  },
});
