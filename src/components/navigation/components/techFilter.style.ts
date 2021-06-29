import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles({
  main: {
    width: '300px',
    display: 'flex',
    flexDirection: 'row',
  },
  round: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px',
    width: '35px',
    borderRadius: '30px',
    background: 'linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))',
    padding: '10px 10px ',
    color: 'white',
    margin: '0px 10px',
    cursor: 'pointer',
  },
  icon: {},
});
