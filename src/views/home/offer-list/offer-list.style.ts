import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'absolute',
    top: '68%',
    left: '33%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: '85%',
      top: '61%',
      left: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '86%',
      top: '62%',
      left: '50%',
    },
  },
  offer: {
    width: '98%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    margin: '5px 5px',
    [theme.breakpoints.down('sm')]: {
    },
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  large: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  small: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
  },
  title: {
    color: 'rgb(55, 71, 79)',
    fontSize: '16px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
      maxWidth:'10rem'
    },
  },
  location: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
  },
  locationSecond: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
    marginLeft: '.5rem',
  },
  locationInfo: {
    display: 'inline-flex',
    width: '12rem',
  },
  tech: {
    color: 'rgb(153, 161, 171)',
    fontSize: '12px',
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '11px',
    paddingRight: '4px',
    paddingLeft: '4px',
  },
  link: {
    textDecoration: 'none',
  },
  salaryBox: {
    display: 'flex',
    color: 'rgb(30, 198, 108)',
    minWidth:'2.5rem',
  },
  salaryText: {
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '9px',
    },
  },
  image: {
    maxWidth: '7rem',
    position:'relative',
    maxHeight: '2rem',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '4rem',
    },
  },
  imageBox:{
    width: '8rem',
    padding:'15px 10px',
    height: '4rem',
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down('xs')]: {
      width: '5rem',
    },
  },
  more: {
    fontSize: '12px',
    color: 'blue',
  },
  noOffers:{
    position: 'fixed',
    top: '27%',
    left: '30%',
    display:'flex',
    flexDirection:'column',
    [theme.breakpoints.down('md')]: {
      left: '25%',
    },
    [theme.breakpoints.down('sm')]: {
      left: '15%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '8%',
    },
  },
  noOffersText:{
    color:'#ff4081',
    fontWeight:'bold',
    fontSize: '24px',
  },
  removeFilters:{
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: '14px',
    color: 'rgb(119, 119, 119)',
    border:'1px solid rgba(0, 0, 0, 0.23)',
    backgroundColor:'#ffffff',
    marginLeft:'5rem',
    marginTop:'1rem',
    borderColor: '#E4E8F0',
    borderRadius: '20px',
    marginRight: '1rem',
    width: '10rem',
  }
}));
