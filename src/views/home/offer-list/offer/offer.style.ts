import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    top: '14%',
    backgroundColor: '#fafafa',
    width: '65%',
    overflowY: 'scroll',
    position: 'fixed',
    height: '86%',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  smallTitle: {
    color: 'grey',
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  subTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  top: {
    background:
      ' center center / cover no-repeat, linear-gradient(30deg, rgb(59, 89, 152), rgb(112, 140, 199))',
    marginLeft: '1rem',
    marginRight: '.5rem',
    borderRadius: '5px',
    height: '220px',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
  },
  maininfo: {
    paddingTop: '3rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    color: 'white',
  },
  btnback: {
    height: '30px',
    marginLeft: '20px',
    transform: 'translateY(170%)',
    color: 'white',
    
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
    color: '#37474F',
    boxShadow: ' rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '0.6rem',
    [theme.breakpoints.down('md')]: {
      width: '160px',
      height: '65px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90px',
      height: '65px',
      fontSize: '12px',
    },
  },
  description: {
    backgroundColor: 'rgb(255, 255, 255)',
    marginLeft: '1rem',
    marginRight: '.5rem',
    padding: '1rem',
    marginBottom: '1rem',
    color: '#37474F',
    borderRadius: '5px',
    height: 'auto',
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
    width: '10rem',
    borderRadius: '20px',
    color:'#ffffff',
    backgroundColor: '#ff4081',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#ff4081',
    }
  },
  firstform: {
    margin: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  secondform: {
    margin: '3rem',
  },
  thirdform: {
    marginLeft: '2rem',
    color: 'rgb(135, 152, 173)',
  },
  icon: {
    color: 'rgb(135, 152, 173)',
  },
  textarea: {
    width: '100%',
  },
  image: {
    maxWidth: '7rem',
    position:'relative',
    maxHeight: '2rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '4rem',
    },
  },
  imagebox: {
    width: '8rem',
    backgroundColor: 'rgb(255 255 255 / 48%)',
    borderRadius: '50%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding:'15px 10px',
    height: '8rem',
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '70px',
      height: '70px',
    },
  },
  descriptionText: {
    padding: '1rem',
    color: 'rgb(55, 71, 79)',
    fontWeight: 'bold',
  },
  applyJobText:{
    padding: '1rem 1rem 1rem 2rem',
    color: 'rgb(55, 71, 79)',
    fontWeight: 'bold',
  },
  aboutCompany: {
    fontSize: '15px',
    paddingLeft:'1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  uploadBtn: {
    marginTop: '2rem',
  },
  fetch: {
    paddingLeft: '10px',
    color: 'red',
  },
}));
