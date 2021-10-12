import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logo: {
    color: '#484848',
    fontSize: '25px',
    marginBottom: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  
  },
  logoDiv:{
    display:'flex',
  },
  title: {
    marginLeft: '15px',
    color: '#909090',
    fontSize: '14px',
    marginTop:'0.7rem',
    [theme.breakpoints.down('md')]: {
      marginTop:'0.8rem',
      fontSize: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      display:'none'

    },
  },
  toolbar: {
    backgroundColor: 'white',
    borderBottom: '1px solid gainsboro',
    display:"flex",
    justifyContent: "space-between",
   
  },
  header: {
    boxShadow: '0px 0px 0px 0px',
    
  },
  list: {
    margin:'1rem 0 1rem 0 ',
    width: '17rem',
    color: '#484848',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    flex:'1',
  },
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit',
    paddingLeft: '30px',
  },
  buttons: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hamburger: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
  },
  menu: {
    fontWeight: 'bold',
    fontFamily: 'Open Sans, sans-serif',
    textTransform: 'uppercase',
    fontSize: '20px',
  },
  post: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    color: 'rgb(119, 119, 119)',
    border: '1px solid #D0D0D0',
    borderRadius: '20px',
    marginRight: '1rem',
    width: '100px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  signInButton: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: '14px',
    color: '#fff',
    borderRadius: '20px',
    marginRight: '1rem',
    width: '100px',
    backgroundColor: '#ff4081',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0.2rem',
      fontSize: '10px',
      width: '60px',
    },
  },
  signInButtonLink:{
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: '14px',
  },
  groupButton:{
   marginTop:'auto',
   width:'15rem',
   marginLeft:'1rem',

  },
  registerButton:{
    border:'1px solid lightgrey',
    borderRadius:'5px',
    marginTop:'1rem',
    height:'4rem',

  },
  registerLink:{
    color:'#37474f',
    textDecoration: 'none',
  },
  registerIcon:{
    backgroundColor:'rgb(252, 228, 236)',
    width:'2.5rem',
    height:'2.5rem',
    borderRadius:'50%',
    marginRight:'1rem',
    padding:'0.5rem'
  },
  icon:{
    color:'rgb(255, 64, 129)'
  }

 
}));
