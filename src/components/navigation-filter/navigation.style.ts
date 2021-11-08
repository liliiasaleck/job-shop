import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    backgroundColor:'#ffffff',
    top: '11.5%',
    height:'5rem',
    width:'100%',
    paddingLeft:'0',
    paddingRight:'0',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      left: '50%',
      top: '13%',
      paddingBottom: '.2rem',

    },
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      paddingLeft: '2rem',
      paddingRight: '7rem',
      top: '12%',
    },
  },
}));
