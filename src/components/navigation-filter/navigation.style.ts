import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    backgroundColor:'#ffffff',
    top: '12.7%',
    height:'5rem',
    width:'100%',
    paddingLeft:'0',
    paddingRight:'0',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
}));
