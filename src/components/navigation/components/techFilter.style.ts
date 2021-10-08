import { makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    // [theme.breakpoints.down('md')]: {
    //   display: 'none',
    // },
  },
  round: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    width: '40px',
    borderRadius: '30px',
    backgroundColor: 'rgb(145, 147, 170)',
    padding: '15px 15px ',
    color: 'white',
    margin: '0px 10px',
    cursor: 'pointer',
  },

  icon: {},
}));
