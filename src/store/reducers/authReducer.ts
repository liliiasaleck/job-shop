import {actionsTypes} from './../actions/actionsTypes';

const initState = {
  authError: '',
  userJWT: '',
  successMessage: ''
};

const authReducer = (state = initState, action) => {
  const {payload} = action;
  switch (action.type) {
    case actionsTypes.SIGNUP_USER_ERROR:
      return {...state, authError: 'Register Failed'};
    case actionsTypes.SIGNUP_USER:
      console.log(payload);
      return {...state, authError: '',successMessage:'Account created, please login now'}
    case actionsTypes.LOGIN_USER_ERROR:
      return {...state, authError: 'Login Failed'};
    case actionsTypes.LOGIN_USER:
      return {...state, authError: ''};
    default:
      return state;
  }
};

export default authReducer;
