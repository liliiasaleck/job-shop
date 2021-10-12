import {actionsTypes} from './../actions/actionsTypes';

const initState = {
  authError: '',
  user: localStorage.getItem('user'),
  successMessage: ''
};

const authReducer = (state = initState, action) => {
  const {payload} = action;
  const user = localStorage.getItem('user');
  switch (action.type) {
    case actionsTypes.SIGNUP_USER_ERROR:
      return {...state, authError: 'Register Failed'};
    case actionsTypes.SIGNUP_USER:
      console.log(payload);
      return {...state, authError: '',successMessage:'Account created, please login now'}
    case actionsTypes.LOGIN_USER_ERROR:
      return {...state, authError: 'Login Failed', user};
    case actionsTypes.LOGIN_USER:
      return {...state, authError: '', user, successMessage:'Login successful'};
      case actionsTypes.LOGOUT_USER:
      return {...state, authError: '', user,};
      case actionsTypes.REDIRECT_USER:
      return {...state, successMessage:'Please login to your account'};
    default:
      return state;
  }
};

export default authReducer;