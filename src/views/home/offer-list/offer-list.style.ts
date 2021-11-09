import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '65%',
    height: '86%',
    overflow: 'hidden',
    overflowY: 'scroll',
    position: 'fixed',
    top: '59%',
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
    width: '99%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    margin: '5px 5px',
    marginright: '30px',
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
  },
  salaryText: {
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  image: {
    width: '5rem',
    height: '3.5rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '4rem',
      height: '3.5rem',
      marginLeft: '1rem',
    },
  },
  more: {
    fontSize: '12px',
    color: 'blue',
  },
  noOffers:{
    position: 'fixed',
    top: '15%',
    left: '30%',
    display:'flex',
    flexDirection:'column'
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