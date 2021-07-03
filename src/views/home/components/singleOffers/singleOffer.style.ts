import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '7rem',
    backgroundColor: '#fafafa',
    width: '64%',
  },
  top: {
    background:
      'linear-gradient(0deg, rgba(195,34,87,0.06906512605042014) 0%, rgba(200,45,253,0.46682422969187676) 100%)',
    margin: '10px',
    borderRadius: '5px',
    height: '220px',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
  },
  maininfo: {
    paddingTop: '3rem',
    paddingLeft: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  btnback: {
    height: '30px',
    marginLeft: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    transform: 'translateY(170%)',
  },
  information: {
    transform: 'translateY(-40%)',
    display: 'flex',
    justifyContent: 'space-around',
  },
  infodiv: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '180px',
    height: '70px',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    backgroundColor: 'rgb(255, 255, 255)',
    margin: '10px',
    borderRadius: '5px',
    height: '300px',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
  },
  divform: {
    backgroundColor: 'rgb(255, 255, 255)',
    margin: '10px',
    borderRadius: '5px',
    height: '500px',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
  },
  form: {
    height: '100%',
  },
  textfield: {
    width: '45%',
    color: 'rgb(191, 197, 210)',
  },
  signbtn: {
    marginLeft: '3rem',
    marginTop: '2rem',
    width: '10rem',
    borderRadius: '20px',
    textTransform: 'capitalize',
  },
  firstform: {
    margin: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  secondform: {
    margin: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  thirdform: {
    marginLeft: '2rem',
    color: 'rgb(135, 152, 173)',
  },
  icon: {
    color: 'rgb(135, 152, 173)',
  },
  textarea: {
    width: '47%',
  },
}));
